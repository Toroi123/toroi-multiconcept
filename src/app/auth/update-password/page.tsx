"use client";

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function UpdatePassword() {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'error' | 'success', text: string } | null>(null);
  const router = useRouter();

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const { error } = await supabase.auth.updateUser({
      password: password
    });

    if (error) {
      setMessage({ type: 'error', text: error.message });
    } else {
      setMessage({ type: 'success', text: 'Password updated successfully! Redirecting...' });
      setTimeout(() => router.push('/portal'), 2000);
    }
    setLoading(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2 text-center">Create New Password</h2>
      <p className="text-gray-400 text-sm text-center mb-8">Please enter your new secure password.</p>

      {message && (
        <div className={`p-3 mb-4 border rounded-xl text-sm text-center ${message.type === 'error' ? 'bg-red-500/20 border-red-500 text-red-200' : 'bg-green-500/20 border-green-500 text-green-200'}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleUpdate} className="space-y-5">
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">New Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white focus:border-toroi-pink outline-none transition-all" placeholder="••••••••" />
        </div>
        
        <button type="submit" disabled={loading} className="w-full py-4 bg-toroi-gold text-toroi-purple rounded-xl font-extrabold hover:bg-yellow-400 transition-all mt-4">
          {loading ? 'Updating...' : 'Update Password'}
        </button>
      </form>
    </div>
  );
}