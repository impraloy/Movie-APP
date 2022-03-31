import React from 'react';

const MovieDetails = (props) => {

    return (
        <div>
            { props.poster && <img src={props.poster} alt="" /> }
            { props.title && <h2>Title: { props.title }</h2> }
            { props.year && <p>Year: { props.year }</p> }
            { props.country && <p>Country: { props.country }</p> }
            { props.released && <p>Released: { props.released }</p> }
            { props.genre && <p>Genre: { props.genre }</p> }
            { props.director && <p>Director: { props.director }</p> }
            { props.actors && <p>Actors: { props.actors }</p> }
            { props.rating && <p>Rating: { props.rating }/10</p> }
        </div>
    )
}

export default MovieDetails;