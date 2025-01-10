import { useState } from 'react';
import {
    Box,
    Container,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from '@mui/material';
import TaskInput from './components/TaskInput/TaskInput';
import TaskItem from './components/TaskItem/TaskItem';
import DeleteTasks from './components/DeleteTasks/DeleteTasks';

import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

import uuid from './utils/uuid';

function App() {
    const [tasks, setTasks] = useState([]);

    const onInputChange = (task) => {
        let newTask = {
            id: uuid(),
            title: task,
            done: false,
        };
        setTasks([...tasks, newTask]);
    };

    const onTaskDone = (updatedTask) => {
        let updatedTasks = tasks
            .map((task) => {
                if (task.id === updatedTask.id) {
                    task.done = !task.done;
                }
                return task;
            })
            .sort((taskA, taskB) => {
                return Number(taskA.done) - Number(taskB.done);
            });
        setTasks(updatedTasks);
    };

    const onTaskDelete = (updatedTask) => {
        let updatedTasks = tasks.filter((task) => task.id !== updatedTask.id);
        setTasks(updatedTasks);
    };

    const onDeleteAllDone = () => {
        let updatedTasks = tasks.filter((task) => !task.done);
        setTasks(updatedTasks);
    };

    const showTasksList = () => {
        if (tasks.length === 0) {
            return (
                <TableRow>
                    <TableCell colSpan={2}>No tasks to show</TableCell>
                </TableRow>
            );
        }

        return tasks.map((task) => {
            return (
                <TaskItem
                    key={task.id}
                    task={task}
                    onTaskDone={onTaskDone}
                    onTaskDelete={onTaskDelete}
                />
            );
        });
    };

    return (
        <Box component="main" sx={{ padding: 2 }}>
            <Container maxWidth="sm">
                <TaskInput handleChange={onInputChange} />
                <TableContainer sx={{ marginTop: 2, marginBottom: 2 }}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <strong>Task</strong>
                                </TableCell>
                                <TableCell align="right">
                                    <strong>Actions</strong>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>{showTasksList()}</TableBody>
                    </Table>
                </TableContainer>
                <DeleteTasks onDeleteTasks={onDeleteAllDone} />
            </Container>
        </Box>
    );
}

export default App;
