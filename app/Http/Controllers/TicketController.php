<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use App\Models\Ticket;
use Illuminate\Http\Request;

class TicketController extends Controller
{

    public function store(Request $request){
        $request->validate([
            'name'=>'required|string|max:255',
            'description'=>'nullable|string',
            'file'=>'nullable|file|max:2048' //2MB
        ]);

        $filePath = null;
        if($request->has('file')){
            $filePath = $request->file('file')->store('tickets','public');
        }

        Ticket::create([
            'name'=>$request->name,
            'description'=>$request->description,
            'file'=>$filePath,
            'created_by'=>auth::user()->email,
        ]);
        return back()->with('success','ticket creted successfully');
    }

    public function download($id){
        $ticket = Ticket::findOrFail($id);
        if(!$ticket){
            abort(404);
        }
        return response()->download(storage_path("app/public".$ticket->file));
    }
};
