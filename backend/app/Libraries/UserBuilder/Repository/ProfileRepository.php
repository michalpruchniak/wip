<?php

namespace App\Libraries\UserBuilder\Repository;

use App\Models\Profile;

class ProfileRepository
{
    public function save(Profile $profile): bool
    {
        return $profile->save();
    }
}
