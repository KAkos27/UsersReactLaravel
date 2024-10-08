<?php

namespace App\Http\Controllers;

use App\Models\TestUser;
use Illuminate\Http\Request;

class TestUserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return TestUser::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $record = new TestUser();
        $record->fill($request->all());
        $record->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return TestUser::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $record = TestUser::find($id);
        $record->fill($request->all());
        $record->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        TestUser::find($id)->delete();
    }
}
