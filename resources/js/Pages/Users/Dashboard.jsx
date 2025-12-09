import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import UserLayout from "@/Layouts/UserLayout";
import { useState } from "react";
import UserTickets from "./Function/UserTickets";
import PendingTickets from "./Function/NewTickets";
import CompleteTickets from "./Function/CompleteTickets";

export default function UserDashboard({ tickets }) {
    const [page, setPage] = useState('PendingTickets');
    return (
        <AuthenticatedLayout>
            <UserLayout setPage={setPage} page={page} >
                {page === 'PendingTickets' && <PendingTickets tickets={tickets}/>}
                {page === 'AssignedTickets' && <UserTickets tickets={tickets}/>}
                {page === 'CompleteTickets' && <CompleteTickets tickets={tickets}/>}
            </UserLayout>
        </AuthenticatedLayout>
    )
}