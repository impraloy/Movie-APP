import React from 'react';
import './App.css';


// User Defined Components
import Header from './components/header/Header';
import InputForm from './components/inputform/InputForm';
import MovieDetails from './components/movie-details/MovieDetails';

const api_key = "ab8eae77";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      year: "",
      released: "",
      country: "",
      genre: "",
      director: "",
      actors: "",
      rating: "",
      poster: "",
      error: "Please enter a valid movie name"
    }
  }

  getMovie = async (e) => {
    
    const movie_name = e.target.elements.movie_name.value;
    e.preventDefault();
    
    const api_call = await fetch( `http://www.omdbapi.com/?t=${movie_name}&apikey=${api_key}`);
    const response = await api_call.json();

    console.log(response);
    if(movie_name){
      this.setState({
        title: response.Title,
        year: response.Year,
        country: response.Country,
        released: response.Released,
        genre: response.Genre,
        director: response.Director,
        actors: response.Actors,
        rating: response.imdbRating,
        poster: response.Poster,
        error: "Please enter a valid movie name"
      });
    }
    else {
      this.setState({
        error: "Please enter a valid movie name"
      });
    }
  }

  render() {
    return (
      <div className="app">
        <Header />
        <InputForm getMovie={this.getMovie}/>
        <MovieDetails {...this.state}/>
      </div>
    )
  }
}

export default App;
