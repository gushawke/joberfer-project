import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import SendConnectionButton from '@/Components/SendConnectionButton';
import { ToastContainer } from 'react-toastify';
import { IconButton, TextField } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import 'react-toastify/dist/ReactToastify.css';

export default function AllUsersPage({ auth, users }) {
    const [searchQuery, setSearchQuery] = useState('');

    // Filter users based on the search query
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">All Users</h2>
                    <TextField
                        label="Search Users"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ marginTop: '10px' }}
                    />
                </>
            }
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {filteredUsers.map(user => (
                            <div key={user.id} className='flex justify-between items-center w-3/5'>
                                <div className='flex flex-col items-start my-5 ml-20'>
                                    <div className=''>
                                        <IconButton>
                                            <AccountCircleIcon fontSize="large" />
                                        </IconButton>
                                        <strong>{user.name}</strong>
                                    </div>
                                </div>
                                <SendConnectionButton userId={user.id} initiallyConnected={user.isConnected} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <ToastContainer />
        </AuthenticatedLayout>
    );
}
