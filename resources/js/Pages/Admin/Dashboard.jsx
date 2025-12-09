import AdminLayout from "@/Layouts/AdminLayout";
import { React, useState } from "react";
import Users from "./Function/Users";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import CreateTicket from "./Function/CreateTicket";
import AssignedTickets from "./Function/assignedTicket";
import PendingTickets from "./Function/PendingTickets";
import CompletedTickets from "./Function/CompletedTickets";
import Edit from "../Profile/Edit";


export default function Dashboard({ users, tickets }) {
    const [page, setPage] = useState('users');
    const [selectedUser, setSelectedUser] = useState(null);

    const openCreateTicket = (user)=>{
        setSelectedUser(user);
        setPage('create-ticket');
    }

    return (
        <AuthenticatedLayout>
            <AdminLayout setPage={setPage} page={page}>
                {page === "users" && <Users users={users} openCreateTicket={openCreateTicket}/>}
                {page === "create-ticket" && <CreateTicket user={selectedUser} setPage={setPage}/>}
                {page === "AssignedTickets" && <AssignedTickets tickets={tickets}/>}
                {page === "PendingTickets" && <PendingTickets tickets={tickets}/>}
                {page === "CompleteTickets" && <CompletedTickets tickets={tickets}/>}
            </AdminLayout>
        </AuthenticatedLayout>
    )
}