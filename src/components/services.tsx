"use client";

import { useState, useEffect, useRef } from "react";

export function Services() {
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

  const services = [
    {
      id: 1,
      title: "Desarrollo Web",
      description: "Creación de aplicaciones web modernas y responsivas con las últimas tecnologías",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20V10" />
          <path d="M18 20V12" />
          <path d="M6 20V8" />
          <path d="M3 4h18v4H3z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Inteligencia Artificial",
      description: "Desarrollo de modelos de IA y machine learning para soluciones innovadoras",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <path d="M3.27 6.96L12 12.01l8.73-5.05" />
          <path d="M12 22.08V12" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Full Stack",
      description: "Soluciones completas desde el backend hasta el frontend, optimizadas y escalables",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 3H2v4h6V3z" />
          <path d="M22 3h-6v4h6V3z" />
          <path d="M8 13H2v4h6v-4z" />
          <path d="M22 13h-6v4h6v-4z" />
          <path d="M12 17v4" />
          <path d="M16 7v4" />
          <path d="M12 1V3" />
          <path d="M16 11v2" />
        </svg>
      ),
    },
  ];
  
  // Servicios adicionales solicitados
  services.push(
    {
      id: 4,
      title: "Desarrollo de apps para Android y iOS",
      description: "Aplicaciones móviles nativas e híbridas, publicación y soporte continuo.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <line x1="11" y1="19" x2="13" y2="19" />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Construcción de proyectos Multiplataforma",
      description: "Un solo código cuando conviene: web, móvil y escritorio.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="14" height="14" rx="2" />
          <rect x="7" y="8" width="14" height="14" rx="2" />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Mods para Minecraft Java y Bedrock",
      description: "Creación y adaptación de mods para ambas ediciones.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2l9 5-9 5-9-5 9-5z" />
          <path d="M3 7v10l9 5 9-5V7" />
        </svg>
      ),
    },
    {
      id: 7,
      title: "Plugins para Java",
      description: "Desarrollo de plugins a medida, integraciones y extensiones.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 7v4" />
          <path d="M10 7v4" />
          <path d="M2 11h20" />
          <path d="M7 15h10" />
        </svg>
      ),
    },
    {
      id: 8,
      title: "Software de escritorio",
      description: "Aplicaciones de escritorio eficientes y confiables para Windows, macOS y Linux.",
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M8 20h8" />
          <path d="M12 16v4" />
        </svg>
      ),
    }
  );

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 bg-gray-50 transition-all duration-1000 relative overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Animación de fondo flotante */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-32 bg-gray-900/20 rounded-full animate-float" style={{ animationDelay: "0s", animationDuration: "3s" }} />
        <div className="absolute top-40 right-20 w-1 h-24 bg-gray-900/20 rounded-full animate-float" style={{ animationDelay: "1s", animationDuration: "4s" }} />
        <div className="absolute bottom-40 left-1/4 w-2 h-40 bg-gray-900/20 rounded-full animate-float" style={{ animationDelay: "2s", animationDuration: "3.5s" }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-20 bg-gray-900/20 rounded-full animate-float" style={{ animationDelay: "0.5s", animationDuration: "4.5s" }} />
        <div className="absolute bottom-20 right-1/4 w-2 h-28 bg-gray-900/20 rounded-full animate-float" style={{ animationDelay: "1.5s", animationDuration: "3s" }} />
        <div className="absolute top-1/2 left-1/3 w-1 h-36 bg-gray-900/20 rounded-full animate-float" style={{ animationDelay: "2.5s", animationDuration: "4s" }} />
        <div className="absolute bottom-1/3 right-10 w-2 h-32 bg-gray-900/20 rounded-full animate-float" style={{ animationDelay: "0.8s", animationDuration: "3.5s" }} />
        <div className="absolute top-20 right-1/2 w-1 h-24 bg-gray-900/20 rounded-full animate-float" style={{ animationDelay: "1.8s", animationDuration: "4s" }} />
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">Servicios</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Lo que puedo hacer por ti
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl hover:border-gray-900 transition-all duration-500 hover:-translate-y-3 transform overflow-hidden ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-900/5 to-transparent rounded-full blur-2xl group-hover:from-gray-900/10 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg mx-auto md:mx-0">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-black transition-colors text-center md:text-left">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm text-center md:text-left">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}

