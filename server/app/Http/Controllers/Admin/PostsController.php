<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Post;
use App\Candidate;
use App\Http\Requests\PostRequest;
use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class PostsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::all(['id', 'title', 'author']);

        return view('admin.posts.index', compact('posts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $candidates = Candidate::all(['name']);

        return view('admin.posts.create', compact('candidates'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PostRequest $request)
    {
        $data = $request->all();

        $candidate = Candidate::where('name', $data['author'])->first();

        $image = $request->file('image');
        $input['imagename'] = time().'.'.$image->getClientOriginalExtension();
        $destinationPath = storage_path('app/public/posts');
        $img = Image::make($image->getRealPath());
        $img->resize(870, 480, function ($constraint) {
            $constraint->aspectRatio();
        })->save($destinationPath.'/'.$input['imagename']);
   
        $image->move($destinationPath, $input['imagename']);

        $post = new Post;
        $post->image = '/posts/'.$input['imagename'];
        $post->title = $request->title;
        $post->author = $request->author;
        $post->body = $request->body;
        $post->resume = $request->resume;
        $post->youtube = $request->youtube;
        $post->candidate_id = $candidate->id;

        $post->save();
        // $post = $candidate->posts()->create($data);
   
        flash('Postagem criada com sucesso')->success();

        return redirect()->route('admin.posts.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($post)
    {
        $post = Post::find($post);
        $candidates = Candidate::all(['name']);

        return view('admin.posts.edit', compact('post', 'candidates'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $post)
    {
        $data = $request->all();

        $post = Post::find($post);
        $post->update($data);

        flash('Postagem atualizada com sucesso')->success();

        return redirect()->route('admin.posts.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($post)
    {
        $post = Post::find($post);
        $destinationPath = storage_path('app/public');
        $file = $destinationPath.$post->image;

        File::delete($file);

        $post->delete();

        flash('Produto removido com sucesso')->success();
        return redirect()->route('admin.posts.index');
    }
}
