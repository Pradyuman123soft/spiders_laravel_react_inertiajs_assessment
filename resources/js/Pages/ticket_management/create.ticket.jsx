import { useForm } from '@inertiajs/react';

export default function CreateTicket() {
    const { data, setData, post } = useForm({
        name: "",
        description: "",
        file: null,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("tickets.store"));
    };

    return (
        <form onSubmit={submit} className="space-y-4">
            <input 
                type="text" 
                placeholder="Ticket Name" 
                className="border p-2 w-full"
                onChange={(e) => setData("name", e.target.value)}
            />

            <textarea
                placeholder="Description"
                className="border p-2 w-full"
                onChange={(e) => setData("description", e.target.value)}
            ></textarea>

            <input 
                type="file" 
                className="border p-2 w-full"
                onChange={(e) => setData("file", e.target.files[0])}
            />

            <button className="px-4 py-2 bg-blue-600 text-white">
                Submit Ticket
            </button>
        </form>
    );
}
