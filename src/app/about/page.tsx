import Link from 'next/link';

export default function About() {
  const coreValues = [
    { title: "Integrity", desc: "We operate transparently and ethically.", color: "border-toroi-gold" },
    { title: "Compliance", desc: "We follow regulatory standards strictly.", color: "border-toroi-pink" },
    { title: "Excellence", desc: "We deliver services professionally and efficiently.", color: "border-toroi-lightPurple" },
    { title: "Partnership", desc: "We grow with our agents and partners.", color: "border-toroi-gold" },
    { title: "Growth", desc: "We create scalable opportunities nationwide.", color: "border-toroi-pink" }
  ];

  return (
    <div className="flex flex-col items-center">
      
      {/* HEADER SECTION */}
      <section className="w-full py-20 bg-toroi-purple text-white flex flex-col items-center text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-toroi-pink/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-toroi-gold/10 blur-3xl rounded-full"></div>
        
        <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold tracking-tight mb-4 max-w-4xl text-transparent bg-clip-text bg-gradient-to-r from-toroi-gold to-toroi-pink">
          About Toroi Multiconcept Ltd
        </h1>
        <p className="relative z-10 text-lg md:text-xl text-toroi-lightGold max-w-2xl font-medium">
          Delivering accessible, reliable, and compliant digital identity solutions.
        </p>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="w-full py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-toroi-purple mb-6">Who We Are</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          TOROI MULTICONCEPT LTD is a telecommunication and digital identity solutions company focused on delivering accessible, reliable, and compliant services within Nigeria’s telecom ecosystem.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          We specialize in SIM distribution, NIN enrollment services, device supply, and agent development programs. Our operations are structured to support both individuals and organizations while creating sustainable income opportunities for entrepreneurs nationwide.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="w-full py-16 bg-white px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-toroi-purple/5 p-10 rounded-3xl border-l-4 border-toroi-gold shadow-sm">
            <h3 className="text-2xl font-bold text-toroi-purple mb-4">🎯 Our Mission</h3>
            <p className="text-gray-700 text-lg">
              To expand access to telecommunication and digital identity services while building a structured network of empowered agents across Nigeria.
            </p>
          </div>
          <div className="bg-toroi-purple/5 p-10 rounded-3xl border-l-4 border-toroi-pink shadow-sm">
            <h3 className="text-2xl font-bold text-toroi-purple mb-4">👁️ Our Vision</h3>
            <p className="text-gray-700 text-lg">
              To become a leading telecommunication distribution and digital enrollment network in Africa.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="w-full py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-toroi-purple text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {coreValues.map((value, index) => (
            <div key={index} className={`bg-white p-6 rounded-2xl shadow-lg border-t-4 ${value.color} hover:-translate-y-2 transition-transform text-center flex flex-col items-center`}>
              <h3 className="text-xl font-bold text-toroi-purple mb-3">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}