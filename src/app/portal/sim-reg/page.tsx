export default function SimRegBooking() {
  return (
    <div className="p-6 md:p-10 relative z-10">
      
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 glass-light p-8 rounded-[2rem] border-t-4 border-toroi-lightPurple">
        <div>
          <h1 className="text-3xl font-extrabold text-toroi-purple">SIM Registration Booking</h1>
          <p className="text-gray-600 font-medium mt-1">Schedule dedicated time slots for client SIM capture and activation.</p>
        </div>
      </header>

      <div className="glass-light p-8 md:p-12 rounded-[2rem] border border-white/40 max-w-4xl mx-auto shadow-lg relative overflow-hidden">
        
        {/* Subtle decorative background element */}
        <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-toroi-lightPurple/10 rounded-full blur-2xl pointer-events-none"></div>

        <form className="space-y-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Customer Details */}
            <div>
              <label className="block text-sm font-bold text-toroi-purple mb-2">Customer Name</label>
              <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-toroi-lightPurple focus:ring-2 focus:ring-toroi-lightPurple/20 outline-none transition-all bg-white/50 backdrop-blur-sm" placeholder="Enter customer's full name" />
            </div>
            <div>
              <label className="block text-sm font-bold text-toroi-purple mb-2">Network Provider</label>
              <select className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-toroi-lightPurple focus:ring-2 focus:ring-toroi-lightPurple/20 outline-none transition-all bg-white/50 backdrop-blur-sm text-gray-700">
                <option>MTN</option>
                <option>GLO</option>
                <option>Airtel</option>
                <option>9Mobile</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Date & Time */}
            <div>
              <label className="block text-sm font-bold text-toroi-purple mb-2">Appointment Date</label>
              <input type="date" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-toroi-lightPurple focus:ring-2 focus:ring-toroi-lightPurple/20 outline-none transition-all bg-white/50 backdrop-blur-sm text-gray-700" />
            </div>
            <div>
              <label className="block text-sm font-bold text-toroi-purple mb-2">Time Slot</label>
              <input type="time" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-toroi-lightPurple focus:ring-2 focus:ring-toroi-lightPurple/20 outline-none transition-all bg-white/50 backdrop-blur-sm text-gray-700" />
            </div>
          </div>

          {/* Registration Type */}
          <div>
            <label className="block text-sm font-bold text-toroi-purple mb-3">Registration Type</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex items-center p-5 border border-toroi-lightPurple bg-toroi-lightPurple/5 rounded-xl cursor-pointer transition-all shadow-sm">
                <input type="radio" name="regType" className="mr-4 w-5 h-5 accent-toroi-lightPurple" defaultChecked />
                <div>
                  <span className="font-bold text-gray-900 block">New SIM Registration</span>
                  <span className="text-xs text-gray-500">First time capture for a new line</span>
                </div>
              </label>
              <label className="flex items-center p-5 border border-gray-200 bg-white/50 rounded-xl cursor-pointer hover:border-toroi-lightPurple/50 transition-all">
                <input type="radio" name="regType" className="mr-4 w-5 h-5 accent-toroi-lightPurple" />
                <div>
                  <span className="font-bold text-gray-900 block">Welcome Back / SIM Swap</span>
                  <span className="text-xs text-gray-500">Retrieving a lost or damaged line</span>
                </div>
              </label>
            </div>
          </div>

          <button type="button" className="w-full py-5 bg-toroi-purple text-toroi-gold font-extrabold rounded-xl hover:bg-toroi-lightPurple transition-all shadow-[0_10px_20px_rgba(42,10,74,0.2)] text-lg transform hover:-translate-y-1">
            Book Appointment
          </button>
        </form>
      </div>

    </div>
  );
}