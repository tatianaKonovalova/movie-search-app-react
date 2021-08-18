import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {

    state = {
        text: '',
    }

    static propTypes = {
        searchMovies: PropTypes.func.isRequired,
        clearMovies: PropTypes.func.isRequired,
        showClearBtn: PropTypes.bool.isRequired
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchMovies(this.state.text);
        this.setState({ text: '' });
    }

    onChange = (e) => {
        this.setState( { [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input 
                    type="text" 
                    name="text" 
                    placeholder="Search Movies..." 
                    value={this.state.text} 
                    onChange={this.onChange} />
                    <input type="submit" 
                    value="Search" 
                    className="btn btn-dark btn-block" />
                </form>

                {this.props.showClearBtn && ( 
                <button 
                className="btn btn-danger btn-block"
                style={{ marginBottom: '15px' }} 
                onClick={this.props.clearMovies}>Clear</button>
                )}
            </div>
        )
    }
}

export default Search
