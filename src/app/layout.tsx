import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Changed to lowercase to match standard safe naming conventions
import Navbar from '@/components/navbar'; 
import Footer from '@/components/footer'; 

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Toroi Multiconcept Limited',
  description: 'Empowering Connectivity & Digital Identity Across Nigeria',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-[#FAFAFF] antialiased`}>
        
        {/* Persistent Navigation */}
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Global Footer */}
        <Footer /> 
        
      </body>
    </html>
  );
}