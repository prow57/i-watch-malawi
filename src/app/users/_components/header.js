// Header.js

const Header = () => {
  
    return (
      <header className="bg-black py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* iwatch logo */}
      
          <p className="font-sans font-bold text-3xl text-600 hidden md:block">
            <span className="text-white">i</span>
            <span className="text-red-800">WATCH</span>
          </p>
      

        {/* Navigation links */}
        <nav className="md:flex space-x-4 text-[10px] sm:text-sm md:text-lg">
          <a href="/landing" className="text-white hover:text-gray-300 transition duration-300">HOME</a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300">TRENDING</a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300">RECOMENDED</a>
        </nav>
        {/* User profile */}
        <div className="flex items-center text-[10px] sm:text-sm md:text-lg">
          <img className="h-10 w-10 rounded-full" src="#" alt="User Profile" />
          <Link className="link font-bold" href={`../admin/dashboard`}>
            <span className="text-white ml-2 hidden md:block">username</span>
          </Link>
        </div>
        

      {/* Logout Button */}
        <button className="bg-red-500 mt-4 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Logout
        </button>
     </div>
    </header>
    )
  }
  
  export default Header;
  