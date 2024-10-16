import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { addToWatchlist, removeFromWatchlist } from '../store/watchlistSlice';
import MovieList from '../Components/MovieList';
import { backgroundStyle, watchlistHeader } from '../styles';

const WatchlistPage: React.FC = () => {
  const dispatch = useDispatch();
  const { watchlist } = useSelector((state: RootState) => state.watchlist);

  // Check if a movie is in the watchlist
  const isMovieInWatchlist = (id: number) => watchlist.some((item) => item.id === id);

  // Toggle movie in/out of the watchlist
  const handleToggleWatchlist = (movie: any) => {
    if (isMovieInWatchlist(movie.id)) {
      dispatch(removeFromWatchlist(movie.id));
    } else {
      dispatch(addToWatchlist(movie));
    }
  };

  return (
    <div style={backgroundStyle}>
      <h1 style={watchlistHeader}>Your Watchlist</h1>

      {watchlist.length === 0 ? (
        <p style={{ color: 'white' }}>Your watchlist is empty.</p>
      ) : (
        <MovieList
          movies={watchlist}
          onToggleWatchlist={handleToggleWatchlist}
          isInWatchlist={isMovieInWatchlist}
        />
      )}
    </div>
  );
};

export default WatchlistPage;
