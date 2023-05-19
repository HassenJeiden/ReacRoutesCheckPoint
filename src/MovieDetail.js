import React from 'react'
import { useParams } from 'react-router-dom'


const MovieDetail = ({movi}) => {
  const {id} =useParams();
  const mymovie = movi.find((el)=>el.id===+id)
  return (
    <div >
        <h1> Details of {mymovie.title}</h1>
        <div>
        <iframe width="560" height="315" src={mymovie.Trailer} 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
        </iframe>
        <h3>description</h3>
        <div>{mymovie.description} </div>
        </div>
    </div>
  )
}

export default MovieDetail