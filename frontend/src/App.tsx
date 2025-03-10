import React from 'react';
import './App.css';
import Header from './components/layout/Header'; 

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
 
      <Header />

      <main className="pt-20">
        <div className="relative w-full max-w-4xl mx-auto">
         
          <div className="flex justify-center items-center rounded-lg shadow-lg">
            {/* Imagen 1 */}
            <div className="relative z-10 rotate-[-7deg] transform bg-white p-3 rounded-xl transition-transform duration-200 hover:scale-125 hover:rotate-0 hover:z-50">
              <img
                src="https://picsum.photos/300"
                alt="Chart 1"
                className="w-[6rem] h-[6rem] md:w-auto md:h-auto rounded-lg"
              />
            </div>
            
            <div className="relative z-20 rotate-[9deg] transform bg-white rounded-xl p-3 transition-transform duration-200 hover:scale-125 -ml-5 hover:rotate-0 hover:z-50">
              <img
                src="https://picsum.photos/300"
                alt="Chart 2"
                className="w-[6rem] h-[6rem] md:w-auto md:h-auto rounded-lg"
              />
            </div>
            
            <div className="relative z-30 transform rotate-[-4deg] rounded-xl bg-white p-3 transition-transform duration-200 hover:scale-125 -ml-5 hover:rotate-0 hover:z-50">
              <img
                src="https://picsum.photos/300"
                alt="Chart 3"
                className="w-[6rem] h-[6rem] md:w-auto md:h-auto rounded-lg"
              />
            </div>
           
            <div className="relative z-20 transform rotate-[8deg] rounded-xl bg-white p-3 transition-transform duration-200 hover:scale-125 -ml-10 lg:block hidden hover:rotate-0 hover:z-50">
              <img
                src="https://picsum.photos/300"
                alt="Chart 4"
                className="w-20 h-20 md:w-auto md:h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="relative bg-none via-indigo-900 to-blue-900 p-8 rounded-3xl shadow-2xl overflow-hidden">
        {/* Efecto de luz futurista */}
        <div className="absolute inset-0 via-indigo-500/10 to-blue-500/10 animate-pulse"></div>

        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 pb-2 mb-4">
          Smarter Trading with AI-Driven Insights
          </h2>

          <p className="text-gray-300 text-lg mb-8">
          Upload your data to unlock powerful analytics and real-time recommendations designed to enhance your trading performance.
          </p>

          <label className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg cursor-pointer hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
            <input type="file" className="hidden" />
            <span>Upload file</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
            </svg>
          </label>

          <p className="text-sm text-gray-400 mt-4">
            Formatos soportados: .csv, .xlsx, .json, .txt
          </p>
        </div>

        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-white rounded-full absolute opacity-50"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `moveParticle ${Math.random() * 5 + 3}s infinite`,
              }}
            ></div>
          ))}
        </div>
      </div>
      </main>

      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute w-64 h-64 bg-purple-500 rounded-full opacity-20 blur-3xl -top-32 -right-32 animate-float"></div>
        <div className="absolute w-64 h-64 bg-pink-500 rounded-full opacity-20 blur-3xl -bottom-32 -left-32 animate-float-delay"></div>
      </div>
    </div>
  );
}

export default App;