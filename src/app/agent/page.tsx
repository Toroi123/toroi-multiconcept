export default function Agent() {
  return (
    <div className="flex flex-col items-center bg-[#FAFAFF]">
      
      {/* HEADER SECTION */}
      <section className="w-full py-20 bg-toroi-purple text-white flex flex-col items-center text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-toroi-gold/20 blur-3xl rounded-full pointer-events-none"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-toroi-gold to-white">
          Start Your Telecom Business With Toroi
        </h1>
        <p className="relative z-10 text-lg md:text-xl text-toroi-lightGold max-w-2xl font-medium">
          Structured guidance for entrepreneurs to operate as NIN enrollment agents and telecom distributors.
        </p>
      </section>

      {/* INFO SECTION */}
      <section className="w-full py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Column: Info & Requirements */}
        <div>
          <h2 className="text-3xl font-bold text-toroi-purple mb-6">Why Join Our Network?</h2>
          <ul className="space-y-4 mb-10">
            {['Structured onboarding process', 'Business growth support', 'Access to telecom products', 'Commission opportunities', 'Ongoing updates & compliance guidance'].map((item, i) => (
              <li key={i} className="flex items-center text-gray-700 font-medium bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <span className="text-toroi-pink text-xl mr-4">✔</span> {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-toroi-purple mb-4">Agent Basic Requirements</h2>
          <div className="bg-toroi-purple/5 p-6 rounded-2xl border-l-4 border-toroi-gold">
            <ul className="space-y-3 text-gray-700">
              <li><strong className="text-toroi-purple">1.</strong> Basic knowledge of telecom services</li>
              <li><strong className="text-toroi-purple">2.</strong> Commitment to compliance standards</li>
              <li><strong className="text-toroi-purple">3.</strong> Willingness to invest in licensing & device setup</li>
              <li><strong className="text-toroi-purple">4.</strong> Strong customer service orientation</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Application Form */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border-t-8 border-toroi-pink">
          <h3 className="text-2xl font-bold text-toroi-purple mb-2">Apply Now</h3>
          <p className="text-gray-500 mb-8 text-sm">Fill the form below and our team will contact you.</p>
          
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-toroi-pink focus:ring-2 focus:ring-toroi-pink/20 outline-none transition-all" placeholder="Enter your full name" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
              <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-toroi-pink focus:ring-2 focus:ring-toroi-pink/20 outline-none transition-all" placeholder="e.g., 08012345678" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Location</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-toroi-pink focus:ring-2 focus:ring-toroi-pink/20 outline-none transition-all" placeholder="City & State" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Previous Experience (If any)</label>
              <textarea className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-toroi-pink focus:ring-2 focus:ring-toroi-pink/20 outline-none transition-all" rows={3} placeholder="Tell us about your background..."></textarea>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Capital Readiness</label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-toroi-pink focus:ring-2 focus:ring-toroi-pink/20 outline-none transition-all bg-white">
                <option>Ready to invest immediately</option>
                <option>Gathering funds</option>
                <option>Need more information first</option>
              </select>
            </div>
            <button type="button" className="w-full py-4 bg-toroi-gold text-toroi-purple font-extrabold rounded-xl hover:bg-yellow-300 transition-colors shadow-lg mt-4">
              Submit Application
            </button>
          </form>
        </div>

      </section>
    </div>
  );
}