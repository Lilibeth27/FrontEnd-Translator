import React from 'react';
import Login from '../components/auth/Login';
import Registrar from '../components/auth/Registrar';
import Recuperar from '../components/auth/Recuperar';

const AuthPage = ({ currentView, onLoginSuccess, onGoToRegister, onGoToLogin, onGoToRecuperar }) => {
  switch (currentView) {
    case 'register':
      return <Registrar onGoToLogin={onGoToLogin} />;
    case 'recuperar':
      return <Recuperar onGoToLogin={onGoToLogin} />;
    default:
      return (
        <Login 
          onLoginSuccess={onLoginSuccess}
          onGoToRegister={onGoToRegister}
          onGoToRecuperar={onGoToRecuperar}
        />
      );
  }
};

export default AuthPage;
