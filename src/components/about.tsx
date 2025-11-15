"use client";

import { useState, useEffect, useRef } from "react";

export function About() {
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

  return (
    <section
      ref={sectionRef}
      id="acerca"
      className={`min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Columna izquierda - Imagen */}
        <div className="flex justify-center lg:justify-start animate-fade-up">
          <div className="w-96 h-[32rem] lg:w-[30rem] lg:h-[40rem] overflow-hidden rounded-3xl shadow-2xl bg-white flex items-center justify-center">
            <img
              src="/qclogo.png"
              alt="Quarkl Cloud Logo"
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Columna derecha - Información */}
        <div className="space-y-8">
          <div className="transform transition-all duration-700 ease-out hover:scale-105" 
               style={{ 
                 animation: isVisible ? 'fadeUp 0.8s ease-out 0.3s forwards' : 'none',
                 opacity: 0 
               }}>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Acerca de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 animate-pulse">
                Nosotros
              </span>
            </h2>
          </div>

          <div className="transform transition-all duration-700 ease-out hover:translate-x-2" 
               style={{ 
                 animation: isVisible ? 'fadeUp 0.8s ease-out 0.4s forwards' : 'none',
                 opacity: 0 
               }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Quarkl Cloud
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Quarkl Cloud es una empresa de desarrollo digital dedicada a crear páginas web, aplicaciones móviles y sistemas personalizados. Combinamos diseño, tecnología e innovación para ofrecer soluciones rápidas, seguras y accesibles. Nuestro objetivo es impulsar la presencia digital de cada cliente con proyectos modernos, funcionales y adaptados a sus necesidades.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Contamos con un equipo de desarrollo especializado capaz de adaptarse a cualquier tipo de proyecto, utilizando las tecnologías más actuales y ajustándonos a las necesidades específicas de cada cliente.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nuestro compromiso es ofrecer resultados que impulsen el crecimiento digital de las marcas y optimicen sus procesos con soluciones eficientes y accesibles.
            </p>
          </div>

          <div className="transform transition-all duration-700 ease-out hover:translate-x-2" 
               style={{ 
                 animation: isVisible ? 'fadeUp 0.8s ease-out 0.5s forwards' : 'none',
                 opacity: 0 
               }}>
            <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-gray-900 rounded-full animate-pulse" /> Especialidades
            </h4>
            <div className="space-y-2 text-gray-600">
              <p className="hover:text-gray-900 transition-colors">Desarrollo Web y Aplicaciones Móviles</p>
              <p className="hover:text-gray-900 transition-colors">Sistemas de Gestión (CRM, ERP, Reservas, Turnos, Facturación, Inventarios)</p>
              <p className="hover:text-gray-900 transition-colors">Integraciones con Inteligencia Artificial y Automatización</p>
              <p className="hover:text-gray-900 transition-colors">Diseño UI/UX profesional</p>
              <p className="hover:text-gray-900 transition-colors">Hosting, Dominio y Soporte Técnico Integral</p>
            </div>
          </div>

          <div className="transform transition-all duration-700 ease-out hover:translate-x-2" 
               style={{ 
                 animation: isVisible ? 'fadeUp 0.8s ease-out 0.6s forwards' : 'none',
                 opacity: 0 
               }}>
            <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-gray-900 rounded-full animate-pulse" /> Nuestro Enfoque
            </h4>
            <div className="space-y-2 text-gray-600">
              <p className="hover:text-gray-900 transition-colors">Equipo especializado, metodologías modernas y adaptación total al proyecto.</p>
              <p className="hover:text-gray-900 transition-colors">Compromiso con resultados que impulsen el crecimiento digital y optimicen procesos.</p>
            </div>
          </div>

          <div className="transform transition-all duration-700 ease-out" 
               style={{ 
                 animation: isVisible ? 'fadeUp 0.8s ease-out 0.7s forwards' : 'none',
                 opacity: 0 
               }}>
            <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="inline-block w-1 h-6 bg-gray-900 rounded-full animate-pulse" /> Tecnologías
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Node.js",
                "Next.js",
                "TypeScript",
                "Python",
                "Django",
                "Laravel",
                "PHP",
                "MySQL",
                "PostgreSQL",
                "MongoDB",
                "Firebase",
                "Supabase",
                "Flutter",
                "Kotlin",
                "Git",
              ].map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-900 hover:text-white hover:scale-110 transition-all duration-300 transform hover:rotate-1"
                  style={{
                    animation: isVisible ? `fadeUp 0.5s ease-out ${0.8 + index * 0.05}s forwards` : 'none',
                    opacity: 0
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

