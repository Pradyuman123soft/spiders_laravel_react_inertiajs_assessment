import SuperAdminLayout from "@/Layouts/SuperAdminLayout";
import { React, useState } from "react";
import Users from "./Function/Users";
import Admins from "./Function/Admins";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Dashboard({ users, roles }) {
    const [page, setPage] = useState('users');

    return (
        <AuthenticatedLayout>
            <SuperAdminLayout setPage={setPage} page={page}>
                {page === "users" && <Users users={users}/>}
                {page === "Admins" && <Admins users={users}/>}
            </SuperAdminLayout>
        </AuthenticatedLayout>
    )
}