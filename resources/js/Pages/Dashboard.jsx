import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { CheckCircle, Info, Star } from "lucide-react";

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                   Home page
                </h2>
            }
        >
            <Head title="Dashboard" />

            {/* <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div> */}
                  <div className="min-h-screen bg-gray-50">
            <Head title="Home - CRM Ticket System" />

            {/* Header Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 px-6 shadow-md">
                <h1 className="text-4xl font-bold text-white text-center">
                    CRM Ticket Management System
                </h1>
                <p className="text-indigo-100 text-center mt-2 text-lg">
                    A modern solution to manage, track, and resolve customer issues efficiently.
                </p>
            </div>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-6 py-12">
                
                {/* What is CRM Section */}
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                        <Info className="text-indigo-600" size={26} />
                        <h2 className="text-2xl font-semibold text-gray-800">
                            About the Application
                        </h2>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                        Our CRM Ticket Management System helps organizations streamline
                        their support operations by managing customer issues, service
                        requests, and queries in a structured and efficient manner.
                        It ensures transparency, real-time tracking, and smooth
                        communication between users and the support team.
                    </p>
                </div>

                {/* Features Section */}
                <div className="mt-10">
                    <div className="flex items-center gap-3 mb-5">
                        <Star className="text-purple-600" size={26} />
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Key Features
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            "Easy ticket creation with all required issue details.",
                            "Ticket assignment to support team members.",
                            "Real-time ticket status tracking and updates.",
                            "Role-based dashboards for Admin and Users.",
                            "Activity logs and ticket update notifications.",
                            "Secure & structured workflow with proper visibility.",
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-100 rounded-xl shadow-sm p-5 flex items-start gap-3 hover:shadow-md transition"
                            >
                                <CheckCircle className="text-green-500 mt-1" size={22} />
                                <p className="text-gray-700">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mission Section */}
                <div className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        Our Mission
                    </h2>

                    <p className="text-gray-700 leading-relaxed">
                        Our mission is to provide a seamless, secure, and efficient
                        support management platform that empowers organizations to
                        deliver better customer service.  
                        By simplifying ticket handling, reducing delays, and ensuring
                        clarity in communication, we aim to enhance productivity and
                        customer satisfaction.
                    </p>
                </div>
            </div>
        </div>
        </AuthenticatedLayout>
    );
}
