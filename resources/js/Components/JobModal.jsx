import { Button } from '@mui/material';
import React from 'react';

const JobModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal">
                {children}
               
            </div>
        </div>
    );
};

export default JobModal;
