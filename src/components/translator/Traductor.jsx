import React, { useState } from 'react';
import { ArrowLeftRight, RefreshCw, Copy } from 'lucide-react';

const Traductor = () => {
  const [text, setText] = useState('');

  return (
    <div className="flex-1 bg-content p-10 flex flex-col items-center">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-stone-800 mb-2-5">Traductor De Runa Shimi 🌿</h1>
        <p>Conecta con las raíces ancestrales a través de la lengua Runa Shimi.</p>
      </header>

      <div className="bg-white w-full max-w-[800px] rounded-[30px] p-8 shadow-lg">
        <div className="flex justify-around items-center mb-8">
          <button className="bg-orange-900 text-white border-none py-3 px-9 rounded-xl font-bold text-lg">ESPAÑOL</button>
          <ArrowLeftRight className="text-stone-600" />
          <button className="bg-orange-900 text-white border-none py-3 px-9 rounded-xl font-bold text-lg">RUNA SHIMI</button>
        </div>

        <div className="grid grid-cols-2 gap-5 mb-5">
          <div className="relative">
            <textarea 
              className="w-full h-[200px] border border-gray-300 rounded-xl p-4 resize-none font-inherit text-base focus:outline-none focus:ring-2 focus:ring-orange-900/20"
              placeholder="Escribe aquí en español..."
              maxLength={300}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <span className="text-xs text-gray-500 mt-1 block">{text.length}/300</span>
          </div>

          <div className="relative">
            <textarea 
              className="w-full h-[200px] border border-gray-300 rounded-xl p-4 resize-none font-inherit text-base focus:outline-none focus:ring-2 focus:ring-orange-900/20"
              readOnly 
              placeholder="La traducción aparecerá aquí..."
            />
            <Copy className="absolute top-2-5 right-2-5 text-gray-500 cursor-pointer hover:text-gray-700" size={18} />
          </div>
        </div>

        <div className="flex justify-center">
          <button className="bg-green-700 text-white border-none py-3 px-8 rounded-xl text-xl font-bold flex items-center gap-2-5 cursor-pointer hover:bg-green-800 transition-colors">
            Traducir <RefreshCw size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Traductor;
