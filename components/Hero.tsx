export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Innovating the Future of
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Blockchain & AI
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We help organizations build better technology solutions for clinical trials, education, DeFi, and artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#products" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
              Explore Our Products
            </a>
            <a href="#services" className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all">
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
