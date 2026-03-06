import Link from 'next/link';

export default function Services() {
  return (
    <div className="flex flex-col items-center">
      
      {/* HEADER SECTION */}
      <section className="w-full py-20 bg-toroi-purple text-white flex flex-col items-center text-center px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-toroi-pink/10 to-toroi-gold/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-toroi-lightGold">
          Our Services
        </h1>
        <p className="relative z-10 text-lg md:text-xl text-toroi-lightGold max-w-2xl font-medium">
          Professional identity enrollment, robust connectivity, and scalable business opportunities.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="w-full py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* 1. NIN ENROLLMENT */}
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-toroi-pink/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
            <h2 className="text-2xl font-bold text-toroi-purple mb-4 flex items-center">
              <span className="bg-toroi-pink text-white w-10 h-10 flex items-center justify-center rounded-lg mr-4 text-lg">1</span>
              NIN Enrollment Services
            </h2>
            <p className="text-gray-600 mb-6">We provide professional identity enrollment services including:</p>
            <ul className="space-y-3 mb-8">
              {['New NIN registration', 'NIN retrieval', 'Corporate & institutional enrollment', 'Agent onboarding support'].map((item, i) => (
                <li key={i} className="flex items-start text-gray-700 font-medium">
                  <span className="text-toroi-pink mr-3">✔</span> {item}
                </li>
              ))}
            </ul>
            <p className="text-toroi-purple font-bold text-sm bg-toroi-purple/5 inline-block px-4 py-2 rounded-lg">
              Our systems are structured for accuracy, speed, and compliance.
            </p>
          </div>

          {/* 2. SIM SERVICES */}
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-toroi-gold/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
            <h2 className="text-2xl font-bold text-toroi-purple mb-4 flex items-center">
              <span className="bg-toroi-gold text-toroi-purple w-10 h-10 flex items-center justify-center rounded-lg mr-4 text-lg">2</span>
              SIM Services
            </h2>
            <p className="text-gray-600 mb-6">TOROI MULTICONCEPT LTD supplies SIM cards in bulk and retail quantities. Our services include:</p>
            <ul className="space-y-3 mb-8">
              {['SIM activation', 'SIM swap', 'Corporate bulk supply', 'Dealer & distributor packages'].map((item, i) => (
                <li key={i} className="flex items-start text-gray-700 font-medium">
                  <span className="text-toroi-gold mr-3">✔</span> {item}
                </li>
              ))}
            </ul>
            <p className="text-toroi-purple font-bold text-sm bg-toroi-purple/5 inline-block px-4 py-2 rounded-lg">
              We ensure proper documentation and regulatory compliance.
            </p>
          </div>

          {/* 3. DEVICE SALES */}
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-toroi-lightPurple/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
            <h2 className="text-2xl font-bold text-toroi-purple mb-4 flex items-center">
              <span className="bg-toroi-lightPurple text-white w-10 h-10 flex items-center justify-center rounded-lg mr-4 text-lg">3</span>
              Device Sales & Distribution
            </h2>
            <p className="text-gray-600 mb-6">We supply telecom and enrollment devices including:</p>
            <ul className="space-y-3 mb-8">
              {['MiFi', 'Routers', '5G devices', 'Smartphones', 'NIN enrollment kits'].map((item, i) => (
                <li key={i} className="flex items-start text-gray-700 font-medium">
                  <span className="text-toroi-lightPurple mr-3">✔</span> {item}
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <Link href="/shop" className="px-6 py-2 bg-toroi-purple text-white rounded-lg font-bold hover:bg-toroi-lightPurple transition-colors text-sm">
                Visit E-Shop
              </Link>
            </div>
          </div>

          {/* 4. AGENT DEVELOPMENT */}
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-toroi-pink/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
            <h2 className="text-2xl font-bold text-toroi-purple mb-4 flex items-center">
              <span className="bg-toroi-pink text-white w-10 h-10 flex items-center justify-center rounded-lg mr-4 text-lg">4</span>
              Agent Development Program
            </h2>
            <p className="text-gray-600 mb-6">Our structured agent program enables individuals to:</p>
            <ul className="space-y-3 mb-8">
              {['Become NIN enrollment agents', 'Participate in telecom distribution', 'Access training & compliance guidance', 'Scale their telecom business'].map((item, i) => (
                <li key={i} className="flex items-start text-gray-700 font-medium">
                  <span className="text-toroi-pink mr-3">✔</span> {item}
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <Link href="/agent" className="px-6 py-2 bg-toroi-gold text-toroi-purple rounded-lg font-bold hover:bg-yellow-300 transition-colors shadow-sm text-sm">
                Become an Agent
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}