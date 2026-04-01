import { useForm } from "@inertiajs/react"
import { usePage } from "@inertiajs/react";

export default function CreateTicket({setPage}){
    const { auth } = usePage().props;
    const user = auth.user;

    const { data, setData, post, processing } = useForm({
        user_id: user.id,
        name:"",
        description:"",
        file:""
    })

const submit = (e) => {
    e.preventDefault();
    post('/tickets/create', {
        onSuccess: () => setPage("PendingTickets")
    },
    { forceFormData: true },
);
};

    
    return(
        <div className="bg-white p-6 rounded-xl shadow-md">
            <h1 className="text-2xl font-bold mb-4">
                Create Ticket for {user.username}
            </h1>

            <form onSubmit={submit} className="space-y-4">

                <div>
                    <label className="block mb-1 font-semibold">Title</label>
                    <input
                        type="text"
                        className="w-full p-2 border rounded"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-semibold">Description</label>
                    <textarea
                        className="w-full p-2 border rounded"
                        rows="4"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-semibold">Choose file</label>
                    <input
                        type="file"
                        className="w-full p-2 border rounded"
                        onChange={(e) => setData("file", e.target.files[0])}
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                    Submit Ticket
                </button>
            </form>
        </div>
    );
}