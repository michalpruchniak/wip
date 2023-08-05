<?php

namespace App\Libraries\UserBuilder\Repository;

use App\Models\Profile;

class ProfileRepository
{
    public function save(Profile $profile): bool
    {
        return $profile->save();
    }

    public function update(Profile $profile, array $data): bool
    {
        return $profile->update($data);
    }
}
