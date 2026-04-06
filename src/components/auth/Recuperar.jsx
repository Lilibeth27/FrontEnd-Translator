import React, { useState } from 'react';
import logo from '../../assets/logo.png';

const Recuperar = ({ onGoToLogin }) => {
  const [correo, setCorreo] = useState('');

  const handleRecuperar = (e) => {
    e.preventDefault();
    if (correo.trim() === '') {
      alert("Por favor, ingresa tu correo electrónico.");
      return;
    }
    alert(`Enlace de recuperación enviado a: ${correo}`);
  };

  return (
    <div className="w-full min-h-screen bg-canvas flex justify-center items-center p-5 overflow-x-hidden">
      <div className="w-full max-w-[600px] bg-card rounded-[27px] relative shadow-lg flex flex-col items-center pb-8">
        
        <div className="w-full relative overflow-hidden flex justify-center rounded-t-[27px]">
          <svg className="block w-full h-auto" viewBox="0 0 100 30" preserveAspectRatio="none">
            <path className="fill-primary" d="M0,10 C15,0 35,20 50,10 C65,0 85,20 100,10 V0 H0 Z" />
            <path className="fill-primary" d="M0,15 C10,10 20,20 30,15 C40,10 50,20 60,15 C70,10 80,20 90,15 C100,10 110,20 120,15 V0 H0 Z" opacity="0.6" />
          </svg>
        </div>

        <div className="w-full px-5 box-border flex flex-col items-center">
          <div className="-mt-8 w-3/5 max-w-[240px] h-[90px] flex justify-center items-center mb-1 z-10">
            <img 
              src={logo} 
              alt="Logo Traductor Runa Shimi" 
              className="w-full h-full object-contain" 
            />
          </div>

          <h1 className="text-[26px] font-bold text-secondary m-5 mb-2 text-center">Traductor Runa Shimi</h1>
          <p className="text-[18px] font-semibold text-secondary m-0 mb-2 text-center">Recupera tu acceso ancestral</p>
          
          <h2 className="text-[26px] font-bold text-secondary m-5 mb-2 text-center">¿Olvidaste tu contraseña?</h2>
          <p className="text-[18px] font-semibold text-secondary m-0 mb-2 text-center">
            Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
          </p>

          <form onSubmit={handleRecuperar} className="flex flex-col items-center gap-4 w-full max-w-[400px]">
            <input
              className="w-full h-[50px] rounded-full border-2 border-secondary px-5 box-border outline-none text-[16px]"
              type="email"
              placeholder="Ingresa tu correo electrónico"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />

            <button type="submit" className="w-full h-[50px] bg-accent text-white border-none rounded-full text-[18px] font-bold cursor-pointer mt-2 hover:bg-[#b56e52] transition-colors">
              Enviar enlace
            </button>
          </form>
        
          <button onClick={onGoToLogin} className="bg-transparent border-none text-secondary underline cursor-pointer mt-5 text-[16px]">
             Volver al Inicio de Sesión
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Recuperar;
