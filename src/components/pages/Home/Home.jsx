import React from "react";
import { HomeSwiper } from "./HomeSwiper";
import { AboutUsOurDoctor } from "./AboutUsOurDoctor";
import Main from "../Hero/main";

export default function Home() {
    return (
        <div>
            <HomeSwiper />
            <Main />
            <AboutUsOurDoctor />
        </div>
    );
}
