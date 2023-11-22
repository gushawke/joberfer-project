import JobBoard from '@/Components/JobBoard';
import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import JobModal from '../Components/JobModal';
import { Card, Typography, IconButton, Button, Checkbox } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Dashboard({ auth, jobs }) {
    const [openModalJobId, setOpenModalJobId] = useState(null);
    const isAuthenticated = !!auth.user;
    const [selectedConnections, setSelectedConnections] = useState([]);

    const handleCheckboxChange = (connectionId) => {
        if (selectedConnections.includes(connectionId)) {
            // If connection is already selected, unselect it
            setSelectedConnections(selectedConnections.filter(id => id !== connectionId));
        } else {
            // If connection is not selected, select it
            setSelectedConnections([...selectedConnections, connectionId]);
        }
    };

    const onToggleModal = (jobId) => {
        setOpenModalJobId(jobId);
    };

    const handleCloseModal = () => {
        setOpenModalJobId(null);
    };

    const DashboardContent = () => (
        <>
            <Head title="Dashboard" />

            <div className="py-12 ">
                <div className=" mx-auto sm:px-6 lg:px-8 w-screen">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg ">
                        <div className="p-6 text-gray-900 flex flex-col items-center">
                            <Typography style={{ marginBottom: '50px' }} variant='h4'>Job Listings</Typography>
                            {jobs.map((job, index) => (
                                <div key={job.id + index} className='flex flex-row items-start mb-5'>
                                    <JobBoard
                                        job={job}
                                        onToggleModal={() => onToggleModal(job.id)}
                                        isModalOpen={openModalJobId === job.id}
                                        isAuthenticated={isAuthenticated}  // Pass isAuthenticated to JobBoard
                                    />
                                    {openModalJobId === job.id && (
                                        <JobModal isOpen={true} onClose={handleCloseModal}>
                                            <Card className='p-5 ml-2 mb-5 relative' style={{ maxWidth: 345 }}>
                                                <IconButton
                                                    onClick={handleCloseModal}
                                                    style={{ position: 'absolute', top: 0, right: 0, padding: '5px' }}
                                                >
                                                    <CloseIcon />
                                                </IconButton>
                                                <Button onClick={onToggleModal} style={{ marginTop: '10px', background: 'green', color: 'white', textTransform: 'none' }}>Copy Referral Code</Button>
                                                <Typography fontWeight={'bold'} margin={'5px'} className='mb-2'>Connections Suitable for this Job</Typography>
                                                {job.matchedConnections.map((connection, index) => (
                                                    <div className='ml-3 flex flex-row mt-3 cursor-pointer items-center' key={connection.id + index}>
                                                        <Checkbox
                                                            checked={selectedConnections.includes(connection.id)}
                                                            onChange={() => handleCheckboxChange(connection.id)}
                                                        />
                                                        <Typography key={connection.id}>{connection.name}</Typography>
                                                    </div>
                                                ))}
                                                <Button  onClick={() => {handleCloseModal();}} style={{ marginTop: '10px', background: 'black', color: 'white', marginLeft: '10px', textTransform: 'none' }}>Refer Selected</Button>
                                            </Card>
                                        </JobModal>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    return auth.user ? (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <DashboardContent />
        </AuthenticatedLayout>
    ) : (
        // Render without AuthenticatedLayout or with a different layout for unauthenticated users
        <div className='flex flex-col justify-center mt-20'>
            <Typography className='flex justify-center ' variant='h2'>Joberfer</Typography>
            <DashboardContent />
        </div>
    );
}
