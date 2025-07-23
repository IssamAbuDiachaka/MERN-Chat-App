import { Users, Filter } from 'lucide-react';
import React from 'react';
import ChartCard from '../components/ChartCard.jsx';
import ChartArea from '../components/ChartArea.jsx';

function HomePage() {
  return (
    <div className="w-full h-screen pt-16 flex overflow-hidden text-black bg-gray-50">

      {/* Sidebar */}
      <aside className="w-[35%] max-w-md border-r h-full flex flex-col bg-white">

        {/* Header section*/}
        <div className="p-4 border-b">
          <div className="flex items-center space-x-2 mb-2">
            <Users className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold">Contacts</h2>
          </div>

          <label className="flex items-center space-x-2 text-sm text-gray-700">
            <input type="checkbox" className="accent-blue-600" />
            <span>Show Online Only</span>
          </label>
        </div>

        {/* Contacts List */}
        <div className="flex-1 overflow-y-auto p-2 space-y-2">
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

      {/* Chat Area */}
      <main className="flex-1 h-full bg-white">
        <ChartArea />
      </main>

    </div>
  );
}

export default HomePage;
