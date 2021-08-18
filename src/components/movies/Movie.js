import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class Movie extends Component {
    
    componentDidMount() {
        this.props.getMovie(this.props.match.params.id);
    }

    static propTypes = {
        getMovie: PropTypes.func.isRequired
    }
    
    render() {

        const {
            original_title,
            poster_path,
            vote_average,
            overview,
            release_date
        } = this.props.movie;

        const IMAGE_URL = 'https://image.tmdb.org/t/p/w300/';

        return (
            <Fragment>
                <Link to="/" className="btn btn-primary">
                    Back to search
                </Link>

                <div className="card grid-2">
                    <div className="all-center">
                        <img src={IMAGE_URL + poster_path} alt="poster" style={{ width: '300px' }} />
                    </div>
                    <div className="all-center">
                        <h1>{original_title}</h1>
                        <div className="text-center">
                            <div className="badge badge-primary">Release date: {release_date}</div>
                            <div className="badge badge-success">Average rate: {vote_average}</div>
                        </div>
                        <p style={overviewStyle} className="bg-light" >{overview}</p>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const overviewStyle = {
    border: 'none',
    borderRadius: '20px',
    padding: '20px',
    marginTop: '10px'
}

export default Movie
