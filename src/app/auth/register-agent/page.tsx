"use client";

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterAgent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'error' | 'success', text: string } | null>(null);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // Supabase Auth Sign Up
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          role: 'agent' // Tagging this user as an agent
        }
      }
    });

    if (error) {
      setMessage({ type: 'error', text: error.message });
    } else {
      setMessage({ type: 'success', text: 'Registration successful! Please check your email to verify your account.' });
      // Optional: router.push('/auth/login') after a delay
    }
    setLoading(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2 text-center">Become an Agent</h2>
      <p className="text-gray-400 text-sm text-center mb-8">Create your official Toroi Partner account.</p>

      {message && (
        <div className={`p-3 mb-4 border rounded-xl text-sm text-center ${message.type === 'error' ? 'bg-red-500/20 border-red-500 text-red-200' : 'bg-green-500/20 border-green-500 text-green-200'}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Full Name</label>
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:border-toroi-pink outline-none transition-all" placeholder="e.g., John Doe" />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Email Address</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:border-toroi-pink outline-none transition-all" placeholder="agent@example.com" />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Create Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:border-toroi-pink outline-none transition-all" placeholder="••••••••" />
        </div>
        
        <button type="submit" disabled={loading} className="w-full py-4 bg-toroi-pink text-white rounded-xl font-extrabold hover:bg-fuchsia-500 transition-all shadow-[0_0_15px_rgba(232,28,255,0.4)] mt-6">
          {loading ? 'Creating Account...' : 'Register Account'}
        </button>
      </form>

      <p className="text-center text-sm text-gray-400 mt-8">
        Already have an account? <Link href="/auth/login" className="text-toroi-gold font-bold hover:underline">Log In</Link>
      </p>
    </div>
  );
}