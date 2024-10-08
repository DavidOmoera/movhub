import { createSlice } from '@reduxjs/toolkit';

interface WatchlistState {
  watchlist: any[];
}

const initialState: WatchlistState = {
  watchlist: [],
};

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addToWatchlist(state, action) {
      state.watchlist.push(action.payload);
    },
    removeFromWatchlist(state, action) {
      state.watchlist = state.watchlist.filter((movie) => movie.id !== action.payload.id);
    },
  },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
