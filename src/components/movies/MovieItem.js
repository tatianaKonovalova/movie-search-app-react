import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const MovieItem = ( {movie: { title, poster_path, id }} ) => {
    
    const IMAGE_URL = 'https://image.tmdb.org/t/p/w300/';

    return (
        <div className="card text-center bg-light" style={cardStyle}>
            {poster_path ? (
                <img 
                src={IMAGE_URL + poster_path} alt="poster" style={{ width: '200px'}} /> ) : (<img src="https://starz.tvseries-movies.com/themes/vstripe/images/no-cover.png" alt="posterNotAvailable" style={{ width: '200px'}} />) }
            
            <h3>{title}</h3>

            <div>
                <Link to={`/movie/${id}`} className="btn btn-dark btn-block my-1">
                    Info
                </Link>
            </div>
        </div>
    )
}

const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
}

MovieItem.propTypes = {
    movie: PropTypes.object.isRequired
}

export default MovieItem
