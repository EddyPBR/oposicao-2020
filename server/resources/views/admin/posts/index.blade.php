@extends('layouts.app')

@section('content')

  <a href="{{ route('admin.posts.create') }}" class="btn btn-ls btn-success my-5">Adcionar postagem</a>

  @if(sizeof($posts) < 1)
    <div class="alert alert-warning" >Nenhuma postagem cadastrada</div>
  @else
    <table class="table table-striped" >
      <thead>
        <tr>
          <th style="margin-right: 20px">#</th>
          <th>Título</th>
          <th>Author</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        @foreach($posts as $post)
          <tr>
            <td style="margin-right: 20px" >{{ $post->id }}</td>
            <td >{{ $post->title }}</td>
            <td>{{ $post->author }}</td>
            <td>
              <div class="btn-group" >
                <a href="{{ route('admin.posts.edit', ['post' => $post->id]) }}" class="btn btn-sm btn-primary" >Editar</a>
                <form action="{{ route('admin.posts.destroy', ['post' => $post->id]) }}" method="post">
                    @csrf
                    @method("DELETE")
                    <button type="submit" class="btn btn-sm btn-danger ml-2" >Apagar</button>
                </form>
              </div>
            </td>
          </tr>
        @endforeach
      </tbody>
    </table>
  @endif
@endsection