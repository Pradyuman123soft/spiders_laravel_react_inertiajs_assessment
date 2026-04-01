export default function ActivityLogModal({ ticket, onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6">

                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">
                        Activity Log — {ticket?.name}
                    </h2>

                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-xl"
                    >
                        ✕
                    </button>
                </div>

                <div className="max-h-80 overflow-y-auto space-y-3">
                    {ticket?.activities?.length === 0 ? (
                        <p className="text-gray-500 text-sm">
                            No activity logs available.
                        </p>
                    ) : (
                        ticket?.activities?.map((log, i) => (
                            <div
                                key={i}
                                className="border-l-4 border-blue-500 pl-4"
                            >
                                <p className="text-sm font-medium capitalize">
                                    {log.action.replace('_', ' ')}
                                </p>
                                <p className="text-sm text-gray-600">
                                    {log.description}
                                </p>
                                <p className="text-xs text-gray-400">
                                    {log.performed_by} •{" "}
                                    {new Date(log.created_at).toLocaleString()}
                                </p>
                            </div>
                        ))
                    )}
                </div>

                <div className="mt-6 text-right">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
