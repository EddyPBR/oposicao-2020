<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = ['title', 'author', 'body', 'resume', 'image', 'youtube'];

    public function posts(){
        return $this-> belongsTo(Candidate::class);
    }
}
