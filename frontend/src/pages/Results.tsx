import React from 'react';
import Header from '@/components/layout/Header'; 

function Results() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
 
      <Header />

      <main className="pt-20">

      </main>

      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute w-64 h-64 bg-purple-500 rounded-full opacity-20 blur-3xl -top-32 -right-32 animate-float"></div>
        <div className="absolute w-64 h-64 bg-pink-500 rounded-full opacity-20 blur-3xl -bottom-32 -left-32 animate-float-delay"></div>
      </div>
    </div>
  );
}

export default Results;