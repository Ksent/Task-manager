import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    filters: [
      {id: 1, forName: 'all-icon', value: 'all', icon: '#icon-all', subtitle: 'Все'},
      {id: 2, forName: 'process-icon', value: 'process', icon: '#icon-process', subtitle: 'В процессе'},
      {id: 3, forName: 'complete-icon', value: 'complete', icon: '#icon-complete', subtitle: 'Готово'},
      {id: 4, forName: 'search-icon', value: 'search', icon: '#icon-search', subtitle: 'Поиск'},
    ],
    filterValue: 'all',
  },
  reducers: {
    addFilter(state, action) {
      state.filterValue = action.payload.value;
    },
  },
});

export const { addFilter } = filterSlice.actions;

export default filterSlice.reducer;