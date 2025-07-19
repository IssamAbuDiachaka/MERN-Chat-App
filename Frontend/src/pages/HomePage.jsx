import { Users } from 'lucide-react';
import React from 'react';
import ChartCard from '../components/ChartCard.jsx';

function HomePage() {
  return (
    <div className='w-full h-screen pt-15 h-screen border overflow-hidden'>

      {/* sidebar section */}
      <aside className='border w-[40%] max-w-md bg-gray-200/25 h-screen h-full p-5 overflow-y-auto'>
      <div className='rounded border'>

        {/* sidebar header */}
        <div className='w-full border-b fix'>
          <div className='flex m-2'>
            <Users />
            <h2>Contacts</h2>
          </div>
          <div className='flex m-2'>
            <label htmlFor="">
              <input type="checkbox" name="checkbox" value="" /> Online 
            </label>
          </div>
        </div>

        {/* sidebar Profilecard */}
        <ChartCard />
        <ChartCard />
        <ChartCard />
        <ChartCard />
        <ChartCard />
        <ChartCard />
        <ChartCard />
        <ChartCard />
        <ChartCard />
        <ChartCard />
        <ChartCard />
        <ChartCard />
        <ChartCard />
        <ChartCard />
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
      </div>

    </div>
  );
}

export default HomePage;
