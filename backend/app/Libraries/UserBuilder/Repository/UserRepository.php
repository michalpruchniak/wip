<?php

namespace App\Libraries\UserBuilder\Repository;

use App\Models\User;

class UserRepository
{
    public function save(User $user): bool
    {
        return $user->save();
    }

    public function update(User $user, array $data): bool
    {
        return $user->update($data);
    }
}
