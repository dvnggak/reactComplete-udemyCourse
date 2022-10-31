import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(false)
  const [err, setErr] = useState(null)

  const  fetchMoviesHandler = useCallback( async () => {
    setIsLoadingData(true)
    setErr(null)
    try {
      const response = await fetch('https://swapi.dev/api//films');
      if (!response.ok) {
        throw new Error('Something went wrong !')
      }
      const data = await response.json()


      const transformedMovies = data.results.map(moviesData => {
        return {
          id: moviesData.episode_id,
          title: moviesData.title,
          releaseDate: moviesData.release_date,
          openingText: moviesData.opening_crawl
        }
      })
      setMovies(transformedMovies)
    } catch (error) {
      setErr(error.message)
    }
    setIsLoadingData(false)
  }, [])

  useEffect(() => {
    fetchMoviesHandler()
  }, [fetchMoviesHandler])

  let content = <p>Found no movies ...</p>;

  if (err) {
    content = <p>{err}</p>
  }
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />
  }

  if (isLoadingData) {
    content = <p>Please wait a second</p>
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
