import React from "react";

const FrontendComponentHomeSpecialOffer: React.FC = () => {
  return (
    <section className="max-w-11/12 mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-teal-600 text-white p-6 rounded-lg">
        <h3 className="text-lg font-semibold">Get 50% off</h3>
        <p className="text-sm mt-2">And 30 days free delivery</p>
      </div>
      <div className="bg-purple-600 text-white p-6 rounded-lg">
        <h3 className="text-lg font-semibold">Amazon Prime</h3>
        <p className="text-sm mt-2">Free Deliveroo Plus Silver</p>
      </div>
      <div className="bg-green-600 text-white p-6 rounded-lg">
        <h3 className="text-lg font-semibold">Feed the family</h3>
        <p className="text-sm mt-2">Balanced meals under £25</p>
      </div>
    </section>
  );
};

export default FrontendComponentHomeSpecialOffer;
