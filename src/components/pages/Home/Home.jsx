import React from 'react'
import { HomeSwiper } from './HomeSwiper'
import { AboutUsOurDoctor } from './AboutUsOurDoctor'
import Main from "../Hero/main";
import { HomeRating } from './HomeRating';
import Authorization from "../../modal_window/register"

export default function Home() {
    return (
        <div>

            <HomeSwiper />
            <Main />

            <AboutUsOurDoctor />
            <HomeRating />
            <Authorization />
        </div>
    );
}
