import React from 'react';
import Movie from './Movie';

const MovieQueue = (props) => {
  const res = props.data;

  let movies = res.map(movie =>
    <div key={movie.id + "-div"}>
      <Movie
        id={movie.id}
        poster={movie.poster_path}
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