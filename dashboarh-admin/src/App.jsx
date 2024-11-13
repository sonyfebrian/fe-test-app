import React from 'react';

import { Outlet } from "react-router-dom";
import Sidebar from './components/Sidebar';

function App() {

  return (
    <>

      <div className="flex min-h-screen bg-[#E7F5FD] font-roboto">
        <Sidebar />
        <div className="flex-1 ">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
