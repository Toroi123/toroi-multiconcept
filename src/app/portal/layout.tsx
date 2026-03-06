import Link from 'next/link';

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FAFAFF] relative overflow-hidden">
      
      {/* Animated Premium Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-toroi-pink mix-blend-multiply filter blur-[150px] opacity-30 animate-blob pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-toroi-gold mix-blend-multiply filter blur-[150px] opacity-30 animate-blob animation-delay-4000 pointer-events-none z-0"></div>

      {/* 1. THE NEW 7-ITEM SIDEBAR */}
      <aside className="w-full md:w-72 bg-toroi-purple text-white flex flex-col shadow-[10px_0_30px_rgba(42,10,74,0.1)] z-10 relative h-screen sticky top-0">
        
        {/* Agent Profile Header */}
        <div className="p-8 border-b border-white/10 glass-dark">
          <h2 className="text-xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-toroi-gold to-toroi-pink">Toroi Agent</h2>
          <p className="text-sm text-toroi-lightGold mt-2 flex items-center">
            ID: TR-8842 <span className="w-2 h-2 bg-green-400 rounded-full ml-3 mr-1 animate-pulse"></span> Active
          </p>
        </div>
        
        {/* Navigation Menu */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto custom-scrollbar">
          
          <Link href="/portal" className="w-full text-left px-5 py-3.5 rounded-2xl text-gray-300 hover:bg-white/10 hover:text-white font-bold transition-all flex items-center group glass-dark">
            <span className="mr-3 text-xl group-hover:scale-110 transition-transform">📊</span> Activity
          </Link>
          
          <Link href="/portal/wallet" className="w-full text-left px-5 py-3.5 rounded-2xl bg-gradient-to-r from-toroi-pink to-toroi-lightPurple text-white font-bold shadow-[0_0_15px_rgba(232,28,255,0.3)] flex items-center transition-all transform hover:-translate-y-1">
            <span className="mr-3 text-xl">💳</span> Wallet
          </Link>

          <Link href="/portal/sim-reg" className="w-full text-left px-5 py-3.5 rounded-2xl text-gray-300 hover:bg-white/10 hover:text-white font-bold transition-all flex items-center group glass-dark">
            <span className="mr-3 text-xl group-hover:scale-110 transition-transform">📱</span> SIM Reg
          </Link>

          <Link href="/portal/appointments" className="w-full text-left px-5 py-3.5 rounded-2xl text-gray-300 hover:bg-white/10 hover:text-white font-bold transition-all flex items-center group glass-dark">
            <span className="mr-3 text-xl group-hover:scale-110 transition-transform">📅</span> Appointments
          </Link>

          <Link href="/portal/shop" className="w-full text-left px-5 py-3.5 rounded-2xl text-gray-300 hover:bg-white/10 hover:text-white font-bold transition-all flex items-center group glass-dark">
            <span className="mr-3 text-xl group-hover:scale-110 transition-transform">🛒</span> Shop
          </Link>

          <Link href="/portal/orders" className="w-full text-left px-5 py-3.5 rounded-2xl text-gray-300 hover:bg-white/10 hover:text-white font-bold transition-all flex items-center group glass-dark">
            <span className="mr-3 text-xl group-hover:scale-110 transition-transform">📦</span> Orders
          </Link>

          <Link href="/portal/settings" className="w-full text-left px-5 py-3.5 rounded-2xl text-gray-300 hover:bg-white/10 hover:text-white font-bold transition-all flex items-center group glass-dark mt-8 border-t border-white/5 pt-6">
            <span className="mr-3 text-xl group-hover:rotate-90 transition-transform duration-300">⚙️</span> Settings
          </Link>

        </nav>
      </aside>

      {/* 2. DYNAMIC MAIN CONTENT AREA */}
      <main className="flex-1 z-10 relative overflow-y-auto h-screen custom-scrollbar">
        {/* The specific page content (Activity, Wallet, Shop, etc.) will automatically render here */}
        {children}
      </main>

    </div>
  );
}