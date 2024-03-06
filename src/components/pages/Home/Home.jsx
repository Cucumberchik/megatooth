import React from 'react'
import { HomeSwiper } from './HomeSwiper'
import { AboutUsOurDoctor } from './AboutUsOurDoctor'
import Main from "../Hero/main";
import HomeRating from "./HomeRating"
import Social from "../Social/Social";

export default function Home() {
    return (
        <div>
            <HomeSwiper />
            <Main />
            <Social />
            <AboutUsOurDoctor />
            <HomeRating />
        </div>
    );
}
