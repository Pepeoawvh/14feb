import { Inter } from 'next/font/google';
import './globals.css';

// Configurar las fuentes
const dancingScript = {
  family: 'Dancing Script',
  url: 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap',
};

const playfairDisplay = {
  family: 'Playfair Display',
  url: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap',
};

export const metadata = {
  title: 'Tarjeta de San Valentín',
  description: 'Una tarjeta especial para mi pareja',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Incluir las fuentes de Google Fonts */}
        <link rel="stylesheet" href={dancingScript.url} />
        <link rel="stylesheet" href={playfairDisplay.url} />
      </head>
      <body className={`font-sans`}>{children}</body>
    </html>
  );
}