import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import { userEvent } from '@vitest/browser/context';
import TaskInput from './TaskInput';
import uuid from '../../utils/uuid';

const tasks = [];

test('render input element', async () => {
    const { getByRole } = render(<TaskInput />);
    await expect.element(getByRole('textbox')).toBeInTheDocument();
});

test('on input change', async () => {
    const { getByRole } = render(<TaskInput />);
    await userEvent.fill(getByRole('textbox'), 'Task 1');
    await expect.element(getByRole('textbox')).toHaveValue('Task 1');
});

test('on add task button click, add new task', async () => {
    const handleChange = vi.fn((value) => {
        tasks.push({
            id: uuid(),
            title: value,
            done: false,
        });
    });
    const { getByRole } = render(<TaskInput handleChange={handleChange} />);
    await userEvent.fill(getByRole('textbox'), 'Task 1');
    await getByRole('button').click();
    expect(tasks.length).toBeGreaterThan(0);
    await expect.element(getByRole('textbox')).toHaveValue('');
});
