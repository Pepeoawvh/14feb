'use client'; // Necesario para usar useRouter

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation'; // Importar useRouter

export default function Agradecimiento() {
  const router = useRouter(); // Inicializar el enrutador

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="mt-4 p-6 bg-pink-100 border-l-4 border-pink-600 text-pink-700 rounded-lg space-y-4"
    >
      <h2 className="text-2xl font-bold">¡Muchas Gracias por todo!</h2>
      <p className="text-lg">
        Quiero agradecerte por todo el tiempo que hemos pasado juntos, por tu compañía, tu apoyo y tu amor constante y duradero.
      </p>
      <p className="text-lg">
        El tiempo junto a ti lo considero muy valioso, y quiero que sepas que reconozco todos los esfuerzos que has hecho para que nuestra relación sea tan especial.
      </p>
      <p className="text-lg">
        Eres lo mejor que me ha pasado, y estoy muy agradecido por tenerte en mi vida. 💖
      </p>
      <button
        onClick={() => router.push('/segunda')} // Redirigir a la ruta /segunda
        className="w-full bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-pink-700 transition-colors"
      >
        Siguiente
      </button>
    </motion.div>
  );
}