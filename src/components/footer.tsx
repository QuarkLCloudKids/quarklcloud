export function Footer() {
  return (
    <footer className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Columna 1 - Información */}
          <div className="text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Quarkl Cloud
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Empresa de desarrollo digital: web, móvil y software a medida.
              Creamos soluciones modernas, seguras y accesibles.
            </p>
          </div>

          {/* Columna 2 - Enlaces rápidos */}
          <div className="text-center sm:text-left">
            <h4 className="text-xs font-semibold text-gray-500 mb-4 sm:mb-5 tracking-widest uppercase">
              Enlaces rápidos
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#inicio"
                  className="text-gray-400 hover:text-white transition-colors text-sm duration-200"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#proyectos"
                  className="text-gray-400 hover:text-white transition-colors text-sm duration-200"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-gray-400 hover:text-white transition-colors text-sm duration-200"
                >
                  Servicios
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Divider */}
        <div className="border-t border-gray-900 pt-6 sm:pt-8">
          <p className="text-gray-500 text-center text-xs sm:text-sm">
            © {new Date().getFullYear()} Quarkl Cloud. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}



