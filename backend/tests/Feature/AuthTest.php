<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Testing\TestResponse;
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
        $response = $this->get('/api/user');
        $response->assertOk();
    }

    public function test_unlogged_user_doesnt_have_access_to_admin_area()
    {
        $this->logged_in_user('test');
        $response = $this->get('/api/user');
        $response->assertStatus(401);
    }

    private function logged_in_user($password)
    {
        $user = User::factory()->create();
        $response = $this->postJson('/api/login', [
            'email' => $user->email,
            'password' => $password
        ]);

        return $response;
    }
}
