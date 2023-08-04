<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AuthTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    public function test_valid_login_returns_jwt_token()
    {
        $response = $this->logged_in_user('password');
        $response->assertOk()
            ->assertJsonStructure(['jwt'])
            ->assertCookie('jwt');
    }

    public function test_wrong_creditionals_returns_status_401()
    {
        $response = $this->logged_in_user('test');
        $response->assertStatus(401);
    }

    public function test_loggedin_user_has_access_to_admin_area()
    {
        $this->logged_in_user('password');
        $response = $this->get('/api/users');
        $response->assertOk();
    }

    public function test_unlogged_user_doesnt_have_access_to_admin_area()
    {
        $this->logged_in_user('test');
        $response = $this->get('/api/users');
        $response->assertStatus(401);
    }

    public function test_entering_wrong_login_data_triggers_validation_errors()
    {
        $response = $this->logged_in_user('', null);
        $response->assertInvalid([
            'email' => 'The email field is required.',
            'password' => 'The password field is required.'
        ]);

        $response2 = $this->logged_in_user('a', 'helloWorld');
        $response2->assertInvalid([
            'email' => 'The email field must be a valid email address.',
            'password' => 'The password field must be between 4 and 45 characters.'
        ]);
    }

    /*
        Nie pokrywam aplikacji całkowicie testami, ponieważ to jest tylko aplikacja
        pokazowa, a nie produkcyjna
    */

    public function test_correctly_register_user()
    {
        $response = $this->postJson('/api/register', [
            'email' => fake()->unique()->safeEmail(),
            'name' => fake()->name,
            'lastname' => fake()->lastname,
            'job' => 1,
            'testing_systems' => 'Lorem ipsum',
            'raporting_systems' => 'Lorem ipsum',
        ]);

        $response->assertJson([
            'success' => true
        ]);
    }

    public function test_validation_until_register_user()
    {
        $response = $this->postJson('/api/register', [
            'job' => 1
        ]);

        $response->assertInvalid([
            'email' => 'The email field is required.',
            'name' => 'The name field is required.',
            'lastname' => 'The lastname field is required.',
            'testing_systems' => 'The testing systems field is required when job is 1.',
            'raporting_systems' => 'The raporting systems field is required when job is 1.'
        ]);

        $response->assertValid(['job']);
    }

    private function logged_in_user($password = '', $email = '')
    {
        $user = User::factory()->create();
        $response = $this->postJson('/api/login', [
            'email' => $email === '' ? $user->email : $email,
            'password' => $password
        ]);

        return $response;
    }
}
