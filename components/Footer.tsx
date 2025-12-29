export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Echofex Inc.
            </h3>
            <p className="text-gray-400">
              Innovating the future of blockchain and AI technology.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#products" className="hover:text-white transition-colors">BetterTrails</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Academy Sites</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Smart Contracts</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">DeFi Solutions</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AI Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Consulting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Echofex Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
