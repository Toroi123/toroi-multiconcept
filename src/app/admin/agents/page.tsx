export default function AdminAgents() {
  return (
    <div className="p-6 md:p-10 relative z-10">
      
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold text-toroi-purple tracking-tight mb-2">Agent Directory</h1>
        <p className="text-gray-600 font-medium">Manage network partners, monitor performance, and control access.</p>
      </header>

      {/* AGENT STATS OVERVIEW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="glass-light p-6 rounded-[2rem] border-t-4 border-toroi-gold shadow-sm flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Total Network</h3>
            <span className="text-4xl font-black text-toroi-purple">142</span>
          </div>
          <div className="w-14 h-14 bg-toroi-gold/20 rounded-full flex items-center justify-center text-2xl">👥</div>
        </div>
        
        <div className="glass-light p-6 rounded-[2rem] border-t-4 border-green-500 shadow-sm flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Active Agents</h3>
            <span className="text-4xl font-black text-toroi-purple">128</span>
          </div>
          <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-2xl">✅</div>
        </div>

        <div className="glass-light p-6 rounded-[2rem] border-t-4 border-toroi-pink shadow-sm flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Pending Approval</h3>
            <span className="text-4xl font-black text-toroi-purple">14</span>
          </div>
          <div className="w-14 h-14 bg-toroi-pink/20 rounded-full flex items-center justify-center text-2xl">⏳</div>
        </div>
      </div>

      {/* AGENT DATA DIRECTORY */}
      <div className="glass-light p-8 rounded-[2rem] border border-white/40 shadow-sm">
        
        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-2xl font-bold text-toroi-purple">Registered Agents</h2>
          
          <div className="flex w-full md:w-auto gap-4">
            <input 
              type="text" 
              placeholder="Search by name or ID..." 
              className="w-full md:w-72 px-5 py-3 rounded-xl border border-gray-200 focus:border-toroi-pink outline-none bg-white/60 font-medium text-gray-700 shadow-sm"
            />
            <button className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-all shadow-sm flex items-center">
              <span className="mr-2">⚡</span> Filter
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="pb-4 font-bold text-gray-500 uppercase text-xs tracking-wider">Agent Details</th>
                <th className="pb-4 font-bold text-gray-500 uppercase text-xs tracking-wider">Status / ID</th>
                <th className="pb-4 font-bold text-gray-500 uppercase text-xs tracking-wider">Wallet Balance</th>
                <th className="pb-4 font-bold text-gray-500 uppercase text-xs tracking-wider">Total Sales</th>
                <th className="pb-4 font-bold text-gray-500 uppercase text-xs tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              
              {/* Agent Row 1 */}
              <tr className="border-b border-gray-100 hover:bg-white/40 transition-colors">
                <td className="py-5">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-toroi-purple text-white flex items-center justify-center font-bold mr-4 shrink-0">
                      AB
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Adebayo Babatunde</p>
                      <p className="text-xs text-gray-500">Ibadan, Oyo State</p>
                    </div>
                  </div>
                </td>
                <td className="py-5">
                  <p className="font-black text-toroi-lightPurple text-sm tracking-wide">TR-8842</p>
                  <span className="inline-block mt-1 px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-md uppercase">Active</span>
                </td>
                <td className="py-5 font-black text-gray-900">₦45,500</td>
                <td className="py-5 font-bold text-gray-600">₦1.2M</td>
                <td className="py-5 flex justify-end gap-2">
                  <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors tooltip" title="View Profile">
                    👁️
                  </button>
                  <button className="p-2 bg-yellow-50 text-yellow-600 rounded-lg hover:bg-yellow-100 transition-colors tooltip" title="Suspend Agent">
                    ⏸️
                  </button>
                </td>
              </tr>

              {/* Agent Row 2 */}
              <tr className="border-b border-gray-100 hover:bg-white/40 transition-colors">
                <td className="py-5">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-toroi-pink text-white flex items-center justify-center font-bold mr-4 shrink-0">
                      CO
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Chioma Okafor</p>
                      <p className="text-xs text-gray-500">Akure, Ondo State</p>
                    </div>
                  </div>
                </td>
                <td className="py-5">
                  <p className="font-black text-toroi-lightPurple text-sm tracking-wide">TR-9104</p>
                  <span className="inline-block mt-1 px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-md uppercase">Active</span>
                </td>
                <td className="py-5 font-black text-gray-900">₦120,000</td>
                <td className="py-5 font-bold text-gray-600">₦3.5M</td>
                <td className="py-5 flex justify-end gap-2">
                  <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                    👁️
                  </button>
                  <button className="p-2 bg-yellow-50 text-yellow-600 rounded-lg hover:bg-yellow-100 transition-colors">
                    ⏸️
                  </button>
                </td>
              </tr>

              {/* Agent Row 3 - Pending */}
              <tr className="border-b border-gray-100 hover:bg-white/40 transition-colors opacity-75">
                <td className="py-5">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center font-bold mr-4 shrink-0">
                      MO
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Mohammed Olanrewaju</p>
                      <p className="text-xs text-gray-500">Abeokuta, Ogun State</p>
                    </div>
                  </div>
                </td>
                <td className="py-5">
                  <p className="font-black text-gray-400 text-sm tracking-wide">PENDING</p>
                  <span className="inline-block mt-1 px-2 py-1 bg-yellow-100 text-yellow-700 text-[10px] font-bold rounded-md uppercase">Awaiting Approval</span>
                </td>
                <td className="py-5 font-black text-gray-400">₦0</td>
                <td className="py-5 font-bold text-gray-400">₦0</td>
                <td className="py-5 flex justify-end gap-2">
                  <button className="px-4 py-2 bg-toroi-purple text-toroi-gold font-bold text-xs rounded-lg hover:bg-toroi-lightPurple transition-colors shadow-sm">
                    Review App
                  </button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/20">
          <p className="text-sm font-bold text-gray-500">Showing 1 to 3 of 142 entries</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white border border-gray-200 text-gray-400 rounded-lg font-bold shadow-sm cursor-not-allowed">Previous</button>
            <button className="px-4 py-2 bg-toroi-purple text-white rounded-lg font-bold shadow-sm hover:bg-toroi-lightPurple transition-colors">Next</button>
          </div>
        </div>

      </div>

    </div>
  );
}