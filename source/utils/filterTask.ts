import { ITask } from "../types/task";

export function filterTask(key: string, items: ITask[], value: string, date: string) {
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