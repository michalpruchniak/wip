<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    protected $fillable = [
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

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
