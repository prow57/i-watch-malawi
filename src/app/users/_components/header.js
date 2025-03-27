import { useState } from 'react';
import Link from 'next/link';
import { Search, Bell } from 'lucide-react';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-black py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left - Logo */}
        <div className="flex items-center space-x-2">
          <p className="font-sans font-bold text-3xl text-gray-600">
            <span className="text-white">i</span>
            <span className="text-red-800">WATCH</span>
          </p>
        </div>

        {/* Center - Search Bar */}
        <div className="flex items-center bg-gray-800 rounded-full px-3 py-1 w-full max-w-md">
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent text-white outline-none w-full px-2"
          />
          <button className="text-white">
            <Search size={20} />
          </button>
        </div>

        {/* Right - Notifications & Profile */}
        <div className="flex items-center space-x-4">
          {/* Notifications Icon */}
          <button className="text-white">
            <Bell size={24} />
          </button>

          {/* Profile Section */}
          <div className="relative">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="focus:outline-none">
              <img className="h-10 w-10 rounded-full cursor-pointer" src="/default-avatar.png" alt="User Profile" />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden">
                <Link href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</Link>
                <Link href="/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Settings</Link>
                <button className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => alert('Signing Out...')}>
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
