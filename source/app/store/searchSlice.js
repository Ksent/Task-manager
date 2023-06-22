import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'searchForm',
  initialState: {
    searchValue: '',
  },
  reducers: {
    startSearch(state, action) {
      state.searchValue = action.payload.value;
    },
    endSearch(state) {
      state.searchValue = '';
    }
  },
});

export const { startSearch, endSearch } = searchSlice.actions;

export default searchSlice.reducer;