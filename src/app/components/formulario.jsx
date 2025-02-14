import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Agradecimiento from './agradecimiento'; // Importar el nuevo componente

export default function FormularioBroma() {
  const [mostrarAgradecimiento, setMostrarAgradecimiento] = useState(false);
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

  const handleSiClick = () => {
    setMostrarAgradecimiento(true);
  };

  const handleNoClick = () => {
    setMostrarConfirmacion(true);
  };

  return (
    <div className="space-y-4">
      {!mostrarConfirmacion ? (
        <div className="space-y-4">
          <p className="text-gray-700 text-sm font-bold mb-2">
            Al presionar SI, acepta todos los términos y condiciones sin derecho a posterior 
          </p>
          <div className="grid  grid-cols-2 gap-4">
            <button
              onClick={handleSiClick}
              className="bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-pink-400 transition-colors h-16"
            >
              Sí
            </button>
            <button
              onClick={handleNoClick}
              className="bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gray-700 transition-colors"
            >
              No
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-gray-700 text-sm font-bold mb-2">
            ¿Segura segurísima? Puede ser la última oportunidad...
          </p>
          <button
            onClick={handleSiClick}
            className="w-full bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-pink-700 transition-colors"
          >
            SÍ
          </button>
        </div>
      )}

      <AnimatePresence>
        {mostrarAgradecimiento && <Agradecimiento />}
      </AnimatePresence>
    </div>
  );
}