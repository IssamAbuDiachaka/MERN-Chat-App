import { Users } from 'lucide-react';
import React from 'react'
import ChartCard from '../components/ChartCard.jsx';

function HomePage() {
  return (
    <div className='w-full h-screen pt-15 h-screen border'>

      {/* sidebar area */}
      <div className='border w-[40%] relative bg-gray-200/25 h-screen p-10'>

        {/* sidebar header */}
        <div className='w-full border-b '>
          <div className='flex m-2'>
            <Users />
            <h2>Contacts</h2>
          </div>
          <div className='flex m-2 '>
            <label htmlFor="">
              <input type="checkbox" name='checkbox' value="" /> Online Contacts 
            </label>
          </div>
        </div>

        {/* slidebar Profilecard */}

           <ChartCard />

      </div>


      {/* main content area */}
      <div>

      </div>


      </div>
  )
}

export default HomePage