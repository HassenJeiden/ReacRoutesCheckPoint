    <div className="App">
      <header className="App-header">
        <div>
        <div>
        <button onClick={toggleComponent} name='hideButton'>{showComponent.sho  ? 'Hide' : 'New Movie'}</button>
        {showComponent.sho && <AddMovie listM={updateNewMovie}/>}
        </div>
        <Filter tf={ttfiltre} sf={stfiltre} starF={starF}></Filter>
        <MovieList mv={mvp.filter(el=> el.rating >=starF && el.title.toLowerCase().includes(titleF))}></MovieList>
        </div>
      </header>
    </div>