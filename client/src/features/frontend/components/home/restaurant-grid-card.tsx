import { HomeRestaurantGridCardCardType } from "../../type/home-type";
const FrontendComponentHomeRestaurantGridCard = ({
  width,
}: HomeRestaurantGridCardCardType) => {
  return (
    <>
      <div
        className={`bg-white rounded-lg shadow-sm p-3 ${width ? width : ""}`}
      >
        <div className="h-40 bg-gray-200 rounded mb-2" />
        <h3 className="font-medium">Wagamama</h3>
        <p className="text-sm text-gray-600">⭐ 4.6 · 30 min</p>
        <p className="text-xs text-red-600 mt-1">Spend £20, get 25% off</p>
      </div>
      <div
        className={`bg-white rounded-lg shadow-sm p-3 ${width ? width : ""}`}
      >
        <div className="h-40 bg-gray-200 rounded mb-2" />
        <h3 className="font-medium">Nando's</h3>
        <p className="text-sm text-gray-600">⭐ 4.5 · 25 min</p>
        <p className="text-xs text-red-600 mt-1">Spend £15, free delivery</p>
      </div>
      <div
        className={`bg-white rounded-lg shadow-sm p-3 ${width ? width : ""}`}
      >
        <div className="h-40 bg-gray-200 rounded mb-2" />
        <h3 className="font-medium">Pizza Pilgrims</h3>
        <p className="text-sm text-gray-600">⭐ 4.6 · 30 min</p>
        <p className="text-xs text-red-600 mt-1">Free delivery</p>
      </div>
      <div
        className={`bg-white rounded-lg shadow-sm p-3 ${width ? width : ""}`}
      >
        <div className="h-40 bg-gray-200 rounded mb-2" />
        <h3 className="font-medium">Pho</h3>
        <p className="text-sm text-gray-600">⭐ 4.7 · 35 min</p>
        <p className="text-xs text-red-600 mt-1">Spend £15, free delivery</p>
      </div>
      <div
        className={`bg-white rounded-lg shadow-sm p-3 ${width ? width : ""}`}
      >
        <div className="h-40 bg-gray-200 rounded mb-2" />
        <h3 className="font-medium">Pho</h3>
        <p className="text-sm text-gray-600">⭐ 4.7 · 35 min</p>
        <p className="text-xs text-red-600 mt-1">Spend £15, free delivery</p>
      </div>
      <div
        className={`bg-white rounded-lg shadow-sm p-3 ${width ? width : ""}`}
      >
        <div className="h-40 bg-gray-200 rounded mb-2" />
        <h3 className="font-medium">Pho</h3>
        <p className="text-sm text-gray-600">⭐ 4.7 · 35 min</p>
        <p className="text-xs text-red-600 mt-1">Spend £15, free delivery</p>
      </div>
      <div
        className={`bg-white rounded-lg shadow-sm p-3 ${width ? width : ""}`}
      >
        <div className="h-40 bg-gray-200 rounded mb-2" />
        <h3 className="font-medium">Pho</h3>
        <p className="text-sm text-gray-600">⭐ 4.7 · 35 min</p>
        <p className="text-xs text-red-600 mt-1">Spend £15, free delivery</p>
      </div>
      <div
        className={`bg-white rounded-lg shadow-sm p-3 ${width ? width : ""}`}
      >
        <div className="h-40 bg-gray-200 rounded mb-2" />
        <h3 className="font-medium">Pho</h3>
        <p className="text-sm text-gray-600">⭐ 4.7 · 35 min</p>
        <p className="text-xs text-red-600 mt-1">Spend £15, free delivery</p>
      </div>
    </>
  );
};

export default FrontendComponentHomeRestaurantGridCard;
