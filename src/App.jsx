import { useState } from 'react';
import TaskInput from './components/TaskInput/TaskInput';
import TaskItem from './components/TaskItem/TaskItem';
import DeleteTasks from './components/DeleteTasks/DeleteTasks';

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
            return <p>No tasks to display</p>;
        }

        return tasks.map((task, index) => {
            return (
                <TaskItem
                    key={index}
                    task={task}
                    onTaskDone={onTaskDone}
                    onTaskDelete={onTaskDelete}
                />
            );
        });
    };

    return (
        <>
            <TaskInput handleChange={onInputChange} />
            <div className="task-list">{showTasksList()}</div>
            <DeleteTasks onDeleteTasks={onDeleteAllDone} />
        </>
    );
}

export default App;
