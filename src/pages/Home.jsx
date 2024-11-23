import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Grid, CssBaseline } from '@mui/material';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import TaskList from '../components/Tasklist';

const HomePage = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    return (

        <>


            <Box
                width="80%"
                p={2}
                display="flex"

            >
                <TaskList />
            </Box>

        </>
    );
};

export default HomePage;
