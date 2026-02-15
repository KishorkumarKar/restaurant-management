import React from "react";
import FrontendComponentHomeRestaurantGridCard from "./restaurant-grid-card";
import style from "./home.module.css"

const FrontendComponentHomeRestaurantScrollerGrid: React.FC = () => {
  return (
    <>
      <section className="max-w-11/12 mx-auto px-4 py-6 relative">
        <h2 className="text-xl font-semibold mb-4">Free delivery</h2>

        <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hidden md:block">
          ◀
        </button>

        <div
          id="freeDeliverySlider"
          className={`flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-10 py-2 ${style.homeRestaurantGrid}`}
        >
          <FrontendComponentHomeRestaurantGridCard width={`min-w-[260px]`} />
        </div>

        <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hidden md:block">
          ▶
        </button>
      </section>
    </>
  );
};

export default FrontendComponentHomeRestaurantScrollerGrid;
