import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    filters: [
      {id: 1, forName: 'all-icon', value: 1, checked: true, icon: '#icon-all', subtitle: 'Все'},
      {id: 2, forName: 'process-icon', value: 2, checked: false, icon: '#icon-process', subtitle: 'В процессе'},
      {id: 3, forName: 'complete-icon', value: 3, checked: false, icon: '#icon-complete', subtitle: 'Готово'},
    ],
  },
});

export default filterSlice.reducer;