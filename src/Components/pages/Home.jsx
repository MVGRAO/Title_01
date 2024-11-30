import { useState } from 'react';
import Header from '../Header.jsx';
import Sidebar from '../Sidebar.jsx';
import DashboardGrid from './Dashboard.jsx';

const Home = () => {
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => setOpen(!open);

  return (
    <div className="flex h-screen">
      {/* Sidebar on the left */}
      <Sidebar open={open} toggleSidebar={toggleSidebar} />

      {/* Main content area */}
      <div className={`flex flex-col flex-1 ${open ? 'ml-72' : 'ml-16'} transition-all duration-500`}>
        {/* Header at the top of the main content area */}
        <Header />

        {/* Content area under the Header */}
        <main className="flex-1 p-4 bg-gray-100">
          {/* Introductory text */}
         <div className="bg-white w-72 ml-6 shadow-md rounded-lg p-4 relative flex flex-col items-start hover:cursor-pointer">
          <h2 className='text-sm'>Questions Arena</h2>
          <p className='text-xs'>Today Questions on respective Topics</p>

         </div>
          
          {/* DashboardGrid component */}
          <DashboardGrid />
        </main>
      </div>
    </div>
  );
};

export default Home;
