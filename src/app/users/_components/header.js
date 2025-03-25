import Link from 'next/link';
import { Search, Bell, LogOut } from 'lucide-react';

const Header = () => {
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

        {/* Right - Notifications, Profile, and Logout */}
        <div className="flex items-center space-x-4">
          {/* Notifications Icon */}
          <button className="text-white">
            <Bell size={24} />
          </button>

          {/* Profile Section */}
          <div className="flex items-center space-x-2">
            <img className="h-10 w-10 rounded-full" src="/default-avatar.png" alt="User Profile" />
           
          </div>

          {/* Logout Button */}
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
           <LogOut size={24}/>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
