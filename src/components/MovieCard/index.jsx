import React from "react";

export default function MovieCard({ data }) {
  return (
    <div className="card-item">
      <div className="card-inner">
        <div className="card-top">
          <img src={data.Poster} alt={data.Title} />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
            <p>{data.Type}</p>
            <p>{data.imdbID}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
