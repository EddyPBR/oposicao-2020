<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\CandidateRequest;
use App\Post;
use App\Candidate;

class HomeController extends Controller
{

    public function index()
    {
        $posts = Post::orderBy('created_at', 'DESC')->take(3)->get();

        return $posts;
    }

    public function blog(){
        $posts = Post::paginate(6);

        return $posts;
    }

    public function post($post){
        $post = Post::find($post);
        $candidate = Candidate::find($post->candidate_id);

        $post['author_info'] = $candidate;

        return $post;
    }

    public function candidate($candidate){
        $candidate = Candidate::find($candidate);
        $post = $candidate->posts()->paginate(3);
        $post['user_info'] = $candidate;

        return $post;
    }
}
