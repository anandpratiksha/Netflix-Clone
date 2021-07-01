import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';

const base_url = 'http://image.tmdb.org/t/p/original/';

function Row({ title , fetchUrl}) {
    const [movies, setMovies] = useState([]);

    // A Snippet of code which runs based on a specific conditions/variable

    useEffect(() =>{
        // if [] , run once when the row loads & dont run again
        async function fetchdata(){
            const request = await axios.get(fetchUrl);
            // https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US
            console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchdata();
    }, [fetchUrl]) ;

    console.table(movies);

    return (
        <div className="row">
            <h2>{title}</h2> {/* Title */}
                <div className="row__posters"> 
                {/* several row poster */}
                {movies.map(movie =>(
                    <img className="row__poster" src={`${base_url}${movie.poster_path}`} alt={movie.name}/>
                ))}
                </div>
            {/* Container --> posters */}
        </div>
    )
}

export default Row;
