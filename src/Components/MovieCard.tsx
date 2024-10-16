import React from 'react';

interface MovieCardProps {
  movie: any;
  onToggleWatchlist: (movie: any) => void;
  isInWatchlist: (id: number) => boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onToggleWatchlist, isInWatchlist }) => {
  const isInList = isInWatchlist(movie.id);

  return (
    <div
      className="movie-card"
      style={{
        backgroundColor: '#2D3748',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        style={{ borderRadius: '8px', marginBottom: '12px', width: '100%' }}
      />
      <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'white' }}>
        {movie.title}
      </h3>
      <button
        onClick={() => onToggleWatchlist(movie)}
        style={{
          backgroundColor: isInList ? '#E53E3E' : '#3182CE',
          color: 'white',
          padding: '8px 12px',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        {isInList ? 'Remove from Watchlist' : 'Add to Watchlist'}
      </button>
    </div>
  );
};

export default MovieCard;
