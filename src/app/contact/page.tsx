export default function Contact() {
  return (
    <div className="flex flex-col items-center bg-[#FAFAFF] min-h-screen">
      
      <section className="w-full py-20 bg-toroi-purple text-white flex flex-col items-center text-center px-6 relative">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-toroi-gold">
          Get In Touch
        </h1>
        <p className="text-lg text-toroi-lightGold max-w-xl font-medium">
          We are available to serve you and answer all inquiries.
        </p>
      </section>

      <section className="w-full py-20 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Details Cards */}
          <div className="space-y-6">
            
            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-toroi-pink flex items-start">
              <span className="text-2xl mr-4 bg-toroi-purple/10 p-3 rounded-full">📞</span>
              <div>
                <h3 className="text-lg font-bold text-toroi-purple mb-1">Call Us</h3>
                <p className="text-gray-600 font-medium">+234 806 645 8648</p>
                <p className="text-gray-600 font-medium">+234 816 120 9704</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-toroi-gold flex items-start">
              <span className="text-2xl mr-4 bg-toroi-purple/10 p-3 rounded-full">✉️</span>
              <div>
                <h3 className="text-lg font-bold text-toroi-purple mb-1">Email Us</h3>
                <p className="text-gray-600 font-medium">toroimulticonceptlimited@gmail.com</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-toroi-lightPurple flex items-start">
              <span className="text-2xl mr-4 bg-toroi-purple/10 p-3 rounded-full">📍</span>
              <div>
                <h3 className="text-lg font-bold text-toroi-purple mb-1">Office Address</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  3b/13b, Ileke Complex beside Gastab Filling Station<br/>
                  Sango Poly Road<br/>
                  Ibadan, Oyo State
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-gray-800 flex items-start">
              <span className="text-2xl mr-4 bg-toroi-purple/10 p-3 rounded-full">🕒</span>
              <div>
                <h3 className="text-lg font-bold text-toroi-purple mb-1">Business Hours</h3>
                <p className="text-gray-600 font-medium">Monday – Saturday</p>
                <p className="text-gray-500 text-sm">(9:00 AM to 5:00 PM)</p>
              </div>
            </div>

          </div>

          {/* Quick Contact / WhatsApp Action */}
          <div className="bg-toroi-purple p-10 rounded-3xl shadow-xl flex flex-col justify-center text-center border-t-8 border-toroi-gold">
            <h3 className="text-2xl font-bold text-white mb-4">Fastest Response?</h3>
            <p className="text-toroi-lightGold mb-8">
              Click the button below to message our support team directly on WhatsApp for instant assistance, bookings, and inquiries.
            </p>
            {/* Replace the href with your actual wa.me link */}
            <a 
              href="https://wa.me/2348161209704" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-5 bg-green-500 text-white rounded-full font-bold text-lg hover:bg-green-600 transition-colors shadow-lg flex items-center justify-center mx-auto"
            >
              <span className="mr-2 text-2xl">💬</span> Message on WhatsApp
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}