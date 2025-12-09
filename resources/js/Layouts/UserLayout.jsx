export default function AdminLayout({ children, setPage, page }) {
    return (
        <div className="h-screen flex bg-gray-50">

            {/* Sidebar */}
            <div className="w-72 bg-gradient-to-b from-indigo-700 to-purple-800 text-white shadow-xl flex flex-col">

                {/* Header */}
                <div className="p-6 border-b border-white/20">
                    <h2 className="text-2xl font-bold tracking-wide">
                        User Panel
                    </h2>
                    <p className="text-indigo-200 text-sm mt-1">
                        Manage system controls
                    </p>
                </div>

                {/* Menu */}
                <ul className="flex-1 p-4 space-y-3">
                    {/* TICKETS */}
                    <li>
                        <button
                            onClick={() => setPage("PendingTickets")}
                            className={`w-full px-4 py-3 rounded-lg text-left font-medium transition-all duration-200 shadow-sm
                                ${page === "PendingTickets"
                                    ? "bg-white text-indigo-700 shadow-md"
                                    : "text-indigo-200 hover:bg-indigo-600 hover:text-white"}`}
                        >
                            🎫 Pending Tickets
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setPage("AssignedTickets")}
                            className={`w-full px-4 py-3 rounded-lg text-left font-medium transition-all duration-200 shadow-sm
                                ${page === "AssignedTickets"
                                    ? "bg-white text-indigo-700 shadow-md"
                                    : "text-indigo-200 hover:bg-indigo-600 hover:text-white"}`}
                        >
                            🎫 Assigned Tickets
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setPage("CompleteTickets")}
                            className={`w-full px-4 py-3 rounded-lg text-left font-medium transition-all duration-200 shadow-sm
                                ${page === "CompleteTickets"
                                    ? "bg-white text-indigo-700 shadow-md"
                                    : "text-indigo-200 hover:bg-indigo-600 hover:text-white"}`}
                        >
                            🎫 Complete Tickets
                        </button>
                    </li>
                </ul>

                {/* Footer */}
                <div className="p-4 border-t border-white/20 text-indigo-200 text-sm">
                    © 2025 CRM Ticket System
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8 overflow-auto">
                {children}
            </div>

        </div>
    );
}
