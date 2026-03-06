export default function AdminActionCenter() {
  return (
    <div className="p-6 md:p-10 relative z-10">
      
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold text-toroi-purple tracking-tight mb-2">Action Center</h1>
        <p className="text-gray-600 font-medium">Process appointments, assign locations, and verify payments.</p>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        
        {/* -------------------------------------------------------------
            LEFT COLUMN: APPOINTMENTS & LOCATION ASSIGNMENT
        ------------------------------------------------------------- */}
        <div className="glass-light p-8 rounded-[2rem] border border-white/40 shadow-sm flex flex-col h-full">
          <h2 className="text-2xl font-bold text-toroi-purple mb-6 flex items-center">
            <span className="w-3 h-3 bg-toroi-pink rounded-full mr-3 animate-pulse"></span>
            Pending Appointments
          </h2>

          <div className="space-y-6 flex-grow">
            
            {/* Appointment Request Card */}
            <div className="bg-white/60 p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Group NIN Enrollment</h3>
                  <p className="text-sm text-gray-500 font-medium">Agent: <span className="text-toroi-lightPurple font-bold">TR-8842</span> • Client: Adebayo & Co.</p>
                </div>
                <span className="bg-toroi-gold/20 text-toroi-purple px-3 py-1 rounded-md text-xs font-bold">Requested: Tomorrow</span>
              </div>
              
              <div className="mb-4">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Assign Nearest Location</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-toroi-pink outline-none text-sm font-bold text-gray-700 bg-white">
                  <option>Select Center...</option>
                  <option>Toroi HQ - Ibadan (Nearest)</option>
                  <option>Branch 1 - Sango Poly Road</option>
                  <option>Dispatch to Client Location</option>
                </select>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 py-3 bg-toroi-purple text-toroi-gold rounded-xl font-bold hover:bg-toroi-lightPurple transition-colors shadow-md text-sm">
                  Accept & Assign
                </button>
                <button className="px-5 py-3 bg-red-50 text-red-600 rounded-xl font-bold hover:bg-red-100 transition-colors text-sm">
                  Reject
                </button>
              </div>
            </div>

            {/* Another Appointment Request */}
            <div className="bg-white/60 p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">SIM Swap (MTN)</h3>
                  <p className="text-sm text-gray-500 font-medium">Agent: <span className="text-toroi-lightPurple font-bold">TR-1029</span> • Client: Sarah O.</p>
                </div>
                <span className="bg-toroi-pink/10 text-toroi-pink px-3 py-1 rounded-md text-xs font-bold">Requested: Today</span>
              </div>
              
              <div className="mb-4">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Assign Nearest Location</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-toroi-pink outline-none text-sm font-bold text-gray-700 bg-white">
                  <option>Select Center...</option>
                  <option>Branch 2 - Akure (Nearest)</option>
                  <option>Toroi HQ - Ibadan</option>
                </select>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 py-3 bg-toroi-purple text-toroi-gold rounded-xl font-bold hover:bg-toroi-lightPurple transition-colors shadow-md text-sm">
                  Accept & Assign
                </button>
                <button className="px-5 py-3 bg-red-50 text-red-600 rounded-xl font-bold hover:bg-red-100 transition-colors text-sm">
                  Reject
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* -------------------------------------------------------------
            RIGHT COLUMN: PAYMENT PROCESSING
        ------------------------------------------------------------- */}
        <div className="glass-light p-8 rounded-[2rem] border border-white/40 shadow-sm flex flex-col h-full">
          <h2 className="text-2xl font-bold text-toroi-purple mb-6 flex items-center">
            <span className="w-3 h-3 bg-toroi-gold rounded-full mr-3 animate-pulse"></span>
            Pending Payments & Funding
          </h2>

          <div className="space-y-6 flex-grow">
            
            {/* Payment Request Card */}
            <div className="bg-white/60 p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <span className="text-3xl mr-4 bg-green-100 p-3 rounded-full">💳</span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Wallet Funding Request</h3>
                    <p className="text-sm text-gray-500 font-medium">Agent: <span className="text-toroi-lightPurple font-bold">TR-8842</span></p>
                  </div>
                </div>
                <span className="text-2xl font-black text-toroi-purple">₦50,000</span>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-4 flex justify-between items-center">
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Proof of Payment</p>
                  <p className="text-sm font-medium text-toroi-purple hover:underline cursor-pointer">View_Receipt_GTB.pdf</p>
                </div>
                <span className="text-gray-400 text-xl">📄</span>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 py-3 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 transition-colors shadow-md text-sm">
                  Verify & Credit Wallet
                </button>
                <button className="px-5 py-3 bg-red-50 text-red-600 rounded-xl font-bold hover:bg-red-100 transition-colors text-sm">
                  Reject
                </button>
              </div>
            </div>

            {/* Shop Order Payment Request */}
            <div className="bg-white/60 p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <span className="text-3xl mr-4 bg-yellow-100 p-3 rounded-full">🛒</span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">External Order Payment</h3>
                    <p className="text-sm text-gray-500 font-medium">Order: <span className="text-toroi-lightPurple font-bold">#ORD-912</span></p>
                  </div>
                </div>
                <span className="text-2xl font-black text-toroi-purple">₦15,000</span>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-4 flex justify-between items-center">
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Proof of Payment</p>
                  <p className="text-sm font-medium text-toroi-purple hover:underline cursor-pointer">Transfer_Screenshot.jpg</p>
                </div>
                <span className="text-gray-400 text-xl">🖼️</span>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 py-3 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 transition-colors shadow-md text-sm">
                  Approve Order
                </button>
                <button className="px-5 py-3 bg-red-50 text-red-600 rounded-xl font-bold hover:bg-red-100 transition-colors text-sm">
                  Reject
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}