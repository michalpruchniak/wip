<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Profile;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $email = $this->faker->unique()->safeEmail();

        return [
            'email' => $email,
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
            'remember_token' => Str::random(10),
            'is_admin' => 0
        ];
    }

    /**
     * Define the state for creating a user with profile.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function withProfile()
    {
        return $this->afterCreating(function (User $user) {
            $user->profile()->create([
                'name' => $this->faker->name,
                'lastname' => $this->faker->lastname,
                'email' => $user->email,
                'user_id' => $user->id,
                'job' => 1,
                'testing_systems' => 'Lorem ipsum',
                'raporting_systems' => 'Lorem ipsum',
            ]);
        });
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
