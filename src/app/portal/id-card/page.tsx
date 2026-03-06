import Link from 'next/link';

export default function PremiumID() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FAFAFF] border-t border-gray-200">
      
      {/* PORTAL SIDEBAR */}
      <aside className="w-full md:w-72 bg-toroi-purple text-white flex flex-col shadow-2xl z-10">
        <div className="p-8 border-b border-toroi-pink/30">
          <h2 className="text-xl font-extrabold tracking-tight text-toroi-gold">Agent Workspace</h2>
          <p className="text-sm text-toroi-lightGold mt-1">ID: TR-8842 <span className="text-green-400 ml-2">● Active</span></p>
        </div>
        
        <nav className="flex-1 p-6 space-y-3">
          <Link href="/portal" className="w-full text-left px-5 py-4 rounded-xl text-gray-300 hover:bg-toroi-lightPurple hover:text-white font-bold transition-all flex items-center group">
            <span className="mr-3 text-xl group-hover:scale-110 transition-transform">🛒</span> Portal Store
          </Link>
          <Link href="/portal/booking" className="w-full text-left px-5 py-4 rounded-xl text-gray-300 hover:bg-toroi-lightPurple hover:text-white font-bold transition-all flex items-center group">
            <span className="mr-3 text-xl group-hover:scale-110 transition-transform">📅</span> Book Enrollment
          </Link>
          <button className="w-full text-left px-5 py-4 rounded-xl bg-toroi-pink text-white font-bold shadow-md flex items-center transition-all">
            <span className="mr-3 text-xl">💳</span> Premium ID Card
          </button>
        </nav>
      </aside>

      {/* MAIN DASHBOARD CONTENT */}
      <main className="flex-1 p-6 md:p-10 flex flex-col items-center justify-center">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-toroi-purple mb-2">Your Premium Agent ID</h1>
          <p className="text-gray-500 font-medium">This is your official digital credential. Present this for official Toroi business.</p>
        </div>

        {/* THE ID CARD DESIGN */}
        <div className="relative w-[350px] h-[550px] bg-gradient-to-br from-toroi-purple to-[#1A0530] rounded-3xl shadow-[0_20px_50px_rgba(42,10,74,0.5)] overflow-hidden border border-toroi-gold/30 flex flex-col items-center pt-8 pb-6">
          
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-toroi-pink/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-toroi-gold/10 blur-3xl rounded-full"></div>

          {/* Logo */}
          <div className="relative z-10 text-2xl font-extrabold text-white tracking-tighter mb-6">
            TOROI<span className="text-toroi-pink">.</span>
          </div>

          {/* Agent Photo Placeholder */}
          <div className="relative z-10 w-32 h-32 rounded-full border-4 border-toroi-gold overflow-hidden mb-4 bg-gray-200 flex items-center justify-center shadow-lg">
            <span className="text-gray-400 text-4xl">👤</span>
          </div>

          {/* Agent Details */}
          <div className="relative z-10 text-center w-full px-6">
            <h2 className="text-2xl font-black text-white mb-1 uppercase tracking-wide">John Doe</h2>
            <p className="text-toroi-gold font-bold text-sm tracking-widest mb-4">AUTHORIZED AGENT</p>
            
            <div className="bg-white/10 p-3 rounded-xl border border-white/20 mb-6 backdrop-blur-sm">
              <p className="text-xs text-toroi-lightGold uppercase tracking-wider mb-1">Agent ID Number</p>
              <p className="text-xl font-mono text-white font-bold tracking-widest">TR-8842-NGA</p>
            </div>
          </div>

          {/* QR Code Placeholder (For verification) */}
          <div className="relative z-10 mt-auto bg-white p-2 rounded-lg">
            <div className="w-16 h-16 bg-gray-900 flex items-center justify-center border border-gray-300">
              <span className="text-[10px] text-white font-mono">QR</span>
            </div>
          </div>

        </div>

        {/* Actions */}
        <div className="mt-10 flex space-x-4">
          <button className="px-8 py-4 bg-toroi-gold text-toroi-purple rounded-xl font-extrabold hover:bg-yellow-300 transition-all shadow-lg flex items-center">
            📥 Download PDF
          </button>
          <button className="px-8 py-4 bg-white border-2 border-toroi-purple text-toroi-purple rounded-xl font-extrabold hover:bg-toroi-purple/5 transition-all shadow-sm">
            🖨️ Print ID Card
          </button>
        </div>

      </main>

    </div>
  );
}