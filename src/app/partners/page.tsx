import Link from 'next/link';

export default function Partners() {
  return (
    <div className="flex flex-col items-center">
      
      {/* HEADER */}
      <section className="w-full py-20 bg-toroi-purple text-white flex flex-col items-center text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-toroi-pink to-white">
          Partner With Toroi Multiconcept Ltd
        </h1>
        <p className="text-lg md:text-xl text-toroi-lightGold max-w-2xl font-medium">
          We provide structured solutions tailored to organizational needs.
        </p>
      </section>

      {/* WHO WE COLLABORATE WITH */}
      <section className="w-full py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-toroi-purple mb-10">We Collaborate With:</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['Schools', 'Corporate Organizations', 'Religious Institutions', 'Community Associations', 'Business Clusters'].map((item, index) => (
            <span key={index} className="px-8 py-4 bg-white border border-gray-200 text-toroi-purple rounded-full font-bold shadow-sm hover:border-toroi-pink hover:text-toroi-pink transition-colors cursor-default">
              {item}
            </span>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-toroi-purple mb-10">Our Partnership Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {[
            { title: "On-site NIN Enrollment", icon: "🆔" },
            { title: "Bulk SIM Distribution", icon: "📱" },
            { title: "Institutional Registration", icon: "🏢" },
            { title: "Telecom Device Supply", icon: "📦" }
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-toroi-gold flex items-center">
              <span className="text-3xl mr-4">{service.icon}</span>
              <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* OUR PARTNERS (Brand Logos Placeholder) */}
      <section className="w-full py-20 bg-toroi-purple/5 px-6 border-t border-gray-200 text-center">
        <h2 className="text-3xl font-bold text-toroi-purple mb-10">Our Trusted Partners</h2>
        <div className="flex flex-wrap justify-center items-center gap-12 max-w-4xl mx-auto">
          {/* These act as placeholders for actual logo images */}
          <div className="px-10 py-6 bg-white rounded-2xl shadow-sm font-black text-3xl text-yellow-500 border border-gray-100 tracking-tighter">MTN</div>
          <div className="px-10 py-6 bg-white rounded-2xl shadow-sm font-black text-3xl text-green-600 border border-gray-100 tracking-tighter">GLO</div>
          <div className="px-10 py-6 bg-white rounded-2xl shadow-sm font-black text-3xl text-green-800 border border-gray-100 tracking-tighter">NIMC</div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 bg-toroi-purple text-center px-6">
        <h3 className="text-2xl text-white font-bold mb-6">Contact us today to discuss partnership opportunities.</h3>
        <Link href="/contact" className="inline-block px-10 py-4 bg-toroi-pink text-white rounded-full font-bold hover:bg-fuchsia-500 transition-colors shadow-lg">
          Get in Touch
        </Link>
      </section>

    </div>
  );
}