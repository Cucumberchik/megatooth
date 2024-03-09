import React from "react";
import { HomeSwiper } from "./HomeSwiper";
import { AboutUsOurDoctor } from "./AboutUsOurDoctor";
import HomeRating from "./HomeRating";
import Social from "../Social/Social";
import News from "../News/News";
import Company from "../company/Company";

export default function Home() {
    return (
        <div>
            <HomeSwiper />
            <Social />
            <Company />
            <News />
            <AboutUsOurDoctor />
            <HomeRating />
        </div>
    );
}
