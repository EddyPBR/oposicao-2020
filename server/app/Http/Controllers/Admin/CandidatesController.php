<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Candidate;
use App\Http\Requests\CandidateRequest;

class CandidatesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $candidates = Candidate::all(['id', 'name']);

        return view('admin.candidates.index', compact('candidates'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.candidates.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CandidateRequest $request)
    {
        $data = $request->all();

        $candidate = Candidate::create($data);

        flash('Candidato adcionado com sucesso')->success();

        return redirect()->route('admin.candidates.index');
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
    public function edit($candidate)
    {
        $candidate = Candidate::find($candidate);

        return view('admin.candidates.edit', compact('candidate'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CandidateRequest $request, $candidate_id)
    {
        $data = $request->all();
        $candidate = Candidate::find($candidate_id);

        $candidate->update($data);

        flash('Candidato atualizado com sucesso')->success();

        return redirect()->route('admin.candidates.index');
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($candidate)
    {
        $candidate = Candidate::find($candidate);
        $candidate->delete();

        flash('Candidato removido com sucesso')->success();

        return redirect()->route('admin.candidates.index');
    }
}
