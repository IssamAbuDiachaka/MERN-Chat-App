import React from 'react'

function ChartCard()  {
    return (
      <div className='flex m-4'>
          <div className='border h-14 w-14 rounded-full'>
              {/* <img src={} alt="profile picture" /> */}
          </div>

          <div className='flex flex-col ml-2 justify-center'>
              <h2 className='text-xl font-semibold'>Name of User</h2>
              <p>Online Status</p>
          </div>
      </div>
    )
  }
  

export default ChartCard