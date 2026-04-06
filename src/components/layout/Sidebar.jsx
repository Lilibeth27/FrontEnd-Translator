import React from 'react';
import { Languages, History, Search, BookOpen, Info, LogOut, Menu } from 'lucide-react';
import logo from '../../assets/logo.png';

const Sidebar = ({ isOpen, onToggle }) => {
  const menuItems = [
    { icon: <Languages size={20} />, text: 'Traductor', active: true },
    { icon: <History size={20} />, text: 'Historial' },
    { icon: <Search size={20} />, text: 'Frases Comunes' },
    { icon: <BookOpen size={20} />, text: 'Diccionario' },
    { icon: <Info size={20} />, text: 'Acerca de Runa Shimi' },
  ];

  return (
    <div className={`flex flex-col h-screen bg-canvas fixed left-0 top-0 box-border overflow-hidden transition-all duration-300 ${isOpen ? 'w-[250px] p-5' : 'w-[60px] p-3.75 items-center'}`}>
      <div className="flex items-center gap-2-5 mb-5">
        <Menu className="cursor-pointer text-secondary min-w-6 hover:text-orange-900" onClick={onToggle} />
        {isOpen && (
          <div className="flex items-center">
            <img src={logo} alt="Runa Logo" className="w-[50px] h-auto" />
            <span className="font-bold text-secondary ml-2">RUNA SHIMI</span>
          </div>
        )}
      </div>

      {isOpen && (
        <>
          <div className="flex justify-center my-5">
            <div className="w-[100px] h-[100px] rounded-full border-3 border-stone-700 overflow-hidden">
              <img src="https://via.placeholder.com/80" alt="Avatar" className="w-full h-full object-cover" />
            </div>
          </div>

          <nav className="flex flex-col gap-1">
            <p className="text-[12px] font-extrabold mb-3 text-stone-900">MENU DE NAVEGACION</p>
            {menuItems.map((item, index) => (
              <div key={index} className={`flex items-center gap-3-75 p-2-5 cursor-pointer font-semibold text-secondary ${item.active ? 'bg-stone-800/5 rounded-lg' : ''}`}>
                <span className="text-orange-900">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </nav>

          <div className="mt-auto">
            <div className="flex items-center gap-3-75 p-2-5 cursor-pointer font-semibold text-secondary">
              <LogOut size={20} className="text-orange-900" />
              <span>Cerrar Sesión</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
