import React, { useState, createContext, useEffect } from 'react';

export const movieContext = createContext({
    movieId: null,
    chooseMovie: () => { },
    needChange: false
});

export const ChoosenMovieProvider = ({ children }) => {
    const [movieId, setMovieId] = useState(null);
    const [needChange, setNeedChange] = useState(false)




    const chooseMovie = (arg) => {
        setMovieId((prev)=>{
            setNeedChange(true)
            return arg
        })
        sessionStorage.setItem("movieId", arg);
    }

    useEffect(() => {
        const id = sessionStorage.getItem("movieId")
        setMovieId(id)
    }, [])

    return (
        <movieContext.Provider
            value={{
                movieId,
                chooseMovie,
                needChange
            }}>
            {children}
        </movieContext.Provider>
    );
};
