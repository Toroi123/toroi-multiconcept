import Link from 'next/link';

// Product Data Array
const products = [
  { id: 1, brand: 'MTN', title: 'MTN MiFi – Portable High-Speed', desc: 'Stay connected anywhere with the MTN MiFi. Compact, portable, and perfect for personal and small team internet access.', features: ['4G LTE connectivity', 'Connects multiple devices simultaneously', 'Long-lasting battery life'], bestFor: 'Students, Remote workers', primaryCta: 'Order Now', secondaryCta: 'WhatsApp Us' },
  { id: 2, brand: 'MTN', title: 'MTN Router (CAT 4)', desc: 'Reliable 4G LTE router designed for homes and small offices requiring consistent internet performance.', features: ['4G LTE CAT 4 technology', 'Strong signal reception', 'Ethernet ports available'], bestFor: 'Small offices, Homes, POS', primaryCta: 'Order Now', secondaryCta: 'Speak to Sales' },
  { id: 3, brand: 'MTN', title: 'MTN Router (CAT 6)', desc: 'Advanced CAT 6 router offering improved speed, better bandwidth management, and stronger connectivity.', features: ['Higher download speeds', 'Dual-band support', 'Stronger network stability'], bestFor: 'Growing businesses, Streaming', primaryCta: 'Order Now', secondaryCta: 'Speak to Sales' },
  { id: 4, brand: 'MTN', title: 'MTN 5G Router', desc: 'Experience lightning-fast internet with MTN 5G technology, built for high-performance business and smart homes.', features: ['5G ultra-fast speed', 'Low latency connectivity', 'Future-ready technology'], bestFor: 'Corporate offices, Tech startups', primaryCta: 'Order Now', secondaryCta: 'Speak to Sales' },
  { id: 5, brand: 'GLO', title: 'GLO MiFi – Portable 4G', desc: 'Stay connected on the go with GLO’s portable MiFi device, designed for fast and affordable internet access.', features: ['4G LTE connectivity', 'Compact and travel-friendly', 'Stable browsing performance'], bestFor: 'Students, Field workers', primaryCta: 'Order Now', secondaryCta: 'WhatsApp Us' },
  { id: 6, brand: 'GLO', title: 'GLO Router – Reliable Home', desc: 'Designed for stable connectivity, the GLO Router offers dependable internet for households and small offices.', features: ['4G LTE support', 'Multiple device connection', 'Easy setup'], bestFor: 'Homes, Small offices', primaryCta: 'Buy Now', secondaryCta: 'Request Support' },
  { id: 7, brand: 'Airtel', title: 'Airtel MiFi – Smart Portable', desc: 'Airtel MiFi delivers high-speed 4G connectivity for individuals and teams who need reliable internet anywhere.', features: ['4G LTE high-speed internet', 'Rechargeable battery', 'Compact and lightweight'], bestFor: 'Business professionals, Teams', primaryCta: 'Order Today', secondaryCta: 'Contact Sales' },
  { id: 8, brand: 'Airtel', title: 'Airtel Router – High Performance', desc: 'Built for stronger and more stable connectivity, Airtel Router supports multiple devices and delivers consistent performance.', features: ['4G LTE broadband', 'Wide signal coverage', 'Plug-and-play installation'], bestFor: 'Offices, Homes, SMEs', primaryCta: 'Buy Now', secondaryCta: 'Speak to Sales' },
  { id: 9, brand: 'Airtel', title: 'Airtel 5G Router – Ultra-Fast', desc: 'Upgrade to next-generation speed with Airtel 5G Router, designed for ultra-fast connectivity and high-demand environments.', features: ['5G ultra-high speed', 'Low latency performance', 'Seamless streaming'], bestFor: 'Corporate offices, Tech companies', primaryCta: 'Order Now', secondaryCta: 'Speak to Sales' }
];

export default function Shop() {
  return (
    <div className="flex flex-col items-center">
      
      {/* HEADER SECTION */}
      <section className="w-full py-20 bg-toroi-purple text-white flex flex-col items-center text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-toroi-pink/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-toroi-gold/10 blur-3xl rounded-full"></div>
        
        <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold tracking-tight mb-4 max-w-4xl text-transparent bg-clip-text bg-gradient-to-r from-white to-toroi-lightGold">
          Telecom Devices & Connectivity Solutions
        </h1>
        <p className="relative z-10 text-lg md:text-xl text-toroi-lightGold max-w-2xl font-medium">
          Buy genuine MTN, GLO, and Airtel devices with reliable performance and nationwide support.
        </p>
      </section>

      {/* FEATURED PRODUCTS GRID */}
      <section className="w-full py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg border-t-4 border-toroi-lightPurple overflow-hidden hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(107,33,168,0.15)] transition-all flex flex-col relative group">
              
              {/* Product Header / Brand Tag */}
              <div className="bg-toroi-purple/5 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                <span className={`font-bold text-xs px-3 py-1 rounded-full ${
                  product.brand === 'MTN' ? 'bg-yellow-100 text-yellow-800' : 
                  product.brand === 'GLO' ? 'bg-green-100 text-green-800' : 
                  'bg-red-100 text-red-800'
                }`}>
                  {product.brand} Official
                </span>
              </div>
              
              {/* Product Details */}
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-toroi-purple mb-2 group-hover:text-toroi-pink transition-colors">{product.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{product.desc}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-toroi-purple mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-toroi-pink mr-2">✔</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="p-6 pt-0 mt-auto flex flex-col space-y-3">
                <button className="w-full py-3 bg-toroi-gold text-toroi-purple rounded-xl font-bold hover:bg-yellow-300 transition-all shadow-md">
                  👉 {product.primaryCta}
                </button>
                <button className="w-full py-3 bg-white text-toroi-purple border-2 border-toroi-pink rounded-xl font-bold hover:bg-toroi-pink hover:text-white transition-all">
                  👉 {product.secondaryCta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUPPORT & INFO SECTION */}
      <section className="w-full bg-toroi-purple text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold text-toroi-gold mb-4">🏢 Bulk Purchase</h3>
            <p className="text-toroi-lightGold text-sm mb-4">Special pricing for corporate organizations, schools, and telecom resellers.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-toroi-gold mb-4">🚚 Delivery & Payment</h3>
            <p className="text-toroi-lightGold text-sm mb-2">Nationwide delivery. Bank transfer, POS, or corporate invoice.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-toroi-gold mb-4">🔒 Guarantee</h3>
            <p className="text-toroi-lightGold text-sm mb-6">All devices are genuine and sourced through verified telecom distribution channels.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-toroi-gold mb-4">📞 Need Assistance?</h3>
            <p className="text-white text-sm font-medium">+234 816 120 9704</p>
            <p className="text-white text-sm font-medium">+234 915 500 0039</p>
          </div>
        </div>
      </section>

    </div>
  );
}