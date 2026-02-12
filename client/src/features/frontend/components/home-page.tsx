import FrontendComponentCommonFooter from "./common/footer";

const FrontendComponentHomePage = () => {
  return (
    <>
      {/* HEADER */}
      <header className="bg-white shadow-sm">
        <div className="max-w-11/12 mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="https://deliveroo.co.uk/restaurants/london/langdon-park?collection=pizza">
              <span className="text-2xl font-bold text-teal-600">
                deliveroo
              </span>
            </a>
            <span className="text-sm text-gray-600">
              Delivery · <strong>Langdon Park</strong>
            </span>
          </div>
          
          <div className="flex-1 max-w-[640px] mx-2 sm:mx-6">
            <input
              type="text"
              placeholder="Restaurants, groceries, dishes"
              className="w-full px-4 py-2 rounded-full border focus:outline-none focus:ring"
            />
          </div>
          <div className="flex items-center gap-4 text-sm">
            <ul className="flex items-center gap-4">
              <li>
                <button
                  className="ccl-bbef35694fb123d4 ccl-a11aec6d8a1cbb76"
                  type="button"
                  aria-label="Basket"
                >
                  <span className="ccl-79710b54c81806b7">
                    <span className="ccl-7c70b5273af79fe5">
                      <svg
                        height={24}
                        width={24}
                        viewBox="0 0 24 24"
                        role="presentation"
                        focusable="false"
                        className="ccl-2608038983f5b413 ccl-ab78be2f3c0b8a03"
                      >
                        <path d="M14 15V13H10V15H14ZM15 15H19.1872L19.7172 13H15V15ZM14 12V10H15V12H19.9822L20.5122 10H3.48783L4.01783 12H9V10H10V12H14ZM14 18V16H10V18H14ZM15 18H18.3922L18.9222 16H15V18ZM9 15V13H4.28283L4.81283 15H9ZM9 18V16H5.07783L5.60783 18H9ZM7 8V3H17V8H23L20 20H4L1 8H7ZM9 8H15V5H9V8Z"></path>
                      </svg>
                    </span>
                  </span>
                </button>
              </li>
              <li>
                <button className="text-gray-700">Sign up or log in</button>
              </li>
              <li>
                <button className="font-medium">Account</button>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/* CATEGORIES */}
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
      {/* FILTERS */}
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
      {/* PROMO BANNERS */}
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
      {/* RESTAURANT GRID */}
      <section className="max-w-11/12 mx-auto px-4 py-6">
        <h2 className="text-xl font-semibold mb-4">Popular brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Card */}
          <div className="bg-white rounded-lg shadow-sm p-3">
            <div className="h-24 bg-gray-200 rounded mb-2" />
            <h3 className="font-medium">Wagamama</h3>
            <p className="text-sm text-gray-600">⭐ 4.6 · 30 min</p>
            <p className="text-xs text-red-600 mt-1">Spend £20, get 25% off</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-3">
            <div className="h-24 bg-gray-200 rounded mb-2" />
            <h3 className="font-medium">Nando's</h3>
            <p className="text-sm text-gray-600">⭐ 4.5 · 25 min</p>
            <p className="text-xs text-red-600 mt-1">
              Spend £15, free delivery
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-3">
            <div className="h-24 bg-gray-200 rounded mb-2" />
            <h3 className="font-medium">Pizza Pilgrims</h3>
            <p className="text-sm text-gray-600">⭐ 4.6 · 30 min</p>
            <p className="text-xs text-red-600 mt-1">Free delivery</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-3">
            <div className="h-24 bg-gray-200 rounded mb-2" />
            <h3 className="font-medium">Pho</h3>
            <p className="text-sm text-gray-600">⭐ 4.7 · 35 min</p>
            <p className="text-xs text-red-600 mt-1">
              Spend £15, free delivery
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-11/12 mx-auto px-4 py-6">
        <h2 className="text-xl font-semibold mb-4">Restaurant</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Card */}
          <div className="bg-white rounded-lg shadow-sm p-3">
            <div className="h-40 bg-gray-200 rounded mb-2" />
            <h3 className="font-medium">Wagamama</h3>
            <p className="text-sm text-gray-600">⭐ 4.6 · 30 min</p>
            <p className="text-xs text-red-600 mt-1">Spend £20, get 25% off</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-3">
            <div className="h-40 bg-gray-200 rounded mb-2" />
            <h3 className="font-medium">Nando's</h3>
            <p className="text-sm text-gray-600">⭐ 4.5 · 25 min</p>
            <p className="text-xs text-red-600 mt-1">
              Spend £15, free delivery
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-3">
            <div className="h-40 bg-gray-200 rounded mb-2" />
            <h3 className="font-medium">Pizza Pilgrims</h3>
            <p className="text-sm text-gray-600">⭐ 4.6 · 30 min</p>
            <p className="text-xs text-red-600 mt-1">Free delivery</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-3">
            <div className="h-40 bg-gray-200 rounded mb-2" />
            <h3 className="font-medium">Pho</h3>
            <p className="text-sm text-gray-600">⭐ 4.7 · 35 min</p>
            <p className="text-xs text-red-600 mt-1">
              Spend £15, free delivery
            </p>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <FrontendComponentCommonFooter/>
    </>
  );
};

export default FrontendComponentHomePage;
