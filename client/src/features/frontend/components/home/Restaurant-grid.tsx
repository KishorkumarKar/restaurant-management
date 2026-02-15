import React from "react";
import FrontendComponentHomeRestaurantGridCard from "./restaurant-grid-card";

const FrontendComponentHomeRestaurantGrid: React.FC = () => {
  return (
    <>
      <section className="max-w-11/12 mx-auto px-4 py-6">
        <h2 className="text-xl font-semibold mb-4">Free delivery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Card */}
          <FrontendComponentHomeRestaurantGridCard />
        </div>
      </section>
      <section className="max-w-11/12 mx-auto px-4 py-6">
        <h2 className="text-xl font-semibold mb-4">Restaurant</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Card */}
          <FrontendComponentHomeRestaurantGridCard />
        </div>
      </section>
    </>
  );
};

export default FrontendComponentHomeRestaurantGrid;
