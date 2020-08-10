@extends('layouts.app')

@section('content')
    <h1>Atualizar postagem</h1>

    <form action="{{ route('admin.posts.update', ['post' => $post->id]) }}" method="post" enctype="multipart/form-data">
        @csrf
        @method("PUT")

        <div class="form-group">
            <label for="title">Título</label>
            <input type="text" name="title" class="form-control @error('title') is-invalid @enderror" value="{{ $post->title }}">

            @error('title')
                <div class="invalid-feedback">{{ $message }}</div>
            @enderror
        </div>

        <div class="form-group">
            <label for="author">Autor</label>
            <select value="{{ $post->author }}" selected name="author" class="form-control">
                @foreach($candidates as $candidate)
                    <option value="{{ $candidate->name }}">{{ $candidate->name }}</option>
                @endforeach
            </select>
        </div>

        <div class="form-group">
            <label for="resume">Resumo</label>
            <input type="text" name="resume" class="form-control @error('resume') is-invalid @enderror" value="{{ $post->resume }}">

            @error('resume')
                <div class="invalid-feedback">{{ $message }}</div>
            @enderror
        </div>

        <div class="form-group">
            <label for="body">Conteudo</label>
            <textarea name="body" rows="10" class="form-control @error('body') is-invalid @enderror">{{ $post->body }}</textarea>

            @error('body')
                <div class="invalid-feedback">{{ $message }}</div>
            @enderror
        </div>

        <div class="form-group">
            <label for="youtube">Link do youtube</label>
            <input type="text" name="youtube" class="form-control" value="{{ $post->youtube }}">
        </div>

        <div class="form-group">
            <button type="submit" class="btn btn-lg btn-success">Atualizar postagem</button>
        </div>
    </form>
@endsection