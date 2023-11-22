import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SendConnectionButton = ({ userId, initiallyConnected }) => {
    const [isConnected, setIsConnected] = useState(initiallyConnected);

    const handleSendRequest = async () => {
        try {
            // Make the API request to send the connection request
            await Inertia.post(`/profile/send-connection/${userId}`);
            // Update the button state to "Following"
            setIsConnected(true);
            toast.success('Successfully connected!');
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'An error occurred';
            toast.error(errorMessage);
        }
    };

    return (
        <div>
            <button 
                className={`p-3 rounded-3xl text-white ${isConnected ? 'bg-gray-400' : 'bg-blue-500'}`} 
                onClick={handleSendRequest} 
                disabled={isConnected}>
                {isConnected ? 'Following' : 'Connect'}
            </button>
        </div>
    );
};

export default SendConnectionButton;
