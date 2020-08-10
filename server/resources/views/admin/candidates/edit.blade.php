@extends('layouts.app')

@section('content')
  <h1>Atualiar candidato</h1>

  <form action="{{ route('admin.candidates.update', ['candidate' => $candidate->id]) }}" method="post">
      @csrf
      @method("PUT")

      <div class="form-group">
          <label for="name">Nome</label>
          <input type="text" name="name" class="form-control @error('name') is-invalid @enderror" value="{{ $candidate->name }}">

          @error('name')
              <div class="invalid-feedback">{{ $message }}</div>
          @enderror
      </div>

      <div class="form-group">
          <label for="age">Idade</label>
          <input type="number" name="age" class="form-control @error('age') is-invalid @enderror" value="{{ $candidate->age }}">

          @error('age')
              <div class="invalid-feedback">{{ $message }}</div>
          @enderror
      </div>

      <div class="form-group">
            <label for="bio">Biografia</label>
            <textarea name="bio" rows="10" class="form-control @error('bio') is-invalid @enderror">{{ $candidate->bio }}</textarea>

            @error('bio')
                <div class="invalid-feedback">{{ $message }}</div>
            @enderror
        </div>

      <div class="form-group">
          <label for="candidate_number">Número do candidato</label>
          <input type="number" name="candidate_number" class="form-control" value="{{ $candidate->candidate_number }}">
      </div>

      <div class="form-group">
          <label for="facebook">Link do Facebook</label>
          <input type="text" name="facebook" class="form-control" value="{{ $candidate->facebook }}">
      </div>

      <div class="form-group">
          <label for="instagram">Link do Instagram</label>
          <input type="text" name="instagram" class="form-control" value="{{ $candidate->instagram }}">
      </div>

      <div class="form-group">
          <label for="youtube">Link do youtube</label>
          <input type="text" name="youtube" class="form-control" value="{{ $candidate->youtube }}">
      </div>

      <div class="form-group">
          <button type="submit" class="btn btn-lg btn-success">Atualizar candidato</button>
      </div>
  </form>
@endsection