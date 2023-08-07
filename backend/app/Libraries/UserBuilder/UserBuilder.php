<?php

namespace App\Libraries\UserBuilder;

class UserBuilder
{
    private $userFields = [
        'email',
        'password'
    ];

    private $profileFields = [
        'name',
        'lastname',
        'email',
        'description',
        'job',
        'testing_systems',
        'raporting_systems',
        'selenium',
        'ide',
        'programming_languages',
        'mysql',
        'methodology',
        'scrum'
    ];

    private $user = [];
    private $profile = [];

    public function setElements(array $data): void
    {
        foreach ($data as $key => $value) {
            if (in_array($key, $this->userFields)) {
                $this->user[$key] = $value;
            }

            if (in_array($key, $this->profileFields)) {
                $this->profile[$key] = $value;
            }
        }
    }

    public function build(): bool
    {
        $userService = new UserService();

        return $userService->create(
            $this->getUserData(),
            $this->getProfileData()
        );
    }

    public function update(int $userId): bool
    {
        $userService = new UserService();

        return $userService->update(
            $userId,
            $this->getUserData(),
            $this->getProfileData()
        );
    }

    private function getUserData(): array
    {
        return $this->user;
    }

    private function getProfileData(): array
    {
        return $this->profile;
    }
}
