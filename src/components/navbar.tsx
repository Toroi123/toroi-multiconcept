import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-toroi-purple border-b border-toroi-pink/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-extrabold text-white tracking-tighter">
              TOROI<span className="text-toroi-pink">.</span>
            </Link>
          </div>
          
          {/* Main Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-sm font-semibold text-toroi-lightGold hover:text-toroi-pink transition-colors">Home</Link>
            <Link href="/about" className="text-sm font-semibold text-white hover:text-toroi-pink transition-colors">About</Link>
            <Link href="/services" className="text-sm font-semibold text-white hover:text-toroi-pink transition-colors">Services</Link>
            <Link href="/shop" className="text-sm font-semibold text-white hover:text-toroi-pink transition-colors">E-Shop</Link>
            <Link href="/contact" className="text-sm font-semibold text-white hover:text-toroi-pink transition-colors">Contact</Link>
          </div>

          {/* Agent Portal Action Button */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/portal" 
              className="hidden md:inline-flex items-center justify-center px-6 py-2 border-2 border-toroi-gold text-sm font-bold rounded-full text-toroi-purple bg-toroi-gold hover:bg-toroi-pink hover:border-toroi-pink hover:text-white transition-all shadow-[0_0_10px_rgba(251,191,36,0.6)]"
            >
              🔒 Agent Portal
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}