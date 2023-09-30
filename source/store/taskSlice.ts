import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DropResult } from 'react-beautiful-dnd';

import { TasksState } from '../types/task';

import { filterTask, saveTask, sortTask, task } from '../utils/taskUtils';

const initialState: TasksState = {
  tasks: task,
  tasksFilter: task,
  filterValue: 'all',
  searchValue: '',
  calendarValue: '',
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addNewTask(state, action: PayloadAction<{ text: string, date: string, time: string }>) {
      state.tasks.push({
        id: Date.now(),
        text: action.payload.text,
        date: action.payload.date,
        time: action.payload.time,
        checked: false,
        edited: false,
      });

      state.tasksFilter = filterTask(state.filterValue, state.tasks, state.searchValue, state.calendarValue);

      saveTask(state.tasks);
    },
    toggleComplete(state, action: PayloadAction<number>) {
      const toggledTask = state.tasks.find(task => task.id === action.payload);

      if (toggledTask) {
        toggledTask.checked = !toggledTask.checked;
      }

      state.tasksFilter = filterTask(state.filterValue, state.tasks, state.searchValue, state.calendarValue);

      saveTask(state.tasks);
    },
    startEditing(state, action: PayloadAction<number>) {
      const editedTask = state.tasks.find(task => task.id === action.payload);

      if(editedTask) {
        editedTask.edited = true;
      }

    },
    editTask(state, action: PayloadAction<{ text: string, date: string, time: string }>) {
      const editedTask = state.tasks.find(task => task.edited === true);

      if (editedTask) {
        editedTask.text = action.payload.text;
        editedTask.date = action.payload.date;
        editedTask.time = action.payload.time;
      }

    },
    endEditing(state) {
      const editedTask = state.tasks.find(task => task.edited === true);

      if (editedTask) {
        editedTask.edited = false;
      }

      state.tasksFilter = filterTask(state.filterValue, state.tasks, state.searchValue, state.calendarValue);

      saveTask(state.tasks);
    },
    deleteTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);

      state.tasksFilter = filterTask(state.filterValue, state.tasks, state.searchValue, state.calendarValue);

      saveTask(state.tasks);
    },
    dragEndTask(state, action: PayloadAction<DropResult>) {
      const sourceId = (state.tasksFilter[action.payload.source.index]).id;
      const sourceItem = state.tasks.find(task => task.id === sourceId);

      if (sourceItem && action.payload.destination) {
        const sourceIndex = state.tasks.indexOf(sourceItem);
      
        const destinationId = (state.tasksFilter[action.payload.destination.index]).id;
        const destinationItem = state.tasks.find(task => task.id === destinationId);

        if (destinationItem) {
          const destinationIndex = state.tasks.indexOf(destinationItem);

          state.tasksFilter = sortTask(state.tasksFilter, action.payload.source.index, action.payload.destination.index);

          state.tasks = sortTask(state.tasks, sourceIndex, destinationIndex);
        }

      }

      saveTask(state.tasks);
    },
    startSearch(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    endSearch(state) {
      state.searchValue = '';
    },
    addDate(state, action: PayloadAction<{ value: string }>) {
      state.calendarValue = action.payload.value;
    },
    addFilter(state, action: PayloadAction<{ value: string }>) {
      state.filterValue = action.payload.value;

      state.tasksFilter = filterTask(state.filterValue, state.tasks, state.searchValue, state.calendarValue);
    },
  },
});

export const { 
  addNewTask, 
  toggleComplete, 
  startEditing,
  editTask, 
  endEditing,
  deleteTask, 
  dragEndTask, 
  startSearch,
  endSearch,
  addDate,
  addFilter
} = taskSlice.actions;

export default taskSlice.reducer;