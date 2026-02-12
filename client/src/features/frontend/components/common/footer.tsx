const FrontendComponentCommonFooter = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-10">
      <div className="max-w-11/12 mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        <div>
          <h4 className="font-semibold text-white mb-3">Discover Deliveroo</h4>
          <ul className="space-y-2">
            <li>About us</li>
            <li>Careers</li>
            <li>Gift cards</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Legal</h4>
          <ul className="space-y-2">
            <li>Terms &amp; conditions</li>
            <li>Privacy</li>
            <li>Cookies</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Support</h4>
          <ul className="space-y-2">
            <li>Contact</li>
            <li>FAQs</li>
            <li>Restaurants</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Get the app</h4>
          <div className="space-y-2">
            <div className="bg-black text-white px-4 py-2 rounded">
              App Store
            </div>
            <div className="bg-black text-white px-4 py-2 rounded">
              Google Play
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 pb-4">
        © 2026 Deliveroo
      </div>
    </footer>
  );
};

export default FrontendComponentCommonFooter;
