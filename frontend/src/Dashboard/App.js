import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Sidebar from './Sidebar';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const openSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  }

  return (
    <div className='grid-container'>
      <Header openSidebar={openSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} openSidebar={openSidebar}/>
      <Home/>

    </div>
  );
}

export default App;
