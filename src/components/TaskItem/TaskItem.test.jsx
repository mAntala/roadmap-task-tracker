import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import TaskItem from './TaskItem';

const tasks = [
    { title: 'Task 1', done: false },
    { title: 'Task 2', done: true },
];

test('render task title', async () => {
    const { getByText } = render(<TaskItem task={tasks[0]} />);
    await expect.element(getByText('Task 1')).toBeInTheDocument();
});

test('checkbox is unchecked by default', async () => {
    const { getByRole } = render(<TaskItem task={tasks[0]} />);
    await expect.element(getByRole('checkbox')).not.toBeChecked();
});

test('on checkbox click, change task\'s property "done" to true', async () => {
    const onTaskDone = vi.fn(() => {
        tasks[0].done = true;
    });

    const { getByRole } = render(<TaskItem task={tasks[0]} onTaskDone={onTaskDone} />);

    await getByRole('checkbox').click();
    expect(tasks[0].done).toBe(true);
});

test('on delete button click, remove task', async () => {
    const onTaskDelete = vi.fn(() => {
        tasks.shift();
    });

    expect(tasks.length).toBe(2);

    const { getByRole } = render(<TaskItem task={tasks[0]} onTaskDelete={onTaskDelete} />);
    await getByRole('button').click();
    expect(tasks.length).toBe(1);
});
