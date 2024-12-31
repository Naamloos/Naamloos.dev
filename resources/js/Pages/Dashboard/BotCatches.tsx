import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { BotCatch } from "@/types/BotCatch";
import { Head, router } from "@inertiajs/react";

export default function BotCatches({
    auth,
    botcatches,
}: PageProps<{ botcatches: BotCatch[] }>) {
    const handleToggle = (id: number) => {
        router.patch(route("bot-catches-list.toggle", id));
    };

    console.log(botcatches);

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h2 className="text-2xl font-semibold text-gray-800 leading-tight">
                                Bot Catches
                            </h2>
                            <h3 className="text-xl font-semibold text-gray-800 leading-tight mt-6">
                                Invalid Bot Catches
                            </h3>
                            {botcatches.filter(botcatch => botcatch.invalid).map((botcatch, index) => (
                                <div
                                    key={index}
                                    className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md border-2 border-red-500"
                                >
                                    <p>
                                        <strong>Id:</strong> {botcatch.id}
                                    </p>
                                    <p>
                                        <strong>Endpoint:</strong> {botcatch.endpoint}
                                    </p>
                                    <p>
                                        <strong>Method:</strong> {botcatch.method}
                                    </p>
                                    <p>
                                        <strong>Occurences:</strong> {botcatch.occurences}
                                    </p>
                                    <p>
                                        <strong>Invalid:</strong> Yes
                                    </p>
                                    <button
                                        onClick={() => handleToggle(botcatch.id)}
                                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
                                    >
                                        Toggle Invalid
                                    </button>
                                </div>
                            ))}

                            <h3 className="text-xl font-semibold text-gray-800 leading-tight mt-6">
                                Valid Bot Catches
                            </h3>
                            {botcatches.filter(botcatch => !botcatch.invalid).map((botcatch, index) => (
                                <div
                                    key={index}
                                    className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md"
                                >
                                    <p>
                                        <strong>Id:</strong> {botcatch.id}
                                    </p>
                                    <p>
                                        <strong>Endpoint:</strong> {botcatch.endpoint}
                                    </p>
                                    <p>
                                        <strong>Method:</strong> {botcatch.method}
                                    </p>
                                    <p>
                                        <strong>Occurences:</strong> {botcatch.occurences}
                                    </p>
                                    <p>
                                        <strong>Invalid:</strong> No
                                    </p>
                                    <button
                                        onClick={() => handleToggle(botcatch.id)}
                                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
                                    >
                                        Toggle Invalid
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
