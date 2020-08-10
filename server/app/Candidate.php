<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Candidate extends Model
{
    protected $fillable = ['name', 'age', 'bio', 'candidate_number', 'facebook', 'instagram', 'youtube'];

    public function posts(){
        return $this->hasMany(Post::class);
    }
}
