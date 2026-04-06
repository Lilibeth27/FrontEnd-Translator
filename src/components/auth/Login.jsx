import React, { useState } from 'react';
import logo from '../../assets/logo.png';

const Login = ({ onGoToRegister, onGoToRecuperar, onLoginSuccess }) => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mostrarContrasena, setMostrarContrasena] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (usuario === "admin" && contrasena === "1234") {
      alert("Inicio de sesión correcto");
      onLoginSuccess(); 
    } else {
      alert("Usuario o contraseña incorrectos");
    }
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
          
          <h1 className="text-[30px] font-bold text-secondary m-0 mb-2 text-center">Traductor Runa Shimi</h1>
          <p className="text-[18px] font-semibold text-secondary m-0 mb-3 text-center">Conecta con tus raíces ancestrales</p>

          <form className="flex flex-col items-center gap-3 w-full box-border" onSubmit={handleLogin}>
            
            <div className="w-full max-w-[567px] h-[60px] bg-gray-50 rounded-full border-2 border-secondary flex items-center px-5 box-border">
              <div className="w-5 h-5 mr-3 flex items-center justify-center">
                <svg viewBox="0 0 448 512" fill="#5D4037" className="w-full h-full">
                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/>
                </svg>
              </div>
              <input 
                type="text" 
                placeholder="Usuario" 
                className="flex-1 border-none bg-transparent outline-none text-[18px] text-secondary"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>

            <div className="w-full max-w-[567px] h-[60px] bg-gray-50 rounded-full border-2 border-secondary flex items-center px-5 box-border">
              <div className="w-5 h-5 mr-3 flex items-center justify-center">
                <svg viewBox="0 0 448 512" fill="#5D4037" className="w-full h-full">
                  <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"/>
                </svg>
              </div>
              <input 
                type={mostrarContrasena ? "text" : "password"} 
                placeholder="Contraseña" 
                className="flex-1 border-none bg-transparent outline-none text-[18px] text-secondary"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
              />
              
              <div 
                className="w-6 h-6 ml-3 flex items-center justify-center cursor-pointer"
                onClick={() => setMostrarContrasena(!mostrarContrasena)}
                title={mostrarContrasena ? "Ocultar contraseña" : "Mostrar contraseña"}
              >
                {mostrarContrasena ? (
                  <svg viewBox="0 0 640 512" fill="#5D4037" className="w-full h-full">
                    <path d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346.39 397.39a144.13 144.13 0 0 1 -26.39 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0 -147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0 -2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0 -121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1 -1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"/>
                  </svg>
                ) : (
                  <svg viewBox="0 0 576 512" fill="#5D4037" className="w-full h-full">
                    <path d="M288 144a110.94 110.94 0 0 0 -31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1 -56 56 55.4 55.4 0 0 1 -27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"/>
                  </svg>
                )}
              </div>
            </div>
            
            <div className="w-full max-w-[567px] flex justify-between items-center mt-1 mb-5">
              <label className="flex items-center gap-2-5 text-[16px] text-stone-600 cursor-pointer">
                <input type="checkbox" className="w-5 h-5" />
                Recordarme
              </label>
               <span 
                 onClick={onGoToRecuperar} 
                 className="text-[16px] text-stone-600 cursor-pointer"
               >
                 ¿Olvidaste tu contraseña?
               </span>
            </div>

            <button type="submit" className="w-full max-w-[567px] h-[60px] bg-accent rounded-[27px] border-none text-[22px] font-bold text-white cursor-pointer mb-6">
              Iniciar Sesión
            </button>
          </form>
          
          <p className="text-[16px] text-black m-0 text-center">
            ¿No tienes una cuenta? <span className="font-bold cursor-pointer" onClick={onGoToRegister}>Regístrate gratis Aquí</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;
