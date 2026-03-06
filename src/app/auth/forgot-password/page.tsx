"use client";

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'error' | 'success', text: string } | null>(null);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/update-password`,
    });

    if (error) {
      setMessage({ type: 'error', text: error.message });
    } else {
      setMessage({ type: 'success', text: 'Password reset instructions have been sent to your email.' });
    }
    setLoading(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2 text-center">Reset Password</h2>
      <p className="text-gray-400 text-sm text-center mb-8">Enter your email to receive a reset link.</p>

      {message && (
        <div className={`p-3 mb-4 border rounded-xl text-sm text-center ${message.type === 'error' ? 'bg-red-500/20 border-red-500 text-red-200' : 'bg-green-500/20 border-green-500 text-green-200'}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleReset} className="space-y-5">
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Email Address</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:border-toroi-pink outline-none transition-all" placeholder="Enter your email" />
        </div>
        
        <button type="submit" disabled={loading} className="w-full py-4 bg-toroi-lightPurple text-white rounded-xl font-extrabold hover:bg-fuchsia-600 transition-all mt-4">
          {loading ? 'Sending...' : 'Send Reset Link'}
        </button>
      </form>

      <div className="text-center mt-8">
        <Link href="/auth/login" className="text-sm text-toroi-gold font-bold hover:underline">← Back to Log In</Link>
      </div>
    </div>
  );
}