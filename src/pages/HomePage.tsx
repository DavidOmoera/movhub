import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../store/movieSlice';
import MovieList from '../Components/MovieList';
import { RootState } from '../store/store';
import { addToWatchlist } from '../store/watchlistSlice';
import homepageBackground from '../assets/Homepagebackground.jpg'; // Import the image

interface Movie {
  id: number;
  title: string;
}

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const { movies, loading } = useSelector((state: RootState) => state.movie);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(getMovies(searchTerm) as any);
  };

  const handleAddToWatchlist = (movie: Movie) => {
    dispatch(addToWatchlist(movie));
  };

  return (
    <div
      className="homepage"
      style={{
        backgroundImage: `url(${homepageBackground})`,
        backgroundSize: 'contain',          
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',      
        minHeight: '100vh',
        padding: '20px'
      }}
    >

      <h1 style={{ color: '#fff' }}>Search for Movies</h1> {/* Text color changed for visibility */}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <MovieList movies={movies} onAddToWatchlist={handleAddToWatchlist} />
      )}
    </div>
  );
};

export default HomePage;
