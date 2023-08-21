import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    filters: [
      {id: 1, forName: 'all-icon', value: 'all', subtitle: 'Все'},
      {id: 2, forName: 'process-icon', value: 'process', subtitle: 'В процессе'},
      {id: 3, forName: 'complete-icon', value: 'complete', subtitle: 'Готово'},
      {id: 4, forName: 'search-icon', value: 'search', subtitle: 'Поиск'},
      {id: 5, forName: 'calendar-icon', value: 'calendar'},
    ],
    iconFilters: {
      className: 'filter__icon button__icon', 
      width:'46', 
      height:'46', 
      stroke:'#c4c4c4',
    },
  },
});

export default filterSlice.reducer;