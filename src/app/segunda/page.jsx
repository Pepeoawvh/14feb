'use client'; // Necesario para usar hooks y eventos

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Segunda() {
  const [mensajes, setMensajes] = useState([]);
  const [indiceMensaje, setIndiceMensaje] = useState(0);
  const router = useRouter(); // Inicializar el enrutador

  // Mensajes que se mostrarán uno por uno
  const mensajesLista = [
    "Me gusta haberte conocido",
    "Aunque aveces no nos soportemos",
    "Triunfarán siempre los mejores momentos",
    "Se irán sumando a los recuerdos que almacenamos",
    "Eres mi compañera de vida y mi mejor amiga.",
    "Te admiro mucho, por tus valores y entusiasmo en la vida.",
    "Gracias por ser quien eres.",
    "Gracias por tu paciencia y cariño."
  ];

  // Función para mostrar el siguiente mensaje
  const mostrarSiguienteMensaje = () => {
    if (indiceMensaje < mensajesLista.length) {

        const audio = new Audio('/sounds/click.mp3'); // Asegúrate de tener un archivo de sonido en public/sounds
        audio.play();

      setMensajes((prev) => [...prev, mensajesLista[indiceMensaje]]);
      setIndiceMensaje((prev) => prev + 1);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-pink-50 p-4 cursor-pointer"
      onClick={mostrarSiguienteMensaje} // Mostrar mensaje al hacer clic
    >
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-2xl font-bold text-pink-600 mb-4">Espero te guste este pequeño gesto</h1>
        <div className="space-y-4">
          {mensajes.map((mensaje, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-4 bg-pink-100 border-l-4 border-pink-600 text-pink-700 rounded-lg"
            >
              <p>{mensaje}</p>
            </motion.div>
          ))}
        </div>
        {indiceMensaje < mensajesLista.length && (
          <div className="flex flex-col items-center mt-4">
            <p className="text-sm text-gray-500">Presiona para continuar...</p>
            <motion.div
              animate={{ y: [0, -10, 0] }} // Animación de subir y bajar
              transition={{ repeat: Infinity, duration: 1 }} // Repetir infinitamente
              className="text-2xl"
            >
              👆
            </motion.div>
          </div>
        )}
        {/* Botón "Siguiente" para ir a la ruta "cancion" */}
        {indiceMensaje >= mensajesLista.length && (
          <button
            onClick={() => router.push('/cancion')} // Redirigir a la ruta "cancion"
            className="mt-4 w-full bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-pink-700 transition-colors"
          >
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
}