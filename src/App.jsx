// Importamos React y hooks
import React, { useState } from 'react';

// Importamos el enrutador
import { BrowserRouter } from 'react-router-dom';

// Importamos las páginas principales
import AuthPage from './pages/AuthPage';
import TranslatorPage from './pages/TranslatorPage';

function App() {

  //  usuario logueado o no
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Estado: vista de autenticación (login, register, recuperar)
  const [authView, setAuthView] = useState('login');

  //  control del sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Función cuando el login es exitoso
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  // Función para cerrar sesión
  const handleLogout = () => {
    setIsLoggedIn(false);
    setAuthView('login');
  };

  return (
    <BrowserRouter>

      {/* Si está logueado → muestra el traductor */}
      {isLoggedIn ? (
        <TranslatorPage 
          isSidebarOpen={isSidebarOpen} 
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          onLogout={handleLogout}
        />

      ) : (
        /* Si NO está logueado → muestra autenticación */
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

// Exportamos el componente principal
export default App;