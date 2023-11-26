import React from 'react'
import { ChoosenMovieProvider } from './choosenMovieContext'



export const ContextProvider = ({ children }) => {
    return (
        <ChoosenMovieProvider>
            {children}
        </ChoosenMovieProvider>
    )
}