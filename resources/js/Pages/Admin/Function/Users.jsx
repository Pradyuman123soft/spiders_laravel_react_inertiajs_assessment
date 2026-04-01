export default function Users({ users, openCreateTicket }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">All Users</h1>

            <div className="overflow-hidden rounded-lg border border-gray-200">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="p-3 font-semibold text-sm">ID</th>
                            <th className="p-3 font-semibold text-sm">Name</th>
                            <th className="p-3 font-semibold text-sm">Email</th>
                            <th className="p-3 font-semibold text-sm">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.length === 0 ? (<p className="text-gray-600">No users Available in Databse</p>) : (
                            users.filter(u =>
                                u.roles?.every(
                                    role => role.name !== "admin" && role.name !== "superadmin"
                                )
                            ).map((u, i) => (
                                <tr
                                    key={u.id}
                                    className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"
                                        } hover:bg-blue-50 transition`}
                                >
                                    <td className="p-3 text-gray-700">{u.id}</td>
                                    <td className="p-3 text-gray-700 capitalize">
                                        {u.username}
                                    </td>
                                    <td className="p-3 text-gray-700">{u.email}</td>
                                    <td className="p-3">
                                        <button
                                            onClick={() => openCreateTicket(u)}
                                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                        >
                                            Create Ticket
                                        </button>
                                    </td>
                                </tr>
                            )))}
                    </tbody>
                </table>
            </div>
        </div>

    );
}
