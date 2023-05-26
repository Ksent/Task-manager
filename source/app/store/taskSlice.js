import { createSlice } from '@reduxjs/toolkit';

const task = localStorage.getItem('tasks') !== null ? JSON.parse(localStorage.getItem('tasks')) : [];
function saveTask(items) {
  localStorage.setItem('tasks', JSON.stringify(items.map(task => task)));
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: task,
  },
  reducers: {
    addNewTask(state, action) {
      state.tasks.push({
        id: Date.now(),
        text: action.payload.text,
        date: action.payload.date,
        time: action.payload.time,
        checked: false,
      });

      saveTask(state.tasks);
    },
    toggleComplete(state, action) {
      const toggledTask = state.tasks.find(task => task.id === action.payload.id);

      toggledTask.checked = !toggledTask.checked;

      saveTask(state.tasks);
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload.id);

      saveTask(state.tasks);
    },
    dragEndTask(state, action) {
      const items = Array.from(state.tasks);
      const [reorderedItem] = items.splice(action.payload.source.index, 1);

      items.splice(action.payload.destination.index, 0, reorderedItem);
      state.tasks = items;

      saveTask(state.tasks);
    },
  },
});

export const { addNewTask, toggleComplete, deleteTask, dragEndTask } = taskSlice.actions;

export default taskSlice.reducer;