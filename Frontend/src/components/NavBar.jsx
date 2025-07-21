import { MessageCircleCodeIcon, Settings } from "lucide-react";
import React from "react";

function NavBar({ authUser }) {
  return (
    <div className="w-full border-b border bg-gray-200/25 fixed top-0 left-0 w-full z-50 shadow px-4 py-3">
      <div className="max-w-5xl mx-auto flex justify-between">

        {/** Left container  */}
        <div className="flex items-center space-x-2 text-black">
            <MessageCircleCodeIcon className="w-8 h-8" />
            <h2 className="text-2xl font-semibold tracking-tight font-sans">HackChat</h2>
        </div>

        
        {/** Right container  */}
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium font-poppins flex items-center space-x-2 transition cursor-pointer">
             <Settings className="size-5" />
            <span>Settings</span>
          </button>


          {authUser && (
            <div className="space-x-2">
              <button className="px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium font-poppins flex items-center space-x-2 transition cursor-pointer">
                Profile
              </button>
              <button className="px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium font-poppins flex items-center space-x-2 transition cursor-pointer">
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;