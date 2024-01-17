import React from "react";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import YearProduct from "../../components/home/YearProduct/YearProduct";
import Categories from "../../components/home/Categories/Categories";
import Hero from "../../components/home/Hero/Hero";
 
const Home = () => {
  return (
    
    
        
    <div className="w-full mx-auto">
       <Hero /> 
      <div className="max-w-container mx-auto px-4">
       
      <Categories />
      <br />
        <BestSellers />
        <YearProduct />
        <SpecialOffers />
      </div>
    </div>
  );
};

export default Home;
