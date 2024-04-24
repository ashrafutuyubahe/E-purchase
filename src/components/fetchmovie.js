import React, { useEffect, useState } from "react";

export default function FetchMovie() {
  const apiUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=38868210c902bc6cad8040a281134b8b";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response from Movie API:", data.results);
        setMovies(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {movies &&
        movies.map((movie) => (
         <a  href="#">
           <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
             style={{width:"300px",height:"250px", marginLeft:"10px",marginTop:"10px"}}
          
          />
         
        
         </a>
        ))}
    </div>
  );
}
