export default function Products() {
  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-xl text-gray-600">Innovative solutions that transform industries</p>
        </div>

        {/* BetterTrails */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">BetterTrails</h3>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Accelerating Clinical Trials. Empowering Hospitals.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              A secure, hospital-focused platform that simplifies clinical trial onboarding and helps doctors identify eligible patients. Making trials faster, more efficient, and more successful.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="text-xl font-semibold mb-2">Faster Onboarding</h4>
                <p className="text-blue-100">Reduce trial contract approval timelines from months to weeks with centralized dashboards and smart notifications.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="text-xl font-semibold mb-2">Smart Recruitment</h4>
                <p className="text-blue-100">Pre-screening support helps doctors identify eligible patients before appointments, improving recruitment success.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl mb-3">🔒</div>
                <h4 className="text-xl font-semibold mb-2">Security First</h4>
                <p className="text-blue-100">No patient data leaves hospital systems. HIPAA & PHIPA compliant with complete audit trails.</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <h4 className="text-2xl font-semibold mb-4">Key Benefits</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Centralized dashboard for all trial requests</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Real-time updates across teams</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Automated data entry support</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Recruitment visibility for CROs</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:shadow-lg transition-all">
                Book a Demo
              </a>
              <a href="https://bettertrials-org.vercel.app/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold border-2 border-white/50 hover:bg-white/30 transition-all">
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Academy Sites */}
        <div>
          <div className="bg-gradient-to-br from-purple-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">Academy Sites</h3>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Comprehensive Learning Ecosystems for Modern Education
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              Transform education with tailored, interactive learning experiences through guides, nano-courses, clickable demos, and videos. Designed for depth and engagement, simplifying complex concepts for platforms like blockchain, DeFi, and beyond.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl mb-3">📚</div>
                <h4 className="text-xl font-semibold mb-2">Comprehensive Guides</h4>
                <p className="text-purple-100">In-depth tutorials that offer thorough explanations on complex topics.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="text-xl font-semibold mb-2">Nano-Courses</h4>
                <p className="text-purple-100">5-10 minute bite-sized content for quick, essential learning.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl mb-3">🖱️</div>
                <h4 className="text-xl font-semibold mb-2">Clickable Demos</h4>
                <p className="text-purple-100">Interactive simulations providing hands-on experience.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl mb-3">📊</div>
                <h4 className="text-xl font-semibold mb-2">Progress Tracking</h4>
                <p className="text-purple-100">Monitor completed modules and plan future learning paths.</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <h4 className="text-2xl font-semibold mb-4">Why Choose Academy Sites?</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h5 className="font-semibold text-lg mb-2">Accelerated Learning</h5>
                  <p className="text-purple-100">Multi-format content accommodates different learning styles and speeds up comprehension.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-2">Hands-On Experience</h5>
                  <p className="text-purple-100">Interactive demos provide practical experience with real-world scenarios.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-2">White-Labeled Design</h5>
                  <p className="text-purple-100">Perfectly aligned with your brand identity, reinforcing trust and professionalism.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover:shadow-lg transition-all">
                Get Started
              </a>
              <a href="https://uniswap.university/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold border-2 border-white/50 hover:bg-white/30 transition-all">
                View Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
