import { createSlice } from '@reduxjs/toolkit';

const task = localStorage.getItem('tasks') !== null ? JSON.parse(localStorage.getItem('tasks')) : [];
let number = 0;

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: task,
  },
  reducers: {
    addNewTask(state, action) {
      state.tasks.push({
        id: number++,
        text: action.payload.text,
        date: action.payload.date,
        time: action.payload.time,
        checked: false,
      });
      localStorage.setItem('tasks', JSON.stringify(state.tasks.map(task => task)));
    },
    toggleComplete(state, action) {
      const toggledTask = state.tasks.find(task => task.id === action.payload.id);
      toggledTask.checked = !toggledTask.checked;
      localStorage.setItem('tasks', JSON.stringify(state.tasks.map(task => task)));
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
      localStorage.setItem('tasks', JSON.stringify(state.tasks.map(task => task)));
    }
  },
});

export const {addNewTask, toggleComplete, deleteTask} = taskSlice.actions;

export default taskSlice.reducer;