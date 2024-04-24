import React, { useEffect } from "react";

export default function FetchMovie() {
  const apiUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=38868210c902bc6cad8040a281134b8b";
  const api_key = "38868210c902bc6cad8040a281134b8b";

  const [movies,getMovies] = useEffect([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return response.json();
      })
      .then((data) => {
        console.log("Response from Movia API:", data.results);
        getMovies(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      {/* <div>
      {console.log(movies)}
        {movies.map((movie) => {
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}}`} />;
        })}
      </div> */}
    </>
  );
}
