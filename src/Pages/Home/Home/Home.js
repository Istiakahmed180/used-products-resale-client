import React from "react";
import Banner from "../Banner/Banner";
import HomeCategories from "../HomeCategories/HomeCategories";
import OverviewMedia from "../OverviewMedia/OverviewMedia";
import FeaturedProducts from "../../FeaturedProducts/FeaturedProducts";
import Testimonials from "../../testimonials/testimonials";
import HowItWorks from "../HowItWorks/HowItWorks";
import SellYourLaptop from "../SellYourLaptop/SellYourLaptop";
import BlogSection from "../BlogSection/BlogSection";
import ContactInformation from "../ContactInformation/ContactInformation";
import TrustAndSecurity from "../TrustAndSecurity/TrustAndSecurity";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeCategories></HomeCategories>
      <FeaturedProducts></FeaturedProducts>
      <BlogSection></BlogSection>
      <OverviewMedia></OverviewMedia>
      <HowItWorks></HowItWorks>
      <SellYourLaptop></SellYourLaptop>
      <Testimonials></Testimonials>
      <TrustAndSecurity></TrustAndSecurity>
      <ContactInformation></ContactInformation>
    </div>
  );
};

export default Home;
