import React from 'react';
import Movie from './Movie';

const MoviesList = (props) => {

  let movies = props.data.map(movie =>
    <div>
      <Movie
        id={movie.id}
        key={movie.id}
        poster={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
        title={movie.original_title}
        releaseDate={movie.release_date}
      />
      <button onClick={props.addToQueue(movie.id)}>Add To Queue</button>
    </div>
  );
  return (
    <div>
      {movies}
    </div>
  );
};

export default MoviesList;
