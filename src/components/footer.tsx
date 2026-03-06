import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-toroi-purple border-t-4 border-toroi-pink text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand & Description */}
          <div>
            <Link href="/" className="text-2xl font-extrabold tracking-tighter inline-block mb-4">
              TOROI<span className="text-toroi-pink">.</span>
            </Link>
            <p className="text-toroi-lightGold text-sm leading-relaxed max-w-xs">
              TOROI MULTICONCEPT LTD is a structured telecommunication solutions company committed to expanding access to digital identity services and connectivity across Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-toroi-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-300 hover:text-toroi-pink transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sm text-gray-300 hover:text-toroi-pink transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-sm text-gray-300 hover:text-toroi-pink transition-colors">Services</Link></li>
              <li><Link href="/agent" className="text-sm text-gray-300 hover:text-toroi-pink transition-colors">Become an Agent</Link></li>
              <li><Link href="/partners" className="text-sm text-gray-300 hover:text-toroi-pink transition-colors">Partners</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-bold text-toroi-gold mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start">
                <span className="mr-2 text-toroi-pink">📍</span>
                <span>3b/13b, Ileke Complex beside Gastab Filling Station Sango Poly Road, Ibadan, Oyo State</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-toroi-pink">📞</span>
                <span>+234 806 645 8648 / +234 816 120 9704</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-toroi-pink">✉️</span>
                <span>toroimulticonceptlimited@gmail.com</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-toroi-pink">🕒</span>
                <span>Mon – Sat (9am to 5pm)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-toroi-lightPurple flex flex-col md:flex-row justify-between items-center text-xs text-toroi-lightGold">
          <p>© 2026 TOROI MULTICONCEPT LTD. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}