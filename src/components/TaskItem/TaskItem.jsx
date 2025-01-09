import { Checkbox, TableRow, TableCell, Button } from '@mui/material';

export default function TaskItem({ task, onTaskDone, onTaskDelete }) {
    const markTaskAsDone = (event) => {
        onTaskDone(task, event.target.checked);
    };

    const removeTask = () => {
        onTaskDelete(task);
    };

    const checkboxLabel = { inputProps: { 'aria-label': 'Mark as done' } };

    return (
        <TableRow>
            <TableCell component="th" scope="row">
                {task.title}
            </TableCell>
            <TableCell align="right">
                <Checkbox {...checkboxLabel} onChange={markTaskAsDone} checked={task.done} />
                <Button variant="outlined" onClick={removeTask}>
                    Remove
                </Button>
            </TableCell>
        </TableRow>
    );
}

/**
 * <TaskItem
                    key={index}
                    task={task}
                    onTaskDone={onTaskDone}
                    onTaskDelete={onTaskDelete}
                />
 */
