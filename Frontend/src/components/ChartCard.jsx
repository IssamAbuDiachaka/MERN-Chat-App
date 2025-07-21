import React from 'react'

function ChartCard()  {
    return (
      <div className="flex items-center gap-4 p-2 shadow max-w-md w-full text-black">

        {/* Profile Image */}
        <div className="h-16 w-16 rounded-full overflow-hidden border-4 border-gray-300">
          <img
            src="image"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        {/* User Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            Tiisu Shariff
          </h2>
          <p className="text-sm text-green-600">● Online</p>
        </div>
      </div>

    )
  }
  

export default ChartCard