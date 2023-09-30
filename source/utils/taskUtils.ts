import { Dispatch, SetStateAction } from "react";

import { ITask } from "../types/task";

//saveTask
const localItems: string | null = localStorage.getItem('tasks');
export const task: ITask[] = localItems !== null ? JSON.parse(localItems) : [];

export function saveTask(items: ITask[]): void {
  localStorage.setItem('tasks', JSON.stringify(items.map(task => task)));
}

//filterTask
export function filterTask(key: string, items: ITask[], value: string, date: string): ITask[] {
  return items.filter(item => {

    if (key === 'all') {
      return true;
    }
  
    if (key === 'process' && !item.checked) {
      return true;
    }
    
    if (key === 'complete' && item.checked) {
      return true;
    }
  
    if (key === 'search' && (item.text.toLowerCase().includes(value.toLowerCase()))) {
      return true;
    }

    if (key === 'calendar' && (item.date === date)) {
      return true;
    }

  });

}

//sortTask
export function sortTask(items: ITask[], indexFrom: number, indexTo: number): ITask[] {
  const copyItems = Array.from(items);
  const [reorderedItem] = copyItems.splice(indexFrom, 1);
  copyItems.splice(indexTo, 0, reorderedItem);
  return copyItems;
}

//resetTask
export function resetTask(close: () => void, text: Dispatch<SetStateAction<string>>, date: Dispatch<SetStateAction<string>>, time: Dispatch<SetStateAction<string>>): void {
  close();

  text('');
  date('');
  time('');
}