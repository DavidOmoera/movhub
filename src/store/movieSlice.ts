import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMovies } from '../api/tmdb';

// Define the structure of a movie
interface Movie {
  id: number; // Adjust these properties based on the actual structure returned by your API
  title: string;
  overview: string;
  release_date: string;
  // Add more properties as needed
}

// Define the initial state type
interface MovieState {
  movies: Movie[]; // Use the Movie interface
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
  async (searchTerm: string) => {
    const movies = await fetchMovies(searchTerm);
    return movies;
  }
);



const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.loading = true;
        state.error = null; 
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.movies = action.payload; 
        state.loading = false;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch movies'; 
      });
  },
});


export default movieSlice.reducer;
