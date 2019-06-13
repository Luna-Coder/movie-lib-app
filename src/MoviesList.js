import React from 'react';
import Movie from './Movie';

const MoviesList = (props) => {

  let movies = props.data.map(movie =>
    <div key={movie.id + "-div"}>
      <Movie
        id={movie.id}
        poster={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
        title={movie.original_title}
        releaseDate={movie.release_date}
      />
      <button onClick={(e) => props.addToQueue(movie, e)}>Add To Queue</button>
    </div>
  );
  return (
    <div>
      {movies}
    </div>
  );
};

export default MoviesList;
