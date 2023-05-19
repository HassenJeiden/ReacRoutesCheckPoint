import RateStar from './rate';

function AddMovie({updateNewMovie}) {
  
    return (
    <div>
      <form onSubmit={updateNewMovie} className="addmovie">
        <input type="text" name="titl" placeholder="title" />
        <input type="text" name="posterUR" placeholder="posterURL" />
        <input type="text-area" name="descriptio" placeholder="description" />
        <RateStar /> 
       <button type="submit" >Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
