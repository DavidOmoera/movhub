import React from 'react';
import MovieCard from './MovieCard';

interface MovieListProps {
  movies: any[];
  onAddToWatchlist: (movie: any) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onAddToWatchlist }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onAddToWatchlist={onAddToWatchlist} />
      ))}
    </div>
  );
};

export default MovieList;
