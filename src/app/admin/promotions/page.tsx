export default function AdminPromotions() {
  return (
    <div className="p-6 md:p-10 relative z-10">
      
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold text-toroi-purple tracking-tight mb-2">Push Promotions</h1>
        <p className="text-gray-600 font-medium">Broadcast announcements, flash sales, and alerts to agent dashboards.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* CREATE PROMOTION FORM */}
        <div className="glass-light p-8 rounded-[2rem] border-t-4 border-toroi-pink shadow-sm">
          <h2 className="text-2xl font-bold text-toroi-purple mb-6">Create New Campaign</h2>
          
          <form className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Campaign Title</label>
              <input type="text" placeholder="e.g., Weekend Flash Sale: 10% Off MTN Routers" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-toroi-pink outline-none bg-white/60 transition-all font-bold text-gray-900" />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Campaign Type</label>
              <div className="flex gap-4">
                <label className="flex-1 flex items-center justify-center p-3 border border-toroi-pink bg-toroi-pink/10 rounded-xl cursor-pointer font-bold text-toroi-purple">
                  <input type="radio" name="promoType" className="hidden" defaultChecked />
                  🎉 Promotion
                </label>
                <label className="flex-1 flex items-center justify-center p-3 border border-gray-200 bg-white/50 rounded-xl cursor-pointer font-bold text-gray-600 hover:border-toroi-purple">
                  <input type="radio" name="promoType" className="hidden" />
                  📢 Alert / Update
                </label>
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Message Body</label>
              <textarea rows={4} placeholder="Enter the promotion details or announcement here..." className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-toroi-pink outline-none bg-white/60 transition-all text-gray-700"></textarea>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Target Audience</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-toroi-pink outline-none bg-white text-gray-700 font-medium">
                  <option>All Active Agents</option>
                  <option>Top Performers Only</option>
                  {/* FIXED: Wrapped the less-than symbol in a string to prevent build errors */}
                  <option>New Agents (Joined {"<"} 30 days)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Expiry Date</label>
                <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-toroi-pink outline-none bg-white/60 transition-all text-gray-700 font-medium" />
              </div>
            </div>

            <button type="button" className="w-full py-4 bg-toroi-pink text-white rounded-xl font-extrabold hover:bg-fuchsia-500 transition-all shadow-[0_10px_20px_rgba(232,28,255,0.2)] mt-4">
              Broadcast to Agents
            </button>
          </form>
        </div>

        {/* ACTIVE PROMOTIONS PREVIEW */}
        <div className="glass-light p-8 rounded-[2rem] border border-white/40 shadow-sm flex flex-col">
          <h2 className="text-2xl font-bold text-toroi-purple mb-6 flex items-center">
            <span className="w-3 h-3 bg-toroi-pink rounded-full mr-3 animate-pulse"></span>
            Active Campaigns
          </h2>

          <div className="space-y-6 flex-grow">
            
            <div className="bg-gradient-to-r from-toroi-purple to-[#1B053A] p-6 rounded-2xl shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-toroi-pink mix-blend-multiply filter blur-[40px] opacity-60 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-toroi-gold text-toroi-purple px-3 py-1 rounded-md text-xs font-black uppercase tracking-wider">Promotion</span>
                  <span className="text-gray-400 text-xs font-bold">Expires in 2 days</span>
                </div>
                <h3 className="font-bold text-white text-xl mb-2">Weekend Flash Sale: 10% Off MTN Routers</h3>
                <p className="text-sm text-toroi-lightGold font-medium mb-4">Stock up your physical shop! All MTN CAT 4 and CAT 6 Routers are automatically discounted in the portal store until Sunday midnight.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400 font-bold">Target: All Active Agents</span>
                  <button className="text-xs text-red-400 font-bold hover:underline">End Campaign</button>
                </div>
              </div>
            </div>

            <div className="bg-white/80 p-6 rounded-2xl border-l-4 border-blue-500 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-xs font-black uppercase tracking-wider">System Alert</span>
                <span className="text-gray-500 text-xs font-bold">Expires in 14 days</span>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">NIMC Server Maintenance Notice</h3>
              <p className="text-sm text-gray-600 font-medium mb-4">Please be informed that NIMC portals will experience slight downtime this Saturday between 2:00 AM and 5:00 AM.</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 font-bold">Target: All Active Agents</span>
                <button className="text-xs text-red-500 font-bold hover:underline">End Campaign</button>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}