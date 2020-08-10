@extends('layouts.app')

@section('content')

  <a href="{{ route('admin.candidates.create') }}" class="btn btn-ls btn-success my-5">Adciona candidato</a>

  @if(sizeof($candidates) < 1)
    <div class="alert alert-warning" >Nenhum candidato cadastrado</div>
  @else
    <table class="table table-striped" >
      <thead>
        <tr>
          <th style="margin-right: 20px">#</th>
          <th>Nome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        @foreach($candidates as $candidate)
          <tr>
            <td style="margin-right: 20px" >{{ $candidate->id }}</td>
            <td style="width: 90%">{{ $candidate->name }}</td>
            <td>
              <div class="btn-group" >
                <a href="{{ route('admin.candidates.edit', ['candidate' => $candidate->id]) }}" class="btn btn-sm btn-primary" >Editar</a>
                <form action="{{ route('admin.candidates.destroy', ['candidate' => $candidate->id]) }}" method="post">
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