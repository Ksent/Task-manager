import { ITask } from "../types/task";

const localItems: string | null = localStorage.getItem('tasks');
export const task: ITask[] = localItems !== null ? JSON.parse(localItems) : [];

export function saveTask(items: ITask[]) {
  localStorage.setItem('tasks', JSON.stringify(items.map(task => task)));
}