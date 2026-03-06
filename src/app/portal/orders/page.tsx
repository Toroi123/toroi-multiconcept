export default function Orders() {
  return (
    <div className="p-6 md:p-10 relative z-10">
      
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 glass-light p-8 rounded-[2rem] border-t-4 border-toroi-gold">
        <div>
          <h1 className="text-3xl font-extrabold text-toroi-purple">Order History</h1>
          <p className="text-gray-600 font-medium mt-1">Track your physical device and branding kit purchases.</p>
        </div>
      </header>

      {/* Orders List */}
      <div className="glass-light p-8 rounded-[2rem] border border-white/40">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-toroi-purple">Recent Orders</h2>
          <span className="text-sm font-bold text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm">Showing Last 30 Days</span>
        </div>

        <div className="space-y-6">
          
          {/* Order Item: In Transit */}
          <div className="p-6 bg-white/60 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start mb-4 md:mb-0">
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mr-5 shrink-0">
                <span className="text-2xl">🚚</span>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg mb-1">MTN 5G Router (x2)</p>
                <p className="text-sm text-gray-500 font-medium">Order #TR-9938-A • Placed: Mar 4, 2026</p>
                <span className="inline-block mt-2 px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded-full">In Transit</span>
              </div>
            </div>
            <div className="text-left md:text-right">
              <p className="text-xl font-black text-toroi-purple">₦130,000</p>
              <button className="text-sm text-toroi-pink font-bold hover:underline mt-1">Track Shipment →</button>
            </div>
          </div>

          {/* Order Item: Delivered */}
          <div className="p-6 bg-white/60 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start mb-4 md:mb-0">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mr-5 shrink-0">
                <span className="text-2xl">📦</span>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg mb-1">Agent Branding Kit</p>
                <p className="text-sm text-gray-500 font-medium">Order #TR-8821-B • Placed: Feb 28, 2026</p>
                <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">Delivered</span>
              </div>
            </div>
            <div className="text-left md:text-right">
              <p className="text-xl font-black text-toroi-purple">₦25,000</p>
              <button className="text-sm text-gray-500 font-bold hover:underline mt-1">View Receipt</button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}