import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navbar';
import {useState} from 'react';
import {Route, Routes } from 'react-router-dom';
import MovieList from './MovieList';
import AddMovie from './AddMovie'
import MovieDetail from './MovieDetail';


function App() {
  const [showComponent, setShowComponent] = useState({text:'New Movie',sho:false});
  const toggleComponent = () => {
  setShowComponent(prevObject => ({
    ...prevObject,
    sho:!showComponent.sho
  }));}
  const [displayClass, setDisplayClass] = useState('line-container');
  const handleClick = () => {
    setDisplayClass(displayClass === 'grid-container' ? 'line-container' : 'grid-container');
  };
  const [mvp,setMvp]=useState([
    {id:0,Trailer :"https://www.youtube.com/embed/oYSD2VQagc4",title:'Iron Man 3',description:'action',posterURL:'http://4.bp.blogspot.com/-VKaiMbdZQng/UXuUwvENXCI/AAAAAAAART8/eBzh9vk5v-0/s400/Iron-Man-3-IMAX-poster1.jpeg', rating:9},
    {id:1,Trailer :"https://www.youtube.com/embed/8NNQqHsIc-4",title:'BATTLESHIP',description:'drama',posterURL:'http://graphicdesignjunction.com/wp-content/uploads/2012/05/large/movie-poster-20.jpg', rating:7},
    {id:2,Trailer :"https://www.youtube.com/embed/Gga6WrloxcE",title:'Hotel TransyLvaniA',description:'histrie',posterURL:'/movie-poster-9.webp', rating:8},
    {id:3,Trailer :"https://www.youtube.com/embed/afJXk-RgzoQ",title:'MADEA S',description:'comidie',posterURL:'movie-poster-29.webp', rating:8},
  ])
  const updateNewMovie = (e) => {
    e.preventDefault(); 
    const title = e.target.elements.titl.value;
    const ratin = e.target.elements.rate1.value;
    const posterURL = e.target.elements.posterUR.value;
    const description = e.target.elements.descriptio.value;
    setMvp(nm=>[...nm,{
      title: title,
      rating: ratin,
      posterURL: posterURL,
      description:description
    }]
    );
    e.target.reset();
  };
    const[titleF,setTitleF]=useState('')
    const ttfiltre = (event) => {
      setTitleF (event.target.value.toLowerCase());}
      const[starF,setStarF]=useState(1)
      const stfiltre = (rate) => {
        setStarF (rate);}
  return (
    <div >
        <div>
        <NavBar toggleComponent={toggleComponent} dsp={handleClick} tf={ttfiltre} sf={stfiltre} starF={starF} cn={displayClass} />
      <Routes>
        <Route path='/' element={<div><MovieList mv={mvp.filter(el=> el.rating >=starF && el.title.toLowerCase().includes(titleF))} cln={displayClass}/></div>}/>
        <Route path ='/AddMovie' element = {<AddMovie updateNewMovie={updateNewMovie}/>}/>
        <Route path ={`/MovieDetail/:id`} element = {<MovieDetail movi={mvp}/>}/>
      </Routes>
        </div>
  
    </div>

  );
}

export default App;
