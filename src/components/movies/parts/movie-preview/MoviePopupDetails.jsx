import React from "react";

const MoviePopupDetails = (props) => {
  const { credits, movie } = props;
  return (
    <div className="movie__preview__details flex__start">
      <ul>
        <h4>Cast</h4>
        {credits && credits.length > 0
          ? credits.map((m, i) => {
              if (i < 15) {
                return <li key={m.id}>{m.name}</li>;
              }
            })
          : ""}
      </ul>
      {credits && credits.length > 15 ? (
        <ul>
          <h4>Cast</h4>
          {credits && credits.length > 0
            ? credits.map((m, i) => {
                if (i >= 15 && i < 30) {
                  return <li key={m.id}>{m.name}</li>;
                }
              })
            : ""}
        </ul>
      ) : (
        ""
      )}
      <ul>
        <h4>Genres</h4>
        {movie.genres && movie.genres.length > 0
          ? movie.genres.map((m) => {
              return <li key={m.id}>{m.name}</li>;
            })
          : ""}
      </ul>
    </div>
  );
};

export default MoviePopupDetails;
