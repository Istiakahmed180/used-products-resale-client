import React from "react";
import Banner from "../Banner/Banner";
import HomeCategories from "../HomeCategories/HomeCategories";
import OverviewMedia from "../OverviewMedia/OverviewMedia";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeCategories></HomeCategories>
      <OverviewMedia></OverviewMedia>
    </div>
  );
};

export default Home;
