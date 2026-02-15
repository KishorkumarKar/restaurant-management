import React from "react";
import styles from "./common.module.css";
import Link from "next/link";
const FrontendComponentHomePageHeader: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-11/12 mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="https://deliveroo.co.uk/restaurants/london/langdon-park?collection=pizza">
            <span className="text-2xl font-bold text-teal-600">deliveroo</span>
          </a>
          <span className="text-sm text-gray-600">
            Delivery · <strong>Langdon Park</strong>
          </span>
        </div>

        <div className="flex-1 max-w-[640px] mx-2 sm:mx-6">
          <input
            type="text"
            placeholder="Restaurants, groceries, dishes"
            className={`w-full px-4 py-2 rounded-full border focus:outline-none focus:ring ${styles.homeHeaderBorderColorSearch}`}
          />
        </div>
        <div className="flex items-center gap-4 text-sm">
          <ul className="flex items-center gap-4">
            <li className={`px-4 py-1 border rounded-sm ${styles.homeHeaderBorderColor}`}>
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
            <li className={`px-4 py-1 border rounded-sm ${styles.homeHeaderBorderColor}`}>
              {/* <button onClick={} className="text-gray-700">log in</button> */}
              <Link href={"/login"}>log in</Link>
            </li>
            <li className={`px-4 py-1 border rounded-sm ${styles.homeHeaderBorderColor}`}>
              <button className="font-medium">Account</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default FrontendComponentHomePageHeader;
