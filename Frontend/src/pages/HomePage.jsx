import { Users } from 'lucide-react';
import React from 'react';
import ChartCard from '../components/ChartCard.jsx';
import ChartArea from '../components/ChartArea.jsx';

function HomePage() {
  return (
    <div className='w-full h-screen pt-15 h-screen border overflow-hidden flex'>

      {/* sidebar section */}
      <aside className='border w-[40%] max-w-md bg-gray-200/25 h-screen h-full p-5 flex flex-col'>

        {/* head section */}
        <div className='border shadow'>
          <div className='flex m-2 space-x-2'>
            <Users />
            <h2>Contacts</h2>
          </div>
          <div className='flex m-2'>
            <label htmlFor="">
              <input type="checkbox" name="checkbox" value="" /> View Online only 
            </label>
          </div>
        </div>

        {/* sidebar Profilecard */}
        <div className='overflow-y-auto border'>
          <ChartCard />
          <ChartCard />
          <ChartCard />
          <ChartCard />
          <ChartCard />
          <ChartCard />
          <ChartCard />
  
        </div>
      </aside>



      {/* main content area */}
      <div>
        {/* Main content goes here */}
        <ChartArea />
      </div>

    </div>
  );
}

export default HomePage;
