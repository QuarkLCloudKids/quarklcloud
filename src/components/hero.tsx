"use client";

import { useState, useEffect, useRef } from "react";

const phrases = ["Inteligencia Artificial", "Desarrollador Web"];

export function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [opacity, setOpacity] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const currentPhraseIndexRef = useRef(0);
  const currentCharIndexRef = useRef(0);

  useEffect(() => {
    // Animación de entrada para el hero
    setIsVisible(true);
    
    let timeoutId: NodeJS.Timeout;

    const typeText = () => {
      if (currentCharIndexRef.current <= phrases[currentPhraseIndexRef.current].length) {
        setDisplayedText(phrases[currentPhraseIndexRef.current].slice(0, currentCharIndexRef.current));
        currentCharIndexRef.current++;
        timeoutId = setTimeout(typeText, 100);
      } else {
        // Cuando termine de escribir, esperar 2 segundos, hacer fade out
        timeoutId = setTimeout(() => {
          setOpacity(0);
          timeoutId = setTimeout(() => {
            // Cambiar a la siguiente frase
            currentPhraseIndexRef.current = (currentPhraseIndexRef.current + 1) % 2;
            currentCharIndexRef.current = 0;
            setDisplayedText("");
            setOpacity(1);
            // Empezar a escribir la nueva frase
            setTimeout(typeText, 100);
          }, 300);
        }, 2000);
      }
    };

    // Esperar un poco antes de empezar a escribir
    timeoutId = setTimeout(() => {
      typeText();
    }, 500);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section id="inicio" className={`min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 pt-32 sm:pt-20 transition-all duration-1000 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}>
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
        {/* Columna izquierda - Información */}
        <div className="space-y-6 sm:space-y-8 animate-fade-up text-center lg:text-left">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight transform transition-all duration-700 hover:scale-105">
              Hola, Somos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 animate-pulse">
                Quarkl Cloud
              </span>
            </h1>

            <div className="relative animate-fade-up-delay-200 flex justify-center lg:justify-start">
              <div
                className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-gray-900 bg-gradient-to-r from-gray-50 to-gray-100 px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 rounded-lg border border-gray-200 shadow-sm transition-opacity duration-300 inline-block whitespace-nowrap"
                style={{ opacity }}
              >
                {displayedText}
                <span className="animate-pulse text-blue-600">|</span>
              </div>
            </div>
          </div>

          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light tracking-wide transform transition-all duration-700 hover:translate-x-2 hover:text-gray-900">
            Quarkl Cloud es una empresa de desarrollo digital dedicada a crear páginas web, aplicaciones móviles y sistemas personalizados. Combinamos diseño, tecnología e innovación para ofrecer soluciones rápidas, seguras y accesibles. Nuestro objetivo es impulsar la presencia digital de cada cliente con proyectos modernos, funcionales y adaptados a sus necesidades.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-up-delay-400 justify-center lg:justify-start">
            <a 
              href="https://api.whatsapp.com/send/?phone=%2B573235213671&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-green-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full flex items-center justify-center gap-2 sm:gap-3 hover:bg-green-700 hover:scale-105 hover:rotate-1 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer text-sm sm:text-base"
            >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="group-hover:translate-y-1 transition-transform"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.018-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.721 2.006-1.417.248-.695.248-1.29.173-1.414-.075-.124-.272-.198-.57-.347m-3.033 5.25h-.062c-1.227 0-2.438-.353-3.472-1.018l-.248-.149-2.56.693.693-2.56-.148-.248c-.68-1.05-1.04-2.27-1.04-3.472 0-3.859 3.137-7 7-7s7 3.141 7 7-3.137 7-7 7z" />
            </svg>
            <span className="font-medium">Contratar</span>
          </a>
          </div>

          
        </div>

        {/* Columna derecha - Imagen */}
        <div className="flex justify-center lg:justify-end animate-fade-up-delay-600">
          <div className="group relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[32rem] lg:h-[32rem] xl:w-[36rem] xl:h-[36rem]">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300 border border-gray-100" />
            <div className="absolute inset-3 sm:inset-4 rounded-2xl overflow-hidden pointer-events-none">
              <img
                src="/qclogo.png"
                alt="Quarkl Cloud Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

