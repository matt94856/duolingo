import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-[#fff]">
      {/* Sidebar */}
      <div className="w-[240px] bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4">
          <img src="/logo.svg" alt="LingoBites" className="h-8" />
        </div>
        
        <nav className="flex-1">
          <Link to="/" className="flex items-center px-4 py-3 text-gray-700 hover:bg-[#f7f7f7] bg-[#e5e5e5]">
            <div className="w-8 h-8 mr-3 flex items-center justify-center">
              <svg className="w-6 h-6" fill="#1CB0F6" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
            </div>
            <span className="font-bold">LEARN</span>
          </Link>

          <Link to="/leaderboards" className="flex items-center px-4 py-3 text-gray-700 hover:bg-[#f7f7f7]">
            <div className="w-8 h-8 mr-3 flex items-center justify-center">
              <svg className="w-6 h-6" fill="#FFC800" viewBox="0 0 24 24">
                <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2z" />
              </svg>
            </div>
            <span>LEADERBOARDS</span>
          </Link>

          <Link to="/quests" className="flex items-center px-4 py-3 text-gray-700 hover:bg-[#f7f7f7]">
            <div className="w-8 h-8 mr-3 flex items-center justify-center">
              <svg className="w-6 h-6" fill="#CE82FF" viewBox="0 0 24 24">
                <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14z"/>
                <path d="M9.5 15.5L11 17l3-4 3 4h-13z"/>
              </svg>
            </div>
            <span>QUESTS</span>
          </Link>

          <Link to="/shop" className="flex items-center px-4 py-3 text-gray-700 hover:bg-[#f7f7f7]">
            <div className="w-8 h-8 mr-3 flex items-center justify-center">
              <svg className="w-6 h-6" fill="#FF9600" viewBox="0 0 24 24">
                <path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
              </svg>
            </div>
            <span>SHOP</span>
          </Link>

          <Link to="/profile" className="flex items-center px-4 py-3 text-gray-700 hover:bg-[#f7f7f7]">
            <div className="w-8 h-8 mr-3 flex items-center justify-center">
              <svg className="w-6 h-6" fill="#FF4B4B" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <span>PROFILE</span>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="h-14 border-b border-gray-200 flex items-center justify-between px-4">
          <div className="flex items-center">
            <button className="mr-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            <div>
              <h1 className="text-lg font-bold">SECTION 1, UNIT 1</h1>
              <p className="text-sm text-gray-600">Form basic sentences</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-[#58CC02] text-white rounded-xl font-bold hover:bg-[#46a001]">
            GUIDEBOOK
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-[#fff] p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout; 
