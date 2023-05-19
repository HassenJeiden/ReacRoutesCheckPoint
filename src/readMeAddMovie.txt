import React,{useState}from 'react';
import RateStar from './rate';

function AddMovie({listM,mvp}) {
  const [mvp1,setMvp1]=useState([
    {title:'',description:'',posterURL:'', rating:1},
  ])
  const NewMovie = (e) => {
    e.preventDefault(); 
    const title = e.target.elements.titl.value;
    const ratin = e.target.elements.rate1.value;
    const posterURL = e.target.elements.posterUR.value;
    const description = e.target.elements.descriptio.value;
    setMvp1({
      title: title,
      rating: ratin,
      posterURL: posterURL,
      description:description
    });
    mvp=listM(mvp1)
    e.target.reset();
  };
    return (
    <div>
      <form onSubmit={NewMovie} className="addmovie">
        <input type="text" name="titl" placeholder="title" />
        <input type="text" name="posterUR" placeholder="posterURL" />
        <input type="text-area" name="descriptio" placeholder="description" />
        <RateStar/> 
       <button type="submit" >Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
