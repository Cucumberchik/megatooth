import React from "react";
import { HomeSwiper } from "./HomeSwiper";
import { AboutUsOurDoctor } from "./AboutUsOurDoctor";
import Main from "../Hero/main";
import { HomeRating } from "./HomeRating";
import Social from "../Social/Social";
import News from "../News/News";
import Doc from "../Doctor/Doc";

export default function Home() {
  return (
    <div>
      <HomeSwiper />
      <Main />
      <Doc />
      <Social />
      <News />
      <AboutUsOurDoctor />
      <HomeRating />
    </div>
  );
}
