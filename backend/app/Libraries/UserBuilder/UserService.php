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

        $profile = new Profile($profileData);
        if (!$profileRepository->save($profile)) {
            return false;
        }

        $userData['profile_id'] = $profile->id;

        return $userRepository->save(new User($userData));
    }
}
