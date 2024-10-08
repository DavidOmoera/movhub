import React from 'react';

interface MovieCardProps {
  movie: any;
  onAddToWatchlist: (movie: any) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onAddToWatchlist }) => {
  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
      <button onClick={() => onAddToWatchlist(movie)}>Add to Watchlist</button>
    </div>
  );
};

export default MovieCard;
