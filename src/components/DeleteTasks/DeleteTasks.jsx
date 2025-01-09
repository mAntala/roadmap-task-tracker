import { Button } from '@mui/material';

export default function DeleteTasks({ onDeleteTasks }) {
    return (
        <Button variant="contained" onClick={onDeleteTasks}>
            Delete finished tasks
        </Button>
    );
}
