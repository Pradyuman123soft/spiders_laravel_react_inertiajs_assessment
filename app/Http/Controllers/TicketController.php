<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

use App\Models\Ticket;
use App\Models\TicketActivity;
use App\Models\TicketAssignment;
use App\Models\User;
use Illuminate\Http\Request;

use function Symfony\Component\Clock\now;

class TicketController extends Controller
{

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'file' => 'nullable|file|max:2048' //2MB
        ]);

        $filePath = null;
        if ($request->has('file')) {
            $filePath = $request->file('file')->store('tickets', 'public');
        }

        $ticket = Ticket::create([
            'name' => $request->name,
            'description' => $request->description,
            'file' => $filePath,
            'created_by' => auth::user()->email,
        ]);

        TicketActivity::create([
            'ticket_id' => $ticket->ticket_id,
            'action' => 'created',
            'description' => 'Ticket created',
            'performed_by' => auth::user()->email,
        ]);


        $user = User::find($request->user_id);

        TicketAssignment::create([
            'ticket_id' => $ticket->ticket_id,
            'assigned_to' => $user->email,
            'status' => 'pending',
        ]);
        TicketActivity::create([
            'ticket_id' => $ticket->ticket_id,
            'action' => 'assigned',
            'description' => 'Assigned to ' . $user->email,
            'performed_by' => auth::user()->email,
        ]);


        return back()->with('success', 'ticket creted successfully');
    }

    public function updateTicket(Request $request, $id)
    {
        $request->validate([
            'title' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'status' => 'nullable|string',
            'file' => 'nullable|mimes:jpg,png,pdf,docx|max:2048',
        ]);
        $ticket = Ticket::where('ticket_id', $id)->first();
        if (!$ticket) {
            return back()->withErrors(['Ticket Not Found']);
        }
        $filePath = null;
        if ($request->hasFile('file')) {
            $filePath = $request->file('file')->store('tickets', 'public');
            $ticket->file = $filePath;
            TicketActivity::create([
                'ticket_id' => $ticket->ticket_id,
                'action' => 'file_updated',
                'description' => 'File updated',
                'performed_by' => auth::user()->email,
            ]);
        }
        // Title update
        if ($request->filled('title') && $request->title !== $ticket->name) {

            TicketActivity::create([
                'ticket_id' => $ticket->ticket_id,
                'action' => 'title_updated',
                'description' => "Title updated from '{$ticket->name}' to '{$request->title}'",
                'performed_by' => auth::user()->email,
            ]);

            $ticket->name = $request->title;
        }

        // Description update
        if ($request->filled('description') && $request->description !== $ticket->description) {

            TicketActivity::create([
                'ticket_id' => $ticket->ticket_id,
                'action' => 'description_updated',
                'description' => "Description updated",
                'performed_by' => auth::user()->email,
            ]);

            $ticket->description = $request->description;
        }

        $ticket->save();

        // update assignment part also
        $assignment = TicketAssignment::where('ticket_id', $id)->first();
        if ($assignment) {
            if ($request->status) {
                TicketActivity::create([
                    'ticket_id' => $ticket->ticket_id,
                    'action' => 'status_changed',
                    'description' => "Status changed from {$assignment->status} to {$request->status}",
                    'performed_by' => auth::user()->email,
                ]);
                $assignment->status = $request->status;
            }
            $assignment->updated_at = now();
            $assignment->save();
        }
        return back()->with('success', 'Ticket Updated Successfully');
    }
};
