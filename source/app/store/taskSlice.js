import { createSlice } from '@reduxjs/toolkit';

let number = 0;
const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
  },
  reducers: {
    addNewTask(state, action) {
      state.tasks.push({
        id: ++number,
        text: action.payload.text,
        date: action.payload.date,
        time: action.payload.time,
        checked: false,
      });
    },
    toggleComplete(state, action) {
      const toggledTask = state.tasks.find(task => task.id === action.payload.id);
      toggledTask.checked = !toggledTask.checked;
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
    }
  },
});

export const {addNewTask, toggleComplete, deleteTask} = taskSlice.actions;

export default taskSlice.reducer;