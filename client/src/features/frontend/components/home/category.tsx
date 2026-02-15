import React from "react";

const FrontendComponentHomeCategory: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="max-w-11/12 mx-auto px-4 py-4 flex gap-6 overflow-x-auto text-sm">
        <div className="text-center min-w-[70px]">
          🍔<p>Burgers</p>
        </div>
        <div className="text-center min-w-[70px]">
          🍕<p>Pizza</p>
        </div>
        <div className="text-center min-w-[70px]">
          🍛<p>Indian</p>
        </div>
        <div className="text-center min-w-[70px]">
          🍣<p>Sushi</p>
        </div>
        <div className="text-center min-w-[70px]">
          🥗<p>Healthy</p>
        </div>
        <div className="text-center min-w-[70px]">
          🍜<p>Chinese</p>
        </div>
        <div className="text-center min-w-[70px]">
          🌮<p>Mexican</p>
        </div>
      </div>
    </section>
  );
};

export default FrontendComponentHomeCategory;
