import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the Movie type with proper fields
interface Movie {
  id: number;
  title: string;

}

interface WatchlistState {
  watchlist: Movie[];
}

const initialState: WatchlistState = {
  watchlist: [],
};

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    // Add a movie to the watchlist, ensure it's not already in the list
    addToWatchlist: (state, action: PayloadAction<Movie>) => {
      const existingMovie = state.watchlist.find((movie) => movie.id === action.payload.id);
      if (!existingMovie) {
        state.watchlist.push(action.payload); 
      }
    },

    // Remove a movie from the watchlist by its ID
    removeFromWatchlist: (state, action: PayloadAction<number>) => {
      state.watchlist = state.watchlist.filter((movie) => movie.id !== action.payload);
    },
  },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
