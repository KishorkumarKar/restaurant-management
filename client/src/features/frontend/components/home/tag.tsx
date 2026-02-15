import React from "react";

const FrontendComponentHomeTag: React.FC = () => {
  return (
    <section className="max-w-11/12 mx-auto px-4 py-4">
      <div className="flex flex-wrap gap-2 text-sm">
        <span className="px-4 py-1 border rounded-full">Offers</span>
        <span className="px-4 py-1 border rounded-full">Under 30 min</span>
        <span className="px-4 py-1 border rounded-full">Pickup</span>
        <span className="px-4 py-1 border rounded-full">Top-rated</span>
        <span className="px-4 py-1 border rounded-full">Dietary</span>
        <span className="px-4 py-1 border rounded-full">Sort</span>
      </div>
    </section>
  );
};

export default FrontendComponentHomeTag;
