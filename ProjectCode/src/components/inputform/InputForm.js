import React from 'react';

const InputForm = ({ getMovie }) => {
    return (
        <form onSubmit={getMovie}>
            <input
                type="text"
                name="movie_name"
                placeholder="Enter a movie name"
            />
            <button>Get Movie</button>
        </form>
    )
}

export default InputForm;