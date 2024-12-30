import './TaskItem.scss';

export default function TaskItem({ task, onTaskDone, onTaskDelete }) {
    const markTaskAsDone = (event) => {
        onTaskDone(task, event.target.checked);
    };

    const removeTask = () => {
        onTaskDelete(task);
    };

    return (
        <div className="task-item">
            <input type="checkbox" checked={task.done} onChange={markTaskAsDone} />
            <p className={`task-item__title ${task.done ? 'task-item__title--done' : ''}`}>
                {task.title}
            </p>
            <button onClick={removeTask}>Remove</button>
        </div>
    );
}
