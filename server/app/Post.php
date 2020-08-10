<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = ['title', 'author', 'body', 'resume', 'image', 'youtube'];

    public function candidate(){
        return $this-> belongsTo(Candidate::class);
    }
}
