export default function AdminDevices() {
  return (
    <div className="p-6 md:p-10 relative z-10">
      
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold text-toroi-purple tracking-tight mb-2">Device Management</h1>
        <p className="text-gray-600 font-medium">Upload official Toroi stock and manage portal store inventory.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* LEFT COLUMN: UPLOAD NEW DEVICE FORM */}
        <div className="lg:col-span-1 glass-light p-8 rounded-[2rem] border-t-4 border-toroi-gold shadow-sm h-fit">
          <h2 className="text-2xl font-bold text-toroi-purple mb-6">Upload New Device</h2>
          
          <form className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Device Name</label>
              <input type="text" placeholder="e.g., MTN 5G Router" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-toroi-pink outline-none bg-white/60 transition-all" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Brand</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-toroi-pink outline-none bg-white text-gray-700 font-medium">
                  <option>MTN</option>
                  <option>GLO</option>
                  <option>Airtel</option>
                  <option>Toroi Official</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Category</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-toroi-pink outline-none bg-white text-gray-700 font-medium">
                  <option>Router</option>
                  <option>MiFi</option>
                  <option>Accessory</option>
                  <option>Branding Kit</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Agent Price (₦)</label>
                <input type="number" placeholder="25000" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-toroi-pink outline-none bg-white/60 transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Stock Qty</label>
                <input type="number" placeholder="50" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-toroi-pink outline-none bg-white/60 transition-all" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Device Image</label>
              <div className="w-full h-32 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center bg-white/40 cursor-pointer hover:border-toroi-pink hover:bg-toroi-pink/5 transition-all text-gray-500">
                <span className="text-3xl mb-2">📸</span>
                <span className="text-sm font-bold">Click to upload image</span>
              </div>
            </div>

            <button type="button" className="w-full py-4 bg-toroi-purple text-toroi-gold rounded-xl font-extrabold hover:bg-toroi-lightPurple transition-all shadow-lg mt-4">
              Publish to Shop
            </button>
          </form>
        </div>

        {/* RIGHT COLUMN: ACTIVE INVENTORY LIST */}
        <div className="lg:col-span-2 glass-light p-8 rounded-[2rem] border border-white/40 shadow-sm">
          <h2 className="text-2xl font-bold text-toroi-purple mb-6 flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></span>
            Active Official Inventory
          </h2>

          <div className="space-y-4">
            
            {/* Inventory Item */}
            <div className="p-5 bg-white/70 rounded-2xl border border-gray-100 flex justify-between items-center hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">📦</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">MTN 5G Router</h3>
                  <p className="text-xs text-gray-500 font-medium mt-1">Brand: MTN • Category: Router</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-black text-toroi-purple">₦65,000</p>
                <p className="text-xs font-bold text-green-600 mt-1">In Stock: 142</p>
              </div>
              <div className="ml-4 flex gap-2">
                <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200">✏️</button>
                <button className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100">🗑️</button>
              </div>
            </div>

            {/* Inventory Item */}
            <div className="p-5 bg-white/70 rounded-2xl border border-gray-100 flex justify-between items-center hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-toroi-pink/10 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">👕</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Toroi Agent Branding Kit</h3>
                  <p className="text-xs text-gray-500 font-medium mt-1">Brand: Official • Category: Branding Kit</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-black text-toroi-purple">₦25,000</p>
                <p className="text-xs font-bold text-red-500 mt-1">Low Stock: 8</p>
              </div>
              <div className="ml-4 flex gap-2">
                <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200">✏️</button>
                <button className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100">🗑️</button>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}