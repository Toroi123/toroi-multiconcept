import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FAFAFF] relative overflow-hidden">
      
      {/* Background Glows for Admin Vibe */}
      <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-toroi-lightPurple mix-blend-multiply filter blur-[150px] opacity-20 animate-blob pointer-events-none z-0"></div>

      {/* 1. ADMIN SIDEBAR */}
      <aside className="w-full md:w-72 bg-gray-900 text-white flex flex-col shadow-2xl z-10 relative h-screen sticky top-0">
        <div className="p-8 border-b border-white/10 glass-dark">
          <h2 className="text-xl font-extrabold tracking-tight text-premium-gradient">Toroi Command</h2>
          <p className="text-sm text-gray-400 mt-2 flex items-center">
            System Admin <span className="w-2 h-2 bg-toroi-pink rounded-full ml-3 animate-pulse"></span>
          </p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto custom-scrollbar">
          <Link href="/admin" className="w-full text-left px-5 py-3.5 rounded-2xl bg-white/10 text-white font-bold shadow-md flex items-center transition-all border border-white/20">
            <span className="mr-3 text-xl">⚡</span> Action Center
          </Link>
          <Link href="/admin/devices" className="w-full text-left px-5 py-3.5 rounded-2xl text-gray-400 hover:bg-white/5 hover:text-white font-bold transition-all flex items-center">
            <span className="mr-3 text-xl">📦</span> Upload Devices
          </Link>
          <Link href="/admin/promotions" className="w-full text-left px-5 py-3.5 rounded-2xl text-gray-400 hover:bg-white/5 hover:text-white font-bold transition-all flex items-center">
            <span className="mr-3 text-xl">📢</span> Promotions
          </Link>
          <Link href="/admin/agents" className="w-full text-left px-5 py-3.5 rounded-2xl text-gray-400 hover:bg-white/5 hover:text-white font-bold transition-all flex items-center mt-8 border-t border-white/10 pt-6">
            <span className="mr-3 text-xl">👥</span> Manage Agents
          </Link>
        </nav>
      </aside>

      {/* 2. DYNAMIC MAIN CONTENT */}
      <main className="flex-1 z-10 relative overflow-y-auto h-screen custom-scrollbar">
        {children}
      </main>

    </div>
  );
}