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

    public function update(int $userId, array $userData, array $profileData): bool
    {
        $userRepository = new UserRepository();
        $profileRepository = new ProfileRepository();

        $user = User::find($userId);
        if (!$user) {
            return false; // Użytkownik nie istnieje
        }

        if (!$userRepository->update($user, $userData)) {
            return false; // Błąd aktualizacji użytkownika
        }

        $profile = $user->profile;
        if (!$profile) {
            return false; // Profil nie istnieje
        }

        if (!$profileRepository->update($profile, $profileData)) {
            return false; // Błąd aktualizacji profilu
        }

        return true;
    }
}
