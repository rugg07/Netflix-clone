import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Row.css"

{/*the parameters of function Row act as props and isLargeRow remains false until that prop isnt passed to it */ }
function Row({ title, fetchURL, isLargeRow = false }) {

    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results); {/*Gives us the movies */ }
            return request;
        }
        fetchData();
    }, [fetchURL])
    return (
        <div className="row">
            <h2 >{title}</h2>
            <div className="row__posters"> {/*if (it's a large movie AND poster path exists) OR (it's not a large movie AND backdrop path exists) so if none are present dead links dont appear*/}
                {movies.map((movie) => (
                    ((isLargeRow && movie.poster_path) ||
                        (!isLargeRow && movie.backdrop_path)) && (
                        <img className={`row__poster ${isLargeRow && "row__posterLarge"}`} key={movie.id} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                    )

                ))}
            </div>
        </div>
    )
}

export default Row
