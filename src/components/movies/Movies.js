import React from 'react';
import MovieItem from './MovieItem';
import PropTypes from 'prop-types';

const Movies = ({ movies }) => {
    return (
        <div style={userStyle}>
            {movies.map(movie => (
                <MovieItem key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

Movies.propTypes = {
    movies: PropTypes.array.isRequired,
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Movies
