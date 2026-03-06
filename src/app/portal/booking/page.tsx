import Link from 'next/link';

export default function BookingSystem() {
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
          <button className="w-full text-left px-5 py-4 rounded-xl bg-toroi-pink text-white font-bold shadow-md flex items-center transition-all">
            <span className="mr-3 text-xl">📅</span> Book Enrollment
          </button>
          <Link href="/portal/id-card" className="w-full text-left px-5 py-4 rounded-xl text-gray-300 hover:bg-toroi-lightPurple hover:text-white font-bold transition-all flex items-center group">
            <span className="mr-3 text-xl group-hover:scale-110 transition-transform">💳</span> Premium ID Card
          </Link>
        </nav>
      </aside>

      {/* MAIN DASHBOARD CONTENT */}
      <main className="flex-1 p-6 md:p-10">
        <header className="mb-10 bg-white p-8 rounded-3xl shadow-sm border-t-4 border-toroi-gold">
          <h1 className="text-3xl font-extrabold text-toroi-purple">Enrollment Booking</h1>
          <p className="text-gray-500 font-medium mt-1">Schedule NIN or SIM registration for individuals and groups.</p>
        </header>

        {/* BOOKING FORM */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 max-w-4xl">
          <form className="space-y-8">
            
            {/* Service & Type Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-toroi-purple mb-2">Service Required</label>
                <select className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:border-toroi-pink focus:ring-2 focus:ring-toroi-pink/20 outline-none transition-all bg-[#FAFAFF]">
                  <option>NIN New Enrollment</option>
                  <option>NIN Modification / Retrieval</option>
                  <option>SIM Registration</option>
                  <option>SIM Swap</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-toroi-purple mb-2">Enrollment Type</label>
                <select className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:border-toroi-pink focus:ring-2 focus:ring-toroi-pink/20 outline-none transition-all bg-[#FAFAFF]">
                  <option>Single Person</option>
                  <option>Group / Corporate (2-10 People)</option>
                  <option>Large Institution (10+ People)</option>
                </select>
              </div>
            </div>

            {/* Location Selection */}
            <div>
              <label className="block text-sm font-bold text-toroi-purple mb-2">Location Preference</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-toroi-purple/5 transition-colors border-toroi-pink bg-toroi-pink/5">
                  <input type="radio" name="location" className="mr-3 accent-toroi-pink" defaultChecked />
                  <span className="font-bold text-gray-800">Toroi HQ (Ibadan)</span>
                </label>
                <label className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-toroi-purple/5 transition-colors">
                  <input type="radio" name="location" className="mr-3 accent-toroi-pink" />
                  <span className="font-bold text-gray-800">Branch Office</span>
                </label>
                <label className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-toroi-purple/5 transition-colors">
                  <input type="radio" name="location" className="mr-3 accent-toroi-pink" />
                  <span className="font-bold text-gray-800">Home / Office Dispatch</span>
                </label>
              </div>
            </div>

            {/* Date & Time Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-toroi-purple mb-2">Preferred Date</label>
                <input type="date" className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:border-toroi-pink focus:ring-2 focus:ring-toroi-pink/20 outline-none transition-all bg-[#FAFAFF] text-gray-700" />
              </div>
              <div>
                <label className="block text-sm font-bold text-toroi-purple mb-2">Preferred Time</label>
                <input type="time" className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:border-toroi-pink focus:ring-2 focus:ring-toroi-pink/20 outline-none transition-all bg-[#FAFAFF] text-gray-700" />
              </div>
            </div>

            <button type="button" className="w-full md:w-auto px-10 py-4 bg-toroi-purple text-toroi-gold font-extrabold rounded-xl hover:bg-toroi-lightPurple transition-colors shadow-lg mt-4 text-lg">
              Confirm Booking
            </button>
          </form>
        </div>
      </main>

    </div>
  );
}