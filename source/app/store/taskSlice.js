import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask(state, action) {
      state.tasks.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    toggleComplete(state, action) {
      const toggledTask = state.tasks.find(task => task.id === action.payload.id);
      toggledTask.completed = !toggledTask.completed;
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
    }
  },
});

export const {addTask, toggleComplete, deleteTask} = taskSlice.actions;

export default taskSlice.reducer;