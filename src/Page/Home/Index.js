import React, { useState } from 'react'
import Home_Type from './Component/Home.Type'
import Home_Slide from './Component/Home.Slide'
import Home_Sale from './Component/Home.Sale'
import Home_Market_Car from './Component/Home.Market.Car'
import Home_Follow from './Component/Home.Follow'

export default function Home() {

    return (
        <>
            <Home_Slide />
            <Home_Type />
            <Home_Sale />
            <Home_Market_Car />
            <Home_Follow />
        </>
    )
}
