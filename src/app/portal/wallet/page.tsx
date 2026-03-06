export default function Wallet() {
  return (
    <div className="p-6 md:p-10 relative z-10">
      
      {/* Top Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 glass-light p-8 rounded-[2rem] border-t-4 border-toroi-pink">
        <div className="mb-4 md:mb-0">
          <h1 className="text-3xl font-extrabold text-toroi-purple">Agent Wallet</h1>
          <p className="text-gray-600 font-medium mt-1">Fund your account to purchase devices and kits from the shop.</p>
        </div>
      </header>

      {/* Balance & Fund Action Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        
        {/* Current Balance Card */}
        <div className="md:col-span-2 bg-gradient-to-r from-toroi-purple to-[#1B053A] rounded-[2rem] p-10 shadow-[0_20px_40px_rgba(42,10,74,0.3)] relative overflow-hidden flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-toroi-pink mix-blend-multiply filter blur-[80px] opacity-40 animate-blob pointer-events-none z-0"></div>
          <div className="relative z-10">
            <h3 className="text-toroi-lightGold text-sm uppercase tracking-widest font-bold mb-2">Available Balance</h3>
            <span className="text-5xl md:text-6xl font-black text-white tracking-tight">₦45,500<span className="text-2xl text-gray-400">.00</span></span>
            <p className="text-gray-300 mt-4 font-medium text-sm flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span> Funds ready for shop purchases
            </p>
          </div>
        </div>

        {/* Fund Wallet Action */}
        <div className="glass-light rounded-[2rem] p-8 flex flex-col justify-center border border-white/40 shadow-sm text-center">
          <div className="w-16 h-16 bg-toroi-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">💳</span>
          </div>
          <h3 className="text-xl font-bold text-toroi-purple mb-2">Add Funds</h3>
          <p className="text-gray-500 text-sm mb-6">Top up your wallet via bank transfer or card.</p>
          <button className="w-full py-4 bg-toroi-pink text-white rounded-xl font-bold hover:bg-fuchsia-500 transition-colors shadow-[0_10px_20px_rgba(232,28,255,0.2)]">
            Fund Wallet Now
          </button>
        </div>

      </div>

      {/* Transaction History */}
      <div className="glass-light p-8 rounded-[2rem] border border-white/40">
        <h2 className="text-2xl font-bold text-toroi-purple mb-6">Recent Transactions</h2>
        <div className="space-y-4">
          
          <div className="p-5 bg-white/60 rounded-xl flex justify-between items-center border border-gray-100 transition-all hover:bg-white">
            <div className="flex items-center">
              <span className="text-2xl mr-4 bg-green-100 p-3 rounded-full">📥</span>
              <div>
                <p className="font-bold text-gray-900">Wallet Funded</p>
                <p className="text-xs text-gray-500 font-medium">Bank Transfer • Today, 10:14 AM</p>
              </div>
            </div>
            <span className="text-lg font-bold text-green-600">+ ₦50,000</span>
          </div>

          <div className="p-5 bg-white/60 rounded-xl flex justify-between items-center border border-gray-100 transition-all hover:bg-white">
            <div className="flex items-center">
              <span className="text-2xl mr-4 bg-red-100 p-3 rounded-full">🛒</span>
              <div>
                <p className="font-bold text-gray-900">Shop Purchase</p>
                <p className="text-xs text-gray-500 font-medium">MTN Agent Branding Kit • Yesterday</p>
              </div>
            </div>
            <span className="text-lg font-bold text-gray-800">- ₦4,500</span>
          </div>

        </div>
      </div>

    </div>
  );
}