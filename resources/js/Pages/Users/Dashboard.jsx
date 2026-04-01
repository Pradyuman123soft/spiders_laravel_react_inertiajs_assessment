import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import UserLayout from "@/Layouts/UserLayout";
import { useState } from "react";
import PendingTickets from "./Function/NewTickets";
import CompleteTickets from "./Function/CompleteTickets";
import WorkingTickets from "./Function/WorkingTickets";
import CreateTicket from "./Function/CreateTicket";

export default function UserDashboard({ tickets }) {
    const [page, setPage] = useState('PendingTickets');
    return (
        <AuthenticatedLayout>
            <UserLayout setPage={setPage} page={page} >
                {page === 'PendingTickets' && <PendingTickets tickets={tickets}/>}
                {page === 'WorkingTickets' && <WorkingTickets tickets={tickets}/>}
                {page === 'CreateTickets' && <CreateTicket setPage={setPage}/>}
                {page === 'CompleteTickets' && <CompleteTickets tickets={tickets}/>}
            </UserLayout>
        </AuthenticatedLayout>
    )
}