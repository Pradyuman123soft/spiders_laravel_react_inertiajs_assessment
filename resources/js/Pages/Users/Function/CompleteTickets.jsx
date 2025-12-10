import { router } from "@inertiajs/react";
import { useState } from "react";


export default function CompleteTickets({ tickets }) {

    return (
        <div className="p-6">
            <h1 className="text-3xl font-semibold mb-6">Complete Tickets</h1>

            <div className="overflow-x-auto rounded-xl shadow-md border">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
                            <th className="p-3">Ticket ID</th>
                            <th className="p-3">Created By</th>
                            <th className="p-3">Title</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">File</th>
                        </tr>
                    </thead>

                    <tbody>
                        {tickets.filter(t => t.status === "completed").length === 0 ? (
                            <p className="text-gray-600">No Completed Tickets Yet</p>):(
                        tickets.filter(t => t.status === "completed").map((t, index) => (
                            <tr
                                key={t.ticket?.ticket_id}
                                className={`border-t hover:bg-gray-50 transition ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                    }`}
                            >
                                <td className="p-3 font-medium text-gray-800">
                                    {t.ticket_id}
                                </td>

                                <td className="p-3 text-gray-700">
                                    {t.ticket?.created_by || (
                                        <span className="text-gray-400">Not Assigned</span>
                                    )}
                                </td>

                                <td className="p-3 text-gray-700">{t.ticket.name.substring(0, 10)}...
                                </td>

                                <td className="p-3">
                                    <span
                                        className={`px-3 py-1 text-sm rounded-full font-semibold
                                            ${t.status === "completed"
                                                ? "bg-green-100 text-green-700"
                                                : t.status === "inprogress"
                                                    ? "bg-blue-100 text-blue-700"
                                                    : "bg-yellow-100 text-yellow-700"
                                            }
                                        `}
                                    >
                                        {t.status || "Pending"}
                                    </span>
                                </td>
                                <td className="p-2">
                                    {t.ticket?.file ? (
                                        <a
                                            href={`/storage/${t.ticket?.file}`}
                                            download
                                            target="_blank"
                                            className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                        >
                                            Download
                                        </a>
                                    ) : (
                                        <span className="text-gray-500">No File</span>
                                    )}
                                </td>
                            </tr>
                        )))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
