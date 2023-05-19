import React from 'react'
import MovieCard from './MovieCard'
import './App.css'

const MovieList = ({mv,cln}) => {
    
    return (
        <div className={cln}>
            {mv.map((el)=> <MovieCard  mov={el}/>)}
     
        </div>   
         
    )
}

export default MovieList