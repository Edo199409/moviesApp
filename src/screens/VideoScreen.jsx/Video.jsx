import React, { useContext, useMemo, useState, useEffect, useRef } from "react";
import "./video.css";
import data from "../../data.json";
import { movieContext } from "../../context/choosenMovieContext";

export const VideoScreen = () => {
    const { movieId, needChange } = useContext(movieContext)
    const [player, setPlayer] = useState(false)



    const movie = useMemo(() => {
        if (movieId) {
            return data.TendingNow.find(item => item.Id === movieId)
        } else {
            return data.Featured
        }

    }, [movieId])

    const backgroundImage = useMemo(() => {
        if (movieId) {
            const image = data.TendingNow.find(item => item.Id === movieId)
            return require(`../../assets/images/${image.CoverImage}`)
        } else {
            return require(`../../assets/images/${data.Featured.CoverImage}`)
        }
    }, [movieId])


    useEffect(() => {
        if (needChange) {
            setTimeout(() => {
                setPlayer(true);
            }, 2000);
        } else {
        }
        if (player) {
            setPlayer(false)
        }

    }, [movieId]);

    return (
        <div className="videoContainer" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="movieInfoContainer">
                <p className="categoryText">{movie.Category}</p>
                <p className="nameText">{movie.Title}</p>
                <div className="dateInfoContainer">
                    <p className="movieDateText">
                        {new Date(movie.Date)?.getFullYear()}
                    </p>
                    <p>{movie.MpaRating}</p>
                    <p>{movie.Duration}</p>
                </div>
                <p className="movieDateText">{movie.Description}</p>

                <div className="buttonsContainer">
                    <button
                        className="btn firstBtn"
                        onClick={() => { if (!player) { setPlayer(true) } }}
                    >
                        <img
                            style={{ width: "24px", marginRight: '10px' }}
                            src={require("../../assets/icons/playIcon.png")}
                        />
                        Play
                    </button>
                    <button className="btn secondBtn">More info</button>
                </div>
            </div>

            {player &&
                <video width='100%' height='100%' controls className="videoPlayer" autoPlay>
                    <source src={movie?.VideoUrl} type="video/mp4" />
                </video>
            }


        </div>
    );
}
