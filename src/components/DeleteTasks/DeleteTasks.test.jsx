import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import DeleteTasks from './DeleteTasks';

let tasks = [
    { title: 'Task 1', done: false },
    { title: 'Task 2', done: true },
];

test('render button', async () => {
    const { getByRole } = render(<DeleteTasks />);
    await expect.element(getByRole('button')).toBeInTheDocument();
});

test('on button click, remove all finished tasks', async () => {
    const onDeleteTasks = vi.fn(() => {
        tasks = tasks.filter((task) => {
            return !task.done;
        });
    });

    const { getByRole } = render(<DeleteTasks onDeleteTasks={onDeleteTasks} />);
    await getByRole('button').click();
    expect(tasks.length).toBe(1);
});
