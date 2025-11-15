"use client";

import { useState, useEffect, useRef } from "react";

export function Trabajos() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const trabajos = [
    "/trabajos/Captura de pantalla 2025-10-29 143708.png",
    "/trabajos/Captura de pantalla 2025-10-29 144332.png",
    "/trabajos/Captura de pantalla 2025-10-29 144417.png",
    "/trabajos/Captura de pantalla 2025-10-29 144907.png",
    "/trabajos/Captura de pantalla 2025-10-29 150334.png",
  ];

  return (
    <section
      ref={sectionRef}
      id="trabajos"
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 bg-gray-50 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl w-full">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Trabajos</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Algunas capturas de proyectos y trabajos realizados
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {trabajos.map((src, index) => (
            <div
              key={index}
              className={`group bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-gray-900 transition-all duration-500 hover:-translate-y-2 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <img
                src={src}
                alt={`Trabajo ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}