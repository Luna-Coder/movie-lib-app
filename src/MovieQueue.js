import React from 'react';
import Movie from './Movie';

const MovieQueue = (props) => {
  const res = props.data;

  let movies = res.map(movie =>
    <div>
      <Movie
        key={movie.id}
        id={movie.id}
        poster={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
        title={movie.original_title}
        releaseDate={movie.release_date}
      />
      <button>Remove From Queue</button>
    </div>
  )
  return (
    <div>
      <h1>Your Movie Queue</h1>
      {movies}
    </div>
  );
}

export default MovieQueue;