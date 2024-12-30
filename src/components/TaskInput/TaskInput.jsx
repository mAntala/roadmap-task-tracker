import { useState } from 'react';
import './TaskInput.scss';

export default function TaskInput({ handleChange }) {
    const [task, setTask] = useState('');

    const onInputChange = (event) => {
        setTask(event.target.value);
    };

    const onAddTask = () => {
        if (task === '') {
            return;
        }
        handleChange(task);
        setTask('');
    };

    return (
        <div className="task-input">
            <input role="textbox" type="text" value={task} onChange={onInputChange} />
            <button role="button" type="button" onClick={onAddTask}>
                Add Task
            </button>
        </div>
    );
}
