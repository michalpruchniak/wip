<?php

namespace App\Libraries\UserBuilder;

use App\Libraries\UserBuilder\Repository\ProfileRepository;
use App\Libraries\UserBuilder\Repository\UserRepository;
use App\Models\User;
use App\Models\Profile;

class UserService
{
    public function create(array $userData, array $profileData): bool
    {
        $profileRepository = new ProfileRepository();
        $userRepository = new UserRepository();

        $user = new User($userData);
        if (!$userRepository->save($user)) {
            return false;
        }

        $profileData['user_id'] = $user->id;
        return $profileRepository->save(new Profile($profileData));
    }
}
