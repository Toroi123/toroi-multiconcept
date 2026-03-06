"use client";

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      // If successful, route them to the Agent Portal
      router.push('/portal');
    }
    setLoading(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2 text-center">Welcome Back</h2>
      <p className="text-gray-400 text-sm text-center mb-8">Log in to your Toroi dashboard.</p>

      {error && <div className="p-3 mb-4 bg-red-500/20 border border-red-500 rounded-xl text-red-200 text-sm text-center">{error}</div>}

      <form onSubmit={handleLogin} className="space-y-5">
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:border-toroi-pink outline-none transition-all" placeholder="Enter your email" />
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Password</label>
            <Link href="/auth/forgot-password" className="text-xs font-bold text-toroi-pink hover:text-toroi-lightGold transition-colors">Forgot?</Link>
          </div>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:border-toroi-pink outline-none transition-all" placeholder="••••••••" />
        </div>
        
        <button type="submit" disabled={loading} className="w-full py-4 bg-toroi-gold text-toroi-purple rounded-xl font-extrabold hover:bg-yellow-400 transition-all shadow-[0_0_15px_rgba(251,191,36,0.3)] mt-6">
          {loading ? 'Authenticating...' : 'Sign In'}
        </button>
      </form>

      <p className="text-center text-sm text-gray-400 mt-8">
        Don't have an account? <Link href="/auth/register-agent" className="text-toroi-gold font-bold hover:underline">Register as Agent</Link>
      </p>
    </div>
  );
}