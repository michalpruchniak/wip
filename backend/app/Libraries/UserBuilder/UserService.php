<?php

namespace App\Libraries\UserBuilder;

use App\Libraries\UserBuilder\Repository\ProfileRepository;
use App\Libraries\UserBuilder\Repository\UserRepository;
use App\Models\User;
use App\Models\Profile;

class UserService
{
    private $profileRepository;
    private $userRepository;

    public function __construct()
    {
        $this->profileRepository = new ProfileRepository();
        $this->userRepository = new UserRepository();
    }

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

    public function update(int $userId, array $userData, array $profileData): bool
    {


        $user = User::findOrFail($userId);

        /*
            Na chwilę obecną nie zakładam edytowania samegomodelu User. Zostawiam ten fragment kodu
            bardzoej informacyjnie.
        */

        if (!$this->userRepository->update($user, $userData)) {
            return false;
        }

        $profile = $user->profile;

        if (!$this->profileRepository->update($profile, $profileData)) {
            return false;
        }

        return true;
    }
}
