import Link from 'next/link';

export default function PortalShop() {
  return (
    <div className="p-6 md:p-10 relative z-10">
      
      {/* Top Header & Actions */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 glass-light p-8 rounded-[2rem] border-t-4 border-toroi-gold">
        <div className="mb-4 md:mb-0">
          <h1 className="text-3xl font-extrabold text-toroi-purple">Portal Marketplace</h1>
          <p className="text-gray-600 font-medium mt-1">Buy official Toroi gear and trade certified telecom goods.</p>
        </div>
        <button className="px-8 py-4 bg-toroi-purple text-toroi-gold rounded-full font-extrabold hover:bg-toroi-lightPurple transition-all shadow-[0_10px_20px_rgba(42,10,74,0.2)] flex items-center transform hover:-translate-y-1">
          <span className="mr-2 text-xl">+</span> Upload Product
        </button>
      </header>

      {/* Status Banners (Agent Upload Status) */}
      <div className="mb-10 p-5 glass-light border-l-4 border-yellow-400 rounded-2xl flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-4">
          <span className="text-2xl animate-spin-slow">⏳</span>
          <div>
            <p className="text-sm text-toroi-purple font-extrabold">Upload Pending Approval</p>
            <p className="text-xs text-gray-600 font-medium">Your upload "GLO 4G MiFi (Slightly Used)" is currently being reviewed by Admin.</p>
          </div>
        </div>
      </div>

      {/* APPROVED PRODUCTS GRID */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-toroi-purple">Live Marketplace</h2>
        <span className="text-sm font-bold text-toroi-pink bg-toroi-pink/10 px-4 py-2 rounded-full">Verified Goods Only</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        
        {/* Product 1: Official Toroi Stock */}
        <div className="glass-light p-6 rounded-[2rem] border border-white/40 flex flex-col relative overflow-hidden group hover:shadow-[0_20px_40px_rgba(251,191,36,0.15)] transition-all duration-300 hover:-translate-y-2">
          <div className="absolute top-0 right-0 bg-gradient-to-r from-toroi-gold to-yellow-500 text-toroi-purple text-xs font-black px-4 py-2 rounded-bl-2xl z-10 shadow-md">
            OFFICIAL STOCK
          </div>
          <div className="flex justify-between items-start mb-4 mt-4">
            <span className="text-3xl font-black text-toroi-purple">₦25,000</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Agent Branding Kit</h3>
          <p className="text-sm text-gray-600 mb-6 flex-grow font-medium">Includes branded t-shirt, official lanyard, and outdoor banner for your physical shop.</p>
          <button className="w-full py-4 bg-toroi-purple text-white rounded-xl font-bold hover:bg-toroi-pink transition-colors shadow-lg">
            Purchase Kit
          </button>
        </div>

        {/* Product 2: Agent Uploaded Stock */}
        <div className="glass-light p-6 rounded-[2rem] border border-white/40 flex flex-col relative overflow-hidden group hover:shadow-[0_20px_40px_rgba(107,33,168,0.1)] transition-all duration-300 hover:-translate-y-2">
          <div className="absolute top-0 right-0 bg-gray-200 text-gray-700 text-xs font-black px-4 py-2 rounded-bl-2xl z-10 shadow-sm">
            AGENT UPLOAD
          </div>
          <div className="flex justify-between items-start mb-4 mt-4">
            <span className="text-3xl font-black text-toroi-purple">₦15,000</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">MTN Router (CAT 4)</h3>
          <p className="text-sm text-gray-600 mb-6 flex-grow font-medium">Slightly used, excellent condition. Tested and verified. Sold by Agent ID: TR-8842.</p>
          <button className="w-full py-4 bg-toroi-purple text-white rounded-xl font-bold hover:bg-toroi-pink transition-colors shadow-lg">
            Purchase Router
          </button>
        </div>

      </div>
    </div>
  );
}