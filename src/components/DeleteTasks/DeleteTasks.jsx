import './DeleteTasks.scss';

export default function DeleteTasks({ onDeleteTasks }) {
    return (
        <button role="button" onClick={onDeleteTasks}>
            Delete finished tasks
        </button>
    );
}
