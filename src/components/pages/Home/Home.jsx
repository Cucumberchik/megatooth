import React from 'react'
import { HomeSwiper } from './HomeSwiper'
import { AboutUsOurDoctor } from './AboutUsOurDoctor'
import { HomeRating } from './HomeRating'


export default function Home() {
    return (
        <div>
            <HomeSwiper />
            <AboutUsOurDoctor />
            <HomeRating />
        </div>
    )
}
