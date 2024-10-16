import React from 'react';
import MovieCard from './MovieCard';

interface MovieListProps {
  movies: any[];
  onToggleWatchlist: (movie: any) => void;
  isInWatchlist: (id: number) => boolean;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onToggleWatchlist, isInWatchlist }) => {
  return (
    <div
      className="movie-list"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px',
        padding: '20px',
      }}
    >
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onToggleWatchlist={onToggleWatchlist}
          isInWatchlist={isInWatchlist}
        />
      ))}
    </div>
  );
};

export default MovieList;
