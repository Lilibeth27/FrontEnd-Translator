import React, { useState } from 'react';
import AuthPage from './pages/AuthPage';
import TranslatorPage from './pages/TranslatorPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authView, setAuthView] = useState('login');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return (
      <TranslatorPage 
        isSidebarOpen={isSidebarOpen} 
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
      />
    );
  }
  
  return (
    <AuthPage
      currentView={authView}
      onLoginSuccess={handleLoginSuccess}
      onGoToRegister={() => setAuthView('register')}
      onGoToLogin={() => setAuthView('login')}
      onGoToRecuperar={() => setAuthView('recuperar')}
    />
  );
}

export default App;
