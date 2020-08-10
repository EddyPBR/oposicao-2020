@extends('layouts.app')

@section('content')
    <h1>Adcionar postagem</h1>

    <form action="{{ route('admin.posts.store') }}" method="post" enctype="multipart/form-data">
        @csrf

        <div class="form-group">
            <label for="title">Título</label>
            <input type="text" name="title" class="form-control @error('title') is-invalid @enderror" value="{{ old('title') }}">

            @error('title')
                <div class="invalid-feedback">{{ $message }}</div>
            @enderror
        </div>

        <div class="form-group">
            <label for="author">Autor</label>
            <selectname="author" class="form-control">
                @foreach($candidates as $candidate)
                    <option value="{{ $candidate->name }}">{{ $candidate->name }}</option>
                @endforeach
            </select>
        </div>

        <div class="form-group">
            <label for="resume">Resumo</label>
            <input type="text" name="resume" class="form-control @error('resume') is-invalid @enderror" value="{{ old('resume') }}">

            @error('resume')
                <div class="invalid-feedback">{{ $message }}</div>
            @enderror
        </div>

        <div class="form-group">
            <label for="body">Conteudo</label>
            <textarea name="body" rows="10" class="form-control @error('body') is-invalid @enderror">{{ old('body') }}</textarea>

            @error('body')
                <div class="invalid-feedback">{{ $message }}</div>
            @enderror
        </div>


        <div class="form-group">
            <label for="image">Imagem</label>
            <input type="file" name="image" class="form-control @error('image') is-invalid @enderror">

            @error('image')
                <div class="invalid-feedback">{{ $message }}</div>
            @enderror
        </div>

        <div class="form-group">
            <label for="youtube">Link do youtube</label>
            <input type="text" name="youtube" class="form-control" value="{{ old('youtube') }}">
        </div>

        <div class="form-group">
            <button type="submit" class="btn btn-lg btn-success">Adcionar postage</button>
        </div>
    </form>
@endsection