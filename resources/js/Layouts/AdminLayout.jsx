export default function AdminLayout({ children, setPage, page }) {
    return (
        <div className="flex h-screen">

            {/* Sidebar */}
            <div className="w-64 bg-gray-900 text-white p-5">
                <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

                <ul className="space-y-2">

                    {/* USERS */}
                    <li>
                        <button
                            onClick={() => setPage("users")}
                            className={`w-full text-left px-3 py-2 rounded-lg transition
                                ${page === "users"
                                    ? "bg-gray-700 text-white"
                                    : "text-gray-300 hover:bg-gray-800 hover:text-white"}
                            `}
                        >
                            Users
                        </button>
                    </li>

                    {/* TICKETS */}
                    <li>
                        <button
                            onClick={() => setPage("AssignedTickets")}
                            className={`w-full text-left px-3 py-2 rounded-lg transition
                                ${page === "AssignedTickets"
                                    ? "bg-gray-700 text-white"
                                    : "text-gray-300 hover:bg-gray-800 hover:text-white"}
                            `}
                        >
                            Assigned Tickets
                        </button>
                    </li>

                    {/* SETTINGS */}
                    <li>
                        <button
                            onClick={() => setPage("settings")}
                            className={`w-full text-left px-3 py-2 rounded-lg transition
                                ${page === "settings"
                                    ? "bg-gray-700 text-white"
                                    : "text-gray-300 hover:bg-gray-800 hover:text-white"}
                            `}
                        >
                            Settings
                        </button>
                    </li>

                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 overflow-auto">
                {children}
            </div>
        </div>
    );
}
