import React from "react";

export default function Home() {
    return (
        
<div className="min-h-screen flex flex-col items-center justify-center bg-[#f3f4f6] p-6">

    <div className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-xl text-center border border-gray-200">

        {/* Logo / App Name */}
        <h1 className="text-4xl font-extrabold text-gray-800 tracking-wide">
            CRM <span className="text-indigo-600">Ticket Module</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-gray-600 text-lg">
            A clean and modern way to manage user support tickets.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex items-center justify-center gap-6">

            <a
                href="/login"
                className="px-8 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 hover:shadow-lg duration-200"
            >
                Login
            </a>

            <a
                href="/register"
                className="px-8 py-3 rounded-xl bg-white text-indigo-600 border-2 border-indigo-600 font-semibold shadow-md hover:bg-indigo-50 hover:shadow-lg duration-200"
            >
                Register
            </a>

        </div>
    </div>
</div>

    );
}
