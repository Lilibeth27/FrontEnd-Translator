import React, { useState } from 'react';
import logo from '../../assets/logo.png';

const Registrar = ({ onGoToLogin }) => {
  const [usuario, setUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [mostrarContrasena, setMostrarContrasena] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    if (contrasena !== confirmarContrasena) {
      alert("Las contraseñas no coinciden");
      return;
    }
    alert("Registro exitoso simulado");
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
          <div className="-mt-[70px] w-3/5 max-w-[240px] h-[90px] flex justify-center items-center mb-1 z-10">
            <img src={logo} alt="Logo Traductor Runa Shimi" className="w-full h-full object-contain" />
          </div>
          
          <h1 className="text-[30px] font-bold text-secondary m-0 mb-2 text-center">Traductor Runa Shimi</h1>
          <p className="text-[18px] font-semibold text-secondary m-0 mb-3 text-center">Crea una cuenta para conectarte<br/>con tus raíces ancestrales</p>
          
          <form className="flex flex-col items-center gap-3 w-full box-border" onSubmit={handleRegister}>
            <div className="w-full max-w-[557px] h-[40px] bg-gray-50 rounded-full border-2 border-secondary flex items-center px-5 box-border">
              <div className="w-5 h-5 mr-3 flex items-center justify-center">
                <svg viewBox="0 0 448 512" fill="#5D4037" className="w-full h-full"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/></svg>
              </div>
              <input type="text" placeholder="Nombre de usuario" className="flex-1 border-none bg-transparent outline-none text-[16px] text-secondary font-semibold" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
            </div>
            
            <div className="w-full max-w-[557px] h-[40px] bg-gray-50 rounded-full border-2 border-secondary flex items-center px-5 box-border">
              <div className="w-5 h-5 mr-3 flex items-center justify-center">
                <svg viewBox="0 0 512 512" fill="#5D4037" className="w-full h-full"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
              </div>
              <input type="email" placeholder="Correo electrónico" className="flex-1 border-none bg-transparent outline-none text-[16px] text-secondary font-semibold" value={correo} onChange={(e) => setCorreo(e.target.value)} />
            </div>
            
            <div className="w-full max-w-[557px] h-[40px] bg-gray-50 rounded-full border-2 border-secondary flex items-center px-5 box-border">
              <div className="w-5 h-5 mr-3 flex items-center justify-center">
                <svg viewBox="0 0 448 512" fill="#5D4037" className="w-full h-full"><path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"/></svg>
              </div>
              <input type={mostrarContrasena ? "text" : "password"} placeholder="Contraseña" className="flex-1 border-none bg-transparent outline-none text-[16px] text-secondary font-semibold" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
              <div className="w-6 h-6 ml-3 flex items-center justify-center cursor-pointer" onClick={() => setMostrarContrasena(!mostrarContrasena)}>
                {mostrarContrasena ? (
                  <svg viewBox="0 0 640 512" fill="#5D4037" className="w-full h-full"><path d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346.39 397.39a144.13 144.13 0 0 1 -26.39 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0 -147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0 -2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0 -121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1 -1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"/></svg>
                ) : (
                  <svg viewBox="0 0 576 512" fill="#5D4037" className="w-full h-full"><path d="M288 144a110.94 110.94 0 0 0 -31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1 -56 56 55.4 55.4 0 0 1 -27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"/></svg>
                )}
              </div>
            </div>
            
            <div className="w-full max-w-[557px] h-[40px] bg-gray-50 rounded-full border-2 border-secondary flex items-center px-5 box-border">
              <div className="w-5 h-5 mr-3 flex items-center justify-center">
                <svg viewBox="0 0 448 512" fill="#5D4037" className="w-full h-full"><path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"/></svg>
              </div>
              <input type="password" placeholder="Confirmar contraseña" className="flex-1 border-none bg-transparent outline-none text-[16px] text-secondary font-semibold" value={confirmarContrasena} onChange={(e) => setConfirmarContrasena(e.target.value)} />
            </div>
            
            <p className="w-full max-w-[567px] text-[13px] text-secondary text-left m-1 mb-3 pl-2-5">Al registrarte, aceptas nuestros <span className="font-bold">Términos y Condiciones</span> y <span className="font-bold">Politicas de Privacidad.</span></p>
            
            <button type="submit" className="w-full max-w-[545px] h-[60px] bg-accent rounded-[27px] border-none text-[22px] font-bold text-white cursor-pointer mb-5">Crear Cuenta</button>
          </form>

          <p className="text-[15px] text-secondary m-0 text-center">
            ¿Ya tienes una cuenta? <span className="font-bold cursor-pointer text-black underline" onClick={onGoToLogin}>Inicia sesión</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registrar;
