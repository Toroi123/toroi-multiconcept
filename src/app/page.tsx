import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      
      {/* 1. PREMIUM HERO SECTION */}
      <section className="w-full py-24 lg:py-32 bg-toroi-purple text-white flex flex-col items-center text-center px-6 relative overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-gradient-to-br from-toroi-pink/20 to-toroi-gold/10 blur-3xl rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Empowering Connectivity & <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-toroi-gold to-toroi-pink">
              Digital Identity
            </span> Across Nigeria
          </h1>
          
          <p className="text-lg md:text-xl text-toroi-lightGold mb-10 font-medium tracking-wide">
            SIM Registration | NIN Enrollment | Device Supply | Agent Partnership
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <Link href="/agent" className="px-8 py-4 bg-toroi-gold text-toroi-purple rounded-full font-extrabold hover:bg-yellow-300 transition-all shadow-[0_0_15px_rgba(251,191,36,0.5)]">
              ✔ Become an Agent
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-transparent border-2 border-toroi-pink text-white rounded-full font-bold hover:bg-toroi-pink transition-all shadow-[0_0_15px_rgba(232,28,255,0.3)]">
              ✔ Locate a Center
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white text-toroi-purple rounded-full font-bold hover:bg-gray-100 transition-all">
              ✔ Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* 2. WELCOME SECTION */}
      <section className="w-full py-20 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-toroi-purple mb-6">Welcome to TOROI MULTICONCEPT LTD</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            TOROI MULTICONCEPT LTD is a structured telecommunication solutions company committed to expanding access to SIM registration, NIN enrollment, device distribution, and digital identity services across Nigeria. We operate with compliance, integrity, and operational excellence — providing individuals, organizations, and agents with reliable telecom solutions and sustainable business opportunities.
          </p>
        </div>
      </section>

      {/* 3. OUR CORE SERVICES */}
      <section className="w-full py-20 bg-toroi-purple/5 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-toroi-purple text-center mb-12">Our Core Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-toroi-pink hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-bold text-toroi-purple mb-4">1. NIN Enrollment</h3>
              <p className="text-gray-600 mb-4 text-sm">We provide professional NIN registration services including:</p>
              <ul className="text-gray-600 text-sm space-y-2 list-disc list-inside">
                <li>New enrollment</li>
                <li>NIN retrieval</li>
                <li>Institutional enrollment</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-toroi-gold hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-bold text-toroi-purple mb-4">2. SIM Registration</h3>
              <ul className="text-gray-600 text-sm space-y-2 list-disc list-inside mt-4">
                <li>Retail and bulk SIM sales</li>
                <li>SIM activation</li>
                <li>SIM swap services</li>
                <li>Corporate SIM packages</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-toroi-pink hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-bold text-toroi-purple mb-4">3. Device Supply</h3>
              <ul className="text-gray-600 text-sm space-y-2 list-disc list-inside mt-4">
                <li>MiFi & Routers</li>
                <li>5G devices</li>
                <li>Smartphones</li>
                <li>NIN enrollment devices</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-toroi-gold hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-bold text-toroi-purple mb-4">4. Agent Partnership</h3>
              <p className="text-gray-600 text-sm mt-4">
                We empower entrepreneurs to become licensed NIN enrollment agents and telecom distributors with structured support and training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="w-full py-20 bg-white px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-toroi-purple mb-10">Why Choose Us?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Structured & Compliance-Driven", "Trusted Distribution Network", "Fast & Reliable Process", "Strong Agent Support", "Scalable Opportunities", "Professional Service"].map((item, index) => (
              <span key={index} className="px-6 py-3 bg-toroi-purple/10 text-toroi-purple border border-toroi-purple/20 rounded-full font-bold shadow-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="w-full py-24 bg-gradient-to-r from-toroi-purple to-toroi-lightPurple text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Join our growing network of telecom entrepreneurs and partners across Nigeria.</h2>
          <Link href="/agent" className="inline-block px-10 py-5 bg-toroi-gold text-toroi-purple rounded-full font-extrabold text-lg hover:bg-yellow-300 transition-all shadow-[0_0_20px_rgba(251,191,36,0.6)]">
            👉 Start Your Agent Journey Today
          </Link>
        </div>
      </section>

    </div>
  );
}