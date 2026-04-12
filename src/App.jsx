import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import TranslatorPage from './pages/TranslatorPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authView, setAuthView] = useState('login');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAuthView('login');
  };

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <TranslatorPage 
          isSidebarOpen={isSidebarOpen} 
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          onLogout={handleLogout}
        />
      ) : (
        <AuthPage
          currentView={authView}
          onLoginSuccess={handleLoginSuccess}
          onGoToRegister={() => setAuthView('register')}
          onGoToLogin={() => setAuthView('login')}
          onGoToRecuperar={() => setAuthView('recuperar')}
        />
      )}
    </BrowserRouter>
  );
}

export default App;
