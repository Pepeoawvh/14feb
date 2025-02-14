"use client"; // Necesario para usar hooks y eventos

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Cancion() {
  const [mostrarError, setMostrarError] = useState(false);
  const [mostrarCancion, setMostrarCancion] = useState(false);
  const [mostrarContenido, setMostrarContenido] = useState(false);
  const router = useRouter();

  // Textos poéticos e imágenes
  const contenidoPoetico = [
    {
      texto:
        "Qué me importa el amor, lo que pedía era tu ser entero para mí en mi, en mi vida.",
      autor: "Idea Vilariño",
      imagen: "/images/poesia1.jpg", // Ruta a la imagen en public/images
    },
    {
      texto:
        "Este amoroso tormento que en mi corazón se ve, sé que lo siento y no sé la causa por qué lo siento..",
      autor: "Sor Juana Inés de la Cruz",
      imagen: "/images/poesia2.jpg",
    },
    {
      texto:
        "El amor es una palabra de cuatro letras, dos consonantes, dos vocales y dos idiotas.",
      autor: "Rodrigo Lira",
      imagen: "/images/poesia3.jpg",
    },
    {
      texto:
        "No es lo mismo estar solo que estar sin ti, conmigo, con lo que permanece de mí si tú me dejas.",
      autor: "Enrique Lihn",
      imagen: "/images/poesia4.jpg",
    },
    {
      texto:
        "El amor es un hijo de los seres, un pequeño invisible ser, que vive con la gente, pegado a ella, como el cuerpo de la gente, apegado a ella, como el dolor al alma.",
      autor: "Carlos Droguett",
      imagen: "/images/poesia5.jpg",
    },
    {
      texto:
        "El amor existía en nosotros, en nuestra casa, no podíamos verlo, pero lo escuchábamos siempre y siempre sabíamos que él estaba cerca, que junto a nosotros manaba su dulce fuente.",
      autor: "Carlos Droguett",
      imagen: "/images/poesia6.jpg",
    },
    {
      texto:
        "Deseo desde lo más profundo que sigamos acompañándonos como lo hemos hecho hasta ahora. A veces no es para nada fácil y ansiamos desistir; a veces lo es demasiado y sucumbimos a la comodidad, pero siempre lo es todo y nos envuelve sin darnos cuenta.",
        autor: "Un buen equipo",
      imagen: "/images/poesia7.jpg",
    },    {
      texto:
        "Huacas del sol y de la Luna, solo un grito de sal, pregunto acaso has vuelto a amar así, la estrella subita fugaz, calor de ti mujer, que no dijiste adios, queriendo compartir la eternidad.",
        autor: "Eduardo Gatti",
      imagen: "/images/poesia8.jpg",
    }
  ];

  // Función para manejar el clic en "Siguiente"
  const manejarSiguiente = () => {
    if (!mostrarCancion) {
      setMostrarError(true); // Mostrar error la primera vez
    } else {
      setMostrarContenido(true); // Mostrar contenido poético
      const audio = new Audio("/sounds/cancion.mp3"); // Reproducir canción
      audio.play();
    }
    setMostrarCancion(true); // Permitir que la siguiente acción muestre el contenido
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-2xl font-bold text-pink-700 mb-4">
          Un poco cursi... pero  
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Siempre esta canción me recuerda a ti.
        </p>

        {/* Botón de siguiente */}
        {!mostrarContenido && (
          <button
            onClick={manejarSiguiente}
            className="w-full bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-pink-700 transition-colors"
          >
            Siguiente
          </button>
        )}

        {/* Notificación de error */}
        <AnimatePresence>
          {mostrarError && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-4 p-4 bg-red-100 border-l-4 border-red-600 text-red-700 rounded-lg"
            >
              <p className="font-bold">Error:</p>
              <p>Era broma, no hay canción porque cringe.</p>
              <button
                onClick={() => setMostrarError(false)}
                className="mt-2 bg-red-600 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline hover:bg-red-700 transition-colors"
              >
                Cerrar
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contenido poético */}
        {mostrarContenido && (
          <div className="mt-6 space-y-6">
            {contenidoPoetico.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.5 }}
                className="p-4 bg-pink-100 border-l-4 border-pink-600 text-pink-700 rounded-lg"
              >
                <Image
                  src={item.imagen}
                  alt={`Imagen ${index + 1}`}
                  width={400}
                  height={300}
                  className="rounded-lg mb-4"
                />
                <p className="text-lg italic">"{item.texto}"</p>
                <p className="text-sm text-gray-600 mt-2">- {item.autor}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}