import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, TextField } from '@mui/material';
import { Link } from '@inertiajs/react';

const JobBoard = ({ job, onToggleModal, isModalOpen, isAuthenticated }) => {
    // State to control the visibility of the TextField
    const [showTextField, setShowTextField] = useState(false);

    // Function to toggle the TextField
    const handleReferClick = () => {
        setShowTextField(!showTextField);
    };

    return (
        <Card style={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {job.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {job.description}
                </Typography>
                {/* Display tags */}
                <div style={{ marginTop: '10px' }}>
                    {job.tags && job.tags.map((tag, index) => (
                        <span key={index} className='bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                            {tag.name}
                        </span>
                    ))}
                </div>
                {isAuthenticated ? (
                    <div className='w-full flex '>
                        <Button onClick={onToggleModal} style={{ marginTop: '10px', background: 'green', color: 'white', textTransform: 'none' }}>
                            Refer 
                        </Button>
                        <Button style={{ marginTop: '10px', background: 'gray', color: 'white', marginLeft: '10px', textTransform: 'none' }}>View</Button>
                        <Button style={{ marginTop: '10px', background: 'black', color: 'white', marginLeft: '10px', textTransform: 'none' }}>Apply</Button>
                    </div>
                ) : (
                    <div style={{ marginTop: '10px' }}>
                        <Button 
                            onClick={handleReferClick} 
                            style={{ marginTop: '10px', background: 'green', color: 'white', textTransform: 'none' }}
                        >
                            Refer
                        </Button>
                        <Button style={{ marginTop: '10px', background: 'gray', color: 'white', marginLeft: '10px', textTransform: 'none' }}>View</Button>
                        <Button href='/register' style={{ marginTop: '10px', background: 'black', color: 'white', marginLeft: '10px', textTransform: 'none' }}>Apply</Button>

                        {showTextField && (
                            <div>
                            <TextField
                                fullWidth
                                label="Enter Referrals Email"
                                variant="outlined"
                                size="small"
                                style={{ marginTop: '10px' }}
                            />
                            <TextField
                            fullWidth
                            label="Enter Your Email"
                            variant="outlined"
                            size="small"
                            style={{ marginTop: '10px' }}
                            />
                            <div className='flex items-end justify-between'>
                                <Link href={'/register'}>
                                  <Typography fontSize={'12px'}>Register</Typography>

                                </Link>
                                <Button style={{ marginTop: '10px', background: 'black', color: 'white', marginLeft: '10px', textTransform: 'none' }}>Send</Button>
                               
                            </div>
                        </div>
                        )}
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default JobBoard;
