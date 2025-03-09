import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 p-4 bg-black/50 backdrop-blur-md z-10">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse">
          SimuLab
        </h1>
      </header>

      {/* Contenido principal */}
      <main className="pt-20">
        {/* Aquí puedes agregar el resto del contenido de tu página */}
      </main>

      {/* Efecto de fondo futurista */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute w-64 h-64 bg-purple-500 rounded-full opacity-20 blur-3xl -top-32 -left-32 animate-float"></div>
        <div className="absolute w-64 h-64 bg-pink-500 rounded-full opacity-20 blur-3xl -bottom-32 -right-32 animate-float-delay"></div>
      </div>
    </div>
  );
}

export default App;