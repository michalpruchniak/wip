<?php

namespace App\Libraries\UserBuilder;

use App\Models\Profile;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Hash;

class UserBuilder
{
    private $user;
    private $profile;

    private $userFields = ['email', 'password'];
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

    public function __construct()
    {
        $this->user = new Product(new User());
        $this->profile = new Product(new Profile());
    }

    public function setElements($array)
    {
        foreach ($array as $key => $value) {
            if (in_array($key, $this->userFields)) {
                $this->user->setElement($key, $value);
            }

            if (in_array($key, $this->profileFields)) {
                $this->profile->setElement($key, $value);
            }
        }
    }

    public function build()
    {
        $success = true;
        $this->generateEmptyData();
        try {
            $this->profile->save();
            $this->user->setElement('profile_id', $this->profile->getProduct()->id);
            $this->user->save();
        } catch (Exception $e) {
            $this->errors = false;
            $success = 'Nie udało się';
        }
        return $success;
    }

    public function getUser()
    {
        $this->user->getProduct();
    }

    private function generateEmptyData()
    {

        if (empty($this->user->getProduct()->password)) {
            $this->user->getProduct()->password = Hash::make('password');
        }

        if (empty($this->user->getProduct()->email)) {
            $this->user->getProduct()->email = 'testemail' . rand(1, 9999) . '@' . 'a' . rand(1, 99) . '.pl';
        }
    }
}
