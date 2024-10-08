import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMovies } from '../api/tmdb';

// Define the structure of a movie based on API response
interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
}

// Define the initial state type
interface MovieState {
  movies: Movie[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: MovieState = {
  movies: [],
  loading: false,
  error: null,
};

// Create async thunk for fetching movies
export const getMovies = createAsyncThunk<Movie[], string>(
  'movies/getMovies',
  async (searchTerm: string, { rejectWithValue }) => {
    try {
      const movies = await fetchMovies(searchTerm);
      return movies;
    } catch (error: any) {
      // Provide detailed error handling and fallback
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch movies');
    }
  }
);

// Create slice for movies
const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error when loading starts
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.movies = action.payload; // Set movies array with the data from API
        state.loading = false;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; // Use payload for consistent error messages
      });
  },
});

export default movieSlice.reducer;
