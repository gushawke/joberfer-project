import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';

const ConnectionList = ({ connections }) => {

    console.log(connections);
    return (
        <div>
            <ul>
                {connections.map((connection, index) => (
                    <li className='flex flex-row items-center' key={connection.id + index} style={{ marginBottom: '10px' }}>
                        <IconButton>
                            <AccountCircleIcon />
                        </IconButton>
                        {connection.name}
                        {/* Display tags for each connection */}
                        <div style={{ marginLeft: '5px' }}>
                            {connection.tags && connection.tags.map(tag => (
                                <span key={tag.id} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                                    {tag.name}
                                </span>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ConnectionList;
