import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import UserLayout from "@/Layouts/UserLayout";
import { useState } from "react";
import UserTickets from "./Function/UserTickets";

export default function UserDashboard({ tickets }) {
    const [page, setPage] = useState('AssignedTickets');
    return (
        <AuthenticatedLayout>
            <UserLayout setPage={setPage} page={page} >
                {page === 'AssignedTickets' && <UserTickets tickets={tickets}/>}
            </UserLayout>
        </AuthenticatedLayout>
    )
}