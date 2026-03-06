import Link from 'next/link';

export default function AgentPortal() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FAFAFF] border-t border-gray-200">
      
      {/* 1. PORTAL SIDEBAR */}
      <aside className="w-full md:w-72 bg-toroi-purple text-white flex flex-col shadow-2xl z-10">
        <div className="p-8 border-b border-toroi-pink/30">
          <h2 className="text-xl font-extrabold tracking-tight text-toroi-gold">Agent Workspace</h2>
          <p className="text-sm text-toroi-lightGold mt-1">ID: TR-8842 <span className="text-green-400 ml-2">● Active</span></p>
        </div>
        
        <nav className="flex-1 p-6 space-y-3">
          <button className="w-full text-left px-5 py-4 rounded-xl bg-toroi-pink text-white font-bold shadow-md flex items-center transition-all">
            <span className="mr-3 text-xl">🛒</span> Portal Store
          </button>
          <button className="w-full text-left px-5 py-4 rounded-xl text-gray-300 hover:bg-toroi-lightPurple hover:text-white font-bold transition-all flex items-center group">
            <span className="mr-3 text-xl group-hover:scale-110 transition-transform">📅</span> Book Enrollment
          </button>
          <button className="w-full text-left px-5 py-4 rounded-xl text-gray-300 hover:bg-toroi-lightPurple hover:text-white font-bold transition-all flex items-center group">
            <span className="mr-3 text-xl group-hover:scale-110 transition-transform">📦</span> Order Device Kits
          </button>
          <button className="w-full text-left px-5 py-4 rounded-xl text-gray-300 hover:bg-toroi-lightPurple hover:text-white font-bold transition-all flex items-center group">
            <span className="mr-3 text-xl group-hover:scale-110 transition-transform">💳</span> Premium ID Card
          </button>
        </nav>
      </aside>

      {/* 2. MAIN DASHBOARD CONTENT */}
      <main className="flex-1 p-6 md:p-10">
        
        {/* Top Header & Actions */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 bg-white p-8 rounded-3xl shadow-sm border-t-4 border-toroi-gold">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl font-extrabold text-toroi-purple">Portal Marketplace</h1>
            <p className="text-gray-500 font-medium mt-1">Buy official Toroi gear and trade certified telecom goods.</p>
          </div>
          <button className="px-8 py-4 bg-toroi-purple text-toroi-gold rounded-xl font-extrabold hover:bg-toroi-lightPurple transition-all shadow-lg flex items-center">
            <span className="mr-2 text-xl">+</span> Upload Product
          </button>
        </header>

        {/* Status Banners (Agent Upload Status) */}
        <div className="mb-10 p-5 bg-yellow-50 border border-yellow-200 rounded-2xl flex items-center justify-between shadow-sm">
          <div className="flex items-center space-x-4">
            <span className="text-2xl animate-pulse">⏳</span>
            <div>
              <p className="text-sm text-yellow-800 font-bold">Upload Pending Approval</p>
              <p className="text-xs text-yellow-700">Your upload "GLO 4G MiFi (Slightly Used)" is currently being reviewed by Admin.</p>
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
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-toroi-gold text-toroi-purple text-xs font-black px-4 py-2 rounded-bl-xl z-10">
              OFFICIAL STOCK
            </div>
            <div className="flex justify-between items-start mb-4 mt-4">
              <span className="text-2xl font-black text-toroi-purple">₦25,000</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Agent Branding Kit</h3>
            <p className="text-sm text-gray-500 mb-6 flex-grow font-medium">Includes branded t-shirt, official lanyard, and outdoor banner for your physical shop.</p>
            <button className="w-full py-3 bg-toroi-purple text-white rounded-xl font-bold hover:bg-toroi-pink transition-colors shadow-md">
              Purchase Kit
            </button>
          </div>

          {/* Product 2: Agent Uploaded Stock */}
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gray-200 text-gray-700 text-xs font-black px-4 py-2 rounded-bl-xl z-10">
              AGENT UPLOAD
            </div>
            <div className="flex justify-between items-start mb-4 mt-4">
              <span className="text-2xl font-black text-toroi-purple">₦15,000</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">MTN Router (CAT 4)</h3>
            <p className="text-sm text-gray-500 mb-6 flex-grow font-medium">Slightly used, excellent condition. Tested and verified. Sold by Agent ID: TR-8842.</p>
            <button className="w-full py-3 bg-toroi-purple text-white rounded-xl font-bold hover:bg-toroi-pink transition-colors shadow-md">
              Purchase Router
            </button>
          </div>

        </div>
      </main>

    </div>
  );
}