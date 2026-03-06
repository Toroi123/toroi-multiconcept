import Link from 'next/link';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-toroi-purple flex flex-col justify-center items-center relative overflow-hidden p-6">
      
      {/* Animated Glowing Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-toroi-pink mix-blend-multiply filter blur-[128px] opacity-40 animate-blob pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-toroi-gold mix-blend-multiply filter blur-[128px] opacity-30 animate-blob animation-delay-4000 pointer-events-none z-0"></div>

      <div className="w-full max-w-md relative z-10">
        
        {/* Logo Header */}
        <div className="text-center mb-8">
          <Link href="/" className="text-3xl font-extrabold text-white tracking-tighter">
            TOROI<span className="text-toroi-pink">.</span>
          </Link>
        </div>

        {/* The Glassmorphism Card that will wrap our forms */}
        <div className="glass-dark p-8 md:p-10 rounded-[2rem] border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {children}
        </div>

      </div>
    </div>
  );
}