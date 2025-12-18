import { router } from "@inertiajs/react";

export default function Users({ users }) {

    const makeAdmin = (user) => {
        router.post(
            route("superadmin.makeAdmin", user.id),
            {},
            {
                onSuccess: () => {
                    alert("User is now Admin");
                },
            }
        );
    };

    const DeleteUser = (user) =>{
        router.delete(
            route('superadmin.deleteUser',user.id),
            { preserveScroll: true}
        )
    }

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
                            <th className="p-3 font-semibold text-sm">Roles</th>
                            <th className="p-3 font-semibold text-sm">Make Admin</th>
                            <th className="p-3 font-semibold text-sm">Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.length === 0 ? (<td
                            colSpan="5"
                            className="p-4 text-center text-gray-500"
                        >
                            No users available in database
                        </td>) : (
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
                                    <td className="p-3 text-gray-700">
                                        {u?.roles?.map(role => role.name).join(", ") || "No Role"}
                                    </td>
                                    <td className="p-3">
                                        <button
                                            onClick={() => makeAdmin(u)}
                                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                        >
                                            Make Admin
                                        </button>
                                    </td>
                                    <td className="p-3">
                                        <button
                                            onClick={() => DeleteUser(u)}
                                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                        >
                                            Delete User
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
