import { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { AddTask } from '@mui/icons-material';

export default function TaskInput({ handleChange }) {
    const [task, setTask] = useState('');
    const [isInputValid, setIsInputValid] = useState(true);

    const onInputChange = (event) => {
        setTask(event.target.value);
    };

    const onAddTask = () => {
        if (task === '') {
            setIsInputValid(false);
            return;
        }
        setIsInputValid(true);
        handleChange(task);
        setTask('');
    };

    return (
        <Box
            className="task-input"
            sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center' }}
        >
            <TextField
                required
                label="Task name"
                variant="outlined"
                value={task}
                onChange={onInputChange}
                error={!isInputValid}
                helperText={!isInputValid ? 'Task name cannot be empty' : ''}
                sx={{ minWidth: '300px' }}
            />
            <Button
                variant="contained"
                sx={{ height: '56px' }}
                startIcon={<AddTask />}
                onClick={onAddTask}
            >
                Add task
            </Button>
        </Box>
    );
}
