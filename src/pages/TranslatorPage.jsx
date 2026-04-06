import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import Traductor from '../components/translator/Traductor';

const TranslatorPage = ({ isSidebarOpen, onToggleSidebar }) => {
  return (
    <div className="flex h-screen w-screen bg-content">
      <Sidebar isOpen={isSidebarOpen} onToggle={onToggleSidebar} />
      <Traductor />
    </div>
  );
};

export default TranslatorPage;
