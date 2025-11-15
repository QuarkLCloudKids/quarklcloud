export default function ConnectProgressPage() {
  const nums = [1, 3, 5, 6, 7, 8, 9, 10, 11];
  const images = nums.map((n) => `/assets%20svg/CONNECT.zip%20-%20${n}.svg`);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">CONNECT — Avances</h1>
          <p className="text-gray-600 mt-2">Galería de arte y recursos SVG del proyecto.</p>
          <a href="/" className="inline-flex items-center gap-2 mt-4 text-gray-700 hover:text-black">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span className="text-sm font-semibold">Volver</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow hover:shadow-lg transition-all">
              <img src={src} alt={`CONNECT ${i + 1}`} className="w-full h-[320px] object-contain bg-gray-50" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}