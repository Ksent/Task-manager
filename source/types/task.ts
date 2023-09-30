export interface ITask {
  id: number;
  text: string;
  date: string;
  time: string;
  checked: boolean;
  edited: boolean;
}

export type TasksState = {
  tasks: ITask[];
  tasksFilter: ITask[];
  filterValue: string;
  searchValue: string;
  calendarValue: string;
}

export interface IResetTask {
  resetTask: () => void;
}