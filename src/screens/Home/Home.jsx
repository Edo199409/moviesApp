import React, { useContext, useM, useMemo } from 'react'
import { VideoScreen } from '../VideoScreen.jsx/Video'
import { TrandScreen } from '../TrendScreen/TrendScreen'
import './home.css'

export const Home = () => {
     
  return (
    <div className='appContainer'>
      <VideoScreen />
      <TrandScreen />
    </div>
  )
}
