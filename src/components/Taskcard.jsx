import DeleteIcon from '@mui/icons-material/Delete';
import {
    Box,
    Card,
    CardContent,
    Checkbox,
    Chip,
    Divider,
    IconButton,
    Typography,
} from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleComplete } from '../redux/tasksSlice';

const TaskCard = ({ task }) => {
    const dispatch = useDispatch();

    const handleCompleteToggle = () => {
        dispatch(toggleComplete(task.id));
    };

    const handleDeleteTask = () => {
        dispatch(deleteTask(task.id));
    };

    return (
        <Card
            sx={{
                boxShadow: 2,
                marginBottom: 1.5,
                borderRadius: 1,
                width: '100%',
                minWidth: '280px',
                padding: 1.5,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
            }}
        >
            <CardContent sx={{ padding: 1 }}>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            fontWeight: 'bold',
                            fontSize: { xs: '0.875rem', sm: '1rem' },
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            flexGrow: 1,
                        }}
                    >
                        {task.title}
                    </Typography>
                    <Checkbox
                        checked={task.completed}
                        onChange={handleCompleteToggle}
                        color="primary"
                        size="small"
                    />
                </Box>


                <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{
                        marginBottom: 0.5,
                        fontSize: '0.75rem',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {task.note}
                </Typography>


                <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{
                        marginBottom: 0.5,
                        fontSize: '0.75rem',
                    }}
                >
                    Due: {new Date(task.date).toLocaleDateString()}
                </Typography>


                <Chip
                    label={task.priority}
                    color={
                        task.priority === 'High'
                            ? 'error'
                            : task.priority === 'Medium'
                                ? 'warning'
                                : 'success'
                    }
                    size="small"
                    sx={{
                        marginBottom: 1,
                        fontSize: '0.75rem',
                    }}
                />

                <Divider sx={{ marginBottom: 0.5 }} />


                <Typography
                    variant="body2"
                    sx={{
                        marginBottom: 0.5,
                        fontSize: '0.75rem',
                    }}
                >
                    <strong>Status: </strong>
                    {task.completed ? 'Completed' : 'Pending'}
                </Typography>


                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton
                        color="error"
                        onClick={handleDeleteTask}
                        size="small"
                    >
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </Box>


            </CardContent>
        </Card>
    );
};

export default TaskCard;
