import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieSlice';
import watchlistReducer from './watchlistSlice';

const store = configureStore({
  reducer: {
    movie: movieReducer,
    watchlist: watchlistReducer,
  },
  // Optionally, you can also add middleware here if necessary
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
