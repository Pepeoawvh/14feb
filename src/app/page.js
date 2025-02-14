'use client'
import FormularioBroma from './components/formulario';
import { montserrat, quicksand, } from './ui/fonts';

export default function Home() {
  return (
    <div className={`${quicksand.modules} min-h-screen flex flex-col items-center justify-center bg-pink-50 p-4 font-quick`}>
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-2xl font-bold text-pink-700 mb-4">Feliz día del Amor y la Amistad Cristina</h1>
        <p className="text-gray-700 text-lg mb-4">
        ¿Estás preparada para lo que verás a continuación?
        </p>
        <FormularioBroma />
      </div>
    </div>
  );
}