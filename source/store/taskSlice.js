import { createSlice } from '@reduxjs/toolkit';

const task = localStorage.getItem('tasks') !== null ? JSON.parse(localStorage.getItem('tasks')) : [];

function saveTask(items) {
  localStorage.setItem('tasks', JSON.stringify(items.map(task => task)));
}

function sortTask(items, indexFrom, indexTo) {
  const copyItems = Array.from(items);
  const [reorderedItem] = copyItems.splice(indexFrom, 1);
  copyItems.splice(indexTo, 0, reorderedItem);
  return copyItems;
}

function filterTask(key, items, value, date) {
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

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: task,
    tasksFilter: task,
    filterValue: 'all',
    searchValue: '',
    calendarValue: '',
  },
  reducers: {
    addNewTask(state, action) {
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
    toggleComplete(state, action) {
      const toggledTask = state.tasks.find(task => task.id === action.payload.id);
      toggledTask.checked = !toggledTask.checked;
      state.tasksFilter = filterTask(state.filterValue, state.tasks, state.searchValue, state.calendarValue);

      saveTask(state.tasks);
    },
    startEditing(state, action) {
      const editedTask = state.tasks.find(task => task.id === action.payload.id);
      editedTask.edited = true;
    },
    editTask(state, action) {
      const editedTask = state.tasks.find(task => task.edited === true);
      editedTask.text = action.payload.text;
      editedTask.date = action.payload.date;
      editedTask.time = action.payload.time;
    },
    endEditing(state) {
      const editedTask = state.tasks.find(task => task.edited === true);
      editedTask.edited = false;
      state.tasksFilter = filterTask(state.filterValue, state.tasks, state.searchValue, state.calendarValue);

      saveTask(state.tasks);
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
      state.tasksFilter = filterTask(state.filterValue, state.tasks, state.searchValue, state.calendarValue);

      saveTask(state.tasks);
    },
    dragEndTask(state, action) {
      const sourceId = (state.tasksFilter[action.payload.source.index]).id;
      const sourceItem = state.tasks.find(task => task.id === sourceId);
      const sourceIndex = state.tasks.indexOf(sourceItem);
      
      const destinationId = (state.tasksFilter[action.payload.destination.index]).id;
      const destinationItem = state.tasks.find(task => task.id === destinationId);
      const destinationIndex = state.tasks.indexOf(destinationItem);

      state.tasksFilter = sortTask(state.tasksFilter, action.payload.source.index, action.payload.destination.index);

      state.tasks = sortTask(state.tasks, sourceIndex, destinationIndex);

      saveTask(state.tasks);
    },
    startSearch(state, action) {
      state.searchValue = action.payload.value;
    },
    endSearch(state) {
      state.searchValue = '';
    },
    addDate(state, action) {
      state.calendarValue = action.payload.value;
    },
    addFilter(state, action) {
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