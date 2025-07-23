import { MessageCircleCode, LogOut, Settings, User2 } from "lucide-react";
import React from "react";

function NavBar({ authUser }) {
  return (
    <div className="bg-gray-100 fixed top-0 left-0 w-full z-50 shadow-sm px-4 py-3">
      <div className="max-w-5xl mx-auto flex justify-between items-center">

        {/* Left section */}
        <div className="flex items-center space-x-2 text-black cursor-pointer">
          <MessageCircleCode className="w-7 h-7 text-blue-700" />
          <h2 className="text-xl font-bold tracking-tight font-sans">
            HackChat
          </h2>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-3">
          <button className="px-3 py-2 rounded-md bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium flex items-center space-x-1 transition cursor-pointer">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </button>

          {authUser && (
            <>
              <button className="px-3 py-2 rounded-md bg-gray-400 hover:bg-gray-300 text-gray-800 text-sm font-medium flex items-center space-x-1 transition cursor-pointer">
                <User2 className="w-4 h-4" />
                <span>Profile</span>
              </button>

              <button className="px-3 py-2 rounded-md bg-red-500 hover:bg-red-700 text-white text-sm font-medium flex items-center space-x-1 transition cursor-pointer">
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
