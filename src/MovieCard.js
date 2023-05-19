import React from 'react'
import './card.css'
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom';

const MovieCard = ({mov}) => {

    return (
    <figure  className="movie" >
    <div className="movie__hero">
      <img src={mov.posterURL} alt="Movie Poster" className="movie__img"/>
    </div>
    <div className="movie__content">
      <div className="movie__title">
      <h1 className="heading__primary">{mov.title}<i className="fas fa-fire"></i></h1>
      <Link to={`/MovieDetail/${mov.id}`}>Trailer</Link>
        <StarRatingComponent 
          name='rate1'
          starCount={10}
          value={mov.rating}
        />
      </div>
      <p className="movie__description">{mov.description}</p>
      
    </div>
    <div className="movie__price">{mov.rating}</div>
  </figure>
  )
}

export default MovieCard