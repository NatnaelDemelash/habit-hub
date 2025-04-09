'use client';

import { supabase } from '@/lib/supabase';
import { useUser } from '@/hooks/useUser';

export default function AuthPage() {
  const { user } = useUser();

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      {!user ? (
        <>
          <h1 className="text-2xl font-semibold">Welcome to Habits Hub 👋</h1>
          <button
            onClick={handleLogin}
            className="bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-900 transition"
          >
            Sign in with GitHub
          </button>
        </>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <img
            src={user.user_metadata.avatar_url}
            className="w-20 h-20 rounded-full"
          />
          <p className="text-xl">{user.user_metadata.full_name}</p>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
