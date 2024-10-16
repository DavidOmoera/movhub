import { CSSProperties } from 'react';
import newBackground from './assets/1561765.jpg';

// Define the background style
export const backgroundStyle: CSSProperties = {
    backgroundImage: `url(${newBackground})`, // Set the new background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    padding: '20px',
};

// Define styles for the WatchlistPage header
export const watchlistHeader: CSSProperties = {
    fontSize: '2.25rem',
    marginBottom: '24px',
    color: 'white',
    fontFamily: 'MedievalSharp, sans-serif',
};
