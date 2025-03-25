const Footer = () => {
  return (
    <footer className="bg-black py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side */}
          <div className="flex items-center mb-4 md:mb-0">
            <p className="font-sans font-bold text-3xl text-gray-600">
              <span className="text-white">i</span>
              <span className="text-red-800">WATCH</span>
            </p>
          </div>

          {/* Right Side */}
          <div className="text-white">
            <span>© {new Date().getFullYear()} I-WATCH, Inc.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
