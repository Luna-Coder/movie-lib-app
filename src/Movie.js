import React from 'react';

const Movie = (props) => {
  return (
    <div>
      <img 
        alt=""
        src={props.poster}
      />
      <p>{props.title}</p>
      <p>{props.releaseDate}</p>
    </div>
  );
}

export default Movie;