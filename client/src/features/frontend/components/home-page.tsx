"use client";
import { useState } from "react";
import FrontendComponentCommonFooter from "./common/footer";
import FrontendComponentHomePageHeader from "./common/home-page-header";
import FrontendComponentHomeCategory from "./home/category";
import FrontendComponentHomeRestaurantGrid from "./home/Restaurant-grid";
import FrontendComponentHomeRestaurantScrollerGrid from "./home/restaurant-scroller-grid";
import FrontendComponentHomeSpecialOffer from "./home/special-offer";
import FrontendComponentHomeTag from "./home/tag";

const FrontendComponentHomePage = () => {
  const [selectedTag, setSelectedTag] = useState("");
  return (
    <>
      {/* HEADER */}
      <FrontendComponentHomePageHeader />
      {/* CATEGORIES */}
      <FrontendComponentHomeCategory />
      {/* Tag */}
      <FrontendComponentHomeTag
        selectedTag={selectedTag}
        onTagClick={setSelectedTag}
      />
      {/* PROMO BANNERS */}
      <FrontendComponentHomeSpecialOffer />
      {/* RESTAURANT GRID */}
      <FrontendComponentHomeRestaurantScrollerGrid />
      <FrontendComponentHomeRestaurantGrid />
      {/* FOOTER */}
      <FrontendComponentCommonFooter />
    </>
  );
};

export default FrontendComponentHomePage;
