import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Dashboard({ auth, messages }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h2 className="text-2xl font-semibold text-gray-800 leading-tight">Messages</h2>
                            {/*@ts-ignore*/}
                            {messages.map((message, index) => (
                                <div key={index} className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
                                    <p><strong>Name:</strong> {message.name}</p>
                                    <p><strong>Email:</strong> {message.email}</p>
                                    <p><strong>Phone:</strong> {message.phone}</p>
                                    <p><strong>IP:</strong> {message.ip}</p>
                                    <p><strong>User Agent:</strong> {message.user_agent}</p>
                                    <p><strong>Message:</strong></p>
                                    <p>
                                        {/*@ts-ignore*/}
                                        {message.message.split('\n').map((line, index) => (
                                            <span key={index}>
                                                {line}
                                                <br />
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
