import { router } from "@inertiajs/react";
import { useState } from "react";


export default function UserTickets({ tickets }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [formData, setFormData] = useState({
        'title': '',
        'description': '',
        'status': '',
        'file': '',
    })

    const openModal = (ticket) => {
        setSelectedTicket(ticket);
        setFormData({
            'title': ticket.ticket?.name,
            'description': ticket.ticket?.description,
            'status': ticket.status,
            'file': ticket.ticket?.file,
        })
        setShowModal(true);
    }
    const handleUpdate = (e) => {
        const formDataObj = new FormData();

        formDataObj.append("title", formData.title);
        formDataObj.append("description", formData.description);
        formDataObj.append("status", formData.status);

        if (formData.file instanceof File) {
            formDataObj.append("file", formData.file);
        }
        router.post(`/user/ticket/update/${selectedTicket.ticket_id}`, formDataObj, {
            forceFormData: true,
            onSuccess: () => {
                setShowModal(false);
            },
            onError: (err) => {
                console.log('Error', err)
            }
        })
        setShowModal(false);
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-semibold mb-6">Assigned Tickets</h1>

            <div className="overflow-x-auto rounded-xl shadow-md border">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
                            <th className="p-3">Ticket ID</th>
                            <th className="p-3">Created By</th>
                            <th className="p-3">Title</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">File</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {tickets && tickets.length > 0 ? (tickets.map((t, index) => (
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

                                <td className="p-3">
                                    <button
                                        className="px-4 py-1 bg-blue-600 text-white text-sm rounded-lg shadow hover:bg-blue-700 transition"
                                        onClick={() => openModal(t)}
                                    >
                                        Update
                                    </button>
                                </td>
                            </tr>
                        ))) :
                            <tr><td>No Tickets assigned You</td></tr>
                        }
                    </tbody>
                </table>
            </div>

            {/* ------------Update MODAL ------------- */}

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">
                            Update Ticket #{selectedTicket.ticket_id}
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block font-medium mb-1">Title</label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    disabled
                                    className="w-full border rounded-lg p-2"
                                />
                            </div>
                            <div>
                                <label className="block font-medium mb-1">description</label>
                                <input
                                    type="text"
                                    value={formData.description}
                                    disabled
                                    className="w-full border rounded-lg p-2"
                                />
                            </div>
                            <div>
                                <label className="block font-medium mb-1">Status</label>
                                <select
                                    value={formData.status}
                                    onChange={(e) =>
                                        setFormData({ ...formData, status: e.target.value })
                                    }
                                    className="w-full border rounded-lg p-2"
                                >
                                    <option value="pending">Pending</option>
                                    <option value="inprogress">In Progress</option>
                                    <option value="onhold">onhold</option>
                                </select>

                            </div>
                        </div>

                        <div className="flex justify-end mt-6 gap-3">
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleUpdate}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
