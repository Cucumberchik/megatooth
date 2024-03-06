import React from "react";
import { HomeSwiper } from "./HomeSwiper";
import { AboutUsOurDoctor } from "./AboutUsOurDoctor";
import HomeRating from "./HomeRating";
import Social from "../Social/Social";
import News from "../News/News";

export default function Home() {
    return (
        <div>
            <HomeSwiper />
            <Social />
            <News />
            <AboutUsOurDoctor />
            <HomeRating />
        </div>
    );
}
