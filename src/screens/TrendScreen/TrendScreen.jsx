import React, { useState, useEffect, useContext } from "react";
import data from '../../data.json'
import { movieContext } from "../../context/choosenMovieContext";
import './trend.css'



export const TrandScreen = () => {

    const [movies, setMovies] = useState([]);
    const { movieId, chooseMovie } = useContext(movieContext)

    useEffect(() => {
        const movieList = data.TendingNow.sort((a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime())
        setMovies(movieList);
    }, []);



    if (movieId) {
        const index = movies.findIndex((item => item.Id === movieId))
        const movie = { ...movies[index] }
        movies.splice(index, 1);
        movies.unshift(movie);
    }

    const changeMovie = (id, index) => {
        chooseMovie(id)
    }


    return (
        <div className="trendContainer">
            <p className="trendTitle">Trending Now</p>
            <div className="movieList">
                {
                    movies?.map((item, index) => {
                        return (
                            <img className="image"
                                key={item.Id}
                                onClick={() => { changeMovie(item.Id, index) }}
                                src={require(`../../assets/images/${item.CoverImage}`)}
                                onDragStart={(e)=>{e.preventDefault()}}
                                alt=""
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}