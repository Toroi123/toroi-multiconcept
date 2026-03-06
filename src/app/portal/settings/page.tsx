export default function Settings() {
  return (
    <div className="p-6 md:p-10 relative z-10">
      
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 glass-light p-8 rounded-[2rem] border-t-4 border-gray-800">
        <div>
          <h1 className="text-3xl font-extrabold text-toroi-purple">Account Settings</h1>
          <p className="text-gray-600 font-medium mt-1">Manage your profile, security, and preferences.</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Profile Card */}
        <div className="lg:col-span-1 glass-light p-8 rounded-[2rem] border border-white/40 flex flex-col items-center text-center shadow-md">
          <div className="w-32 h-32 bg-gray-200 rounded-full border-4 border-toroi-gold mb-6 overflow-hidden flex items-center justify-center">
            <span className="text-5xl">👤</span>
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-1">John Doe</h2>
          <p className="text-toroi-pink font-bold text-sm mb-4">Agent ID: TR-8842</p>
          <p className="text-gray-500 text-sm mb-8">Joined: February 2026</p>
          <button className="w-full py-3 bg-white border-2 border-toroi-purple text-toroi-purple rounded-xl font-bold hover:bg-toroi-purple hover:text-white transition-all">
            Update Photo
          </button>
        </div>

        {/* Right Column: Forms */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Personal Information Form */}
          <div className="glass-light p-8 rounded-[2rem] border border-white/40 shadow-sm">
            <h3 className="text-xl font-bold text-toroi-purple mb-6">Personal Information</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input type="text" defaultValue="John Doe" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-toroi-pink outline-none bg-white/50" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input type="email" defaultValue="johndoe@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-toroi-pink outline-none bg-white/50" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" defaultValue="0816 120 9704" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-toroi-pink outline-none bg-white/50" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Business Location</label>
                  <input type="text" defaultValue="Ibadan, Oyo State" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-toroi-pink outline-none bg-white/50" />
                </div>
              </div>
              <button type="button" className="px-8 py-3 bg-toroi-purple text-toroi-gold font-bold rounded-xl hover:bg-toroi-lightPurple transition-all shadow-md">
                Save Changes
              </button>
            </form>
          </div>

          {/* Security Form */}
          <div className="glass-light p-8 rounded-[2rem] border border-white/40 shadow-sm">
            <h3 className="text-xl font-bold text-toroi-purple mb-6">Security</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Current Password</label>
                <input type="password" placeholder="••••••••" className="w-full md:w-1/2 px-4 py-3 rounded-xl border border-gray-200 focus:border-toroi-pink outline-none bg-white/50" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">New Password</label>
                <input type="password" placeholder="••••••••" className="w-full md:w-1/2 px-4 py-3 rounded-xl border border-gray-200 focus:border-toroi-pink outline-none bg-white/50" />
              </div>
              <button type="button" className="px-8 py-3 bg-white border-2 border-red-500 text-red-500 font-bold rounded-xl hover:bg-red-50 transition-all shadow-sm">
                Update Password
              </button>
            </form>
          </div>

        </div>
      </div>

    </div>
  );
}