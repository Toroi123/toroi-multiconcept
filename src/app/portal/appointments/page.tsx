export default function Appointments() {
  return (
    <div className="p-6 md:p-10 relative z-10">
      
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 glass-light p-8 rounded-[2rem] border-t-4 border-toroi-pink">
        <div>
          <h1 className="text-3xl font-extrabold text-toroi-purple">Your Appointments</h1>
          <p className="text-gray-600 font-medium mt-1">Manage your upcoming SIM and NIN enrollment schedules.</p>
        </div>
        <button className="mt-4 md:mt-0 px-6 py-3 bg-white border border-toroi-pink text-toroi-pink rounded-xl font-bold hover:bg-toroi-pink hover:text-white transition-all shadow-sm">
          + New Booking
        </button>
      </header>

      {/* Appointments Timeline/List */}
      <div className="glass-light p-8 rounded-[2rem] border border-white/40">
        <h2 className="text-2xl font-bold text-toroi-purple mb-8">Upcoming Schedule</h2>
        
        <div className="relative border-l-2 border-toroi-lightPurple/30 ml-4 space-y-10 pb-4">
          
          {/* Appointment Item 1 */}
          <div className="relative pl-8">
            <span className="absolute -left-[11px] top-1 w-5 h-5 bg-toroi-pink rounded-full border-4 border-white shadow-sm"></span>
            <div className="bg-white/70 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-toroi-pink transition-colors">Group NIN Enrollment (5 People)</h3>
                <span className="bg-toroi-pink/10 text-toroi-pink px-3 py-1 rounded-md text-xs font-bold">Today</span>
              </div>
              <p className="text-sm text-gray-500 font-medium mb-4">Location: Toroi HQ, Ibadan • Client: Adebayo & Co.</p>
              <div className="flex items-center text-sm font-bold text-toroi-purple bg-toroi-purple/5 inline-flex px-4 py-2 rounded-lg">
                <span className="mr-2">⏰</span> 2:00 PM - 4:00 PM
              </div>
            </div>
          </div>

          {/* Appointment Item 2 */}
          <div className="relative pl-8">
            <span className="absolute -left-[11px] top-1 w-5 h-5 bg-toroi-gold rounded-full border-4 border-white shadow-sm"></span>
            <div className="bg-white/70 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-toroi-gold transition-colors">SIM Swap / Welcome Back</h3>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-xs font-bold">Tomorrow</span>
              </div>
              <p className="text-sm text-gray-500 font-medium mb-4">Location: Branch Office • Network: MTN</p>
              <div className="flex items-center text-sm font-bold text-gray-700 bg-gray-50 inline-flex px-4 py-2 rounded-lg border border-gray-200">
                <span className="mr-2">⏰</span> 10:30 AM
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}