import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import ConnectionList from '../Components/ConnectionList';
import { Typography } from '@mui/material';
import { Margin } from '@mui/icons-material';

export default function ConnectionsPage({ auth, connections}) {
    return (
        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Connections</h2>}
        >
            {/* <Head title="Connections" /> */}
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <Typography style={{ marginBottom: '5px'}} variant='h5'>My Connections</Typography>
                            <ConnectionList connections={connections} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
