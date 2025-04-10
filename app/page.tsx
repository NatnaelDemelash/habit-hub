'use client';

import { useRouter } from 'next/navigation';
import { useUser } from '@/hooks/useUser';
import { supabase } from '@/lib/supabase';
import AddHabit from '@/components/AddHabit';
import HabitList from '@/components/HabitList';

export default function HomePage() {
  const { user } = useUser();
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <main className="h-screen bg-[#0d1117] text-white flex flex-col items-center justify-center text-center px-4 py-10 gap-10">
      <div className="bg-[#161b22] px-6 py-4 rounded-2xl shadow-lg w-full max-w-4xl flex flex-col items-center gap-6">
        <h1 className="text-5xl font-extrabold">
          <span className="text-[#e7f826ea]">Upgrade your life</span> with tiny
          habits
        </h1>

        <p className="text-gray-400 text-lg max-w-xl">
          Track your habits and build a better you. Habits Hub is your personal
          assistant for habit formation and productivity.
        </p>

        {!user ? (
          <button
            onClick={() => router.push('/auth')}
            className="bg-green-600 text-white px-6 py-3 text-lg font-semibold rounded-xl transition cursor-pointer"
          >
            Start Tracking Your Habits →
          </button>
        ) : (
          // <div className="flex flex-col items-center gap-4">
          //   <p className="text-xl">You're logged in as {user.email}</p>
          //   <button
          //     onClick={handleLogout}
          //     className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          //   >
          //     Sign out
          //   </button>
          // </div>
          <div>
            <h1 className="text-2xl font-bold mb-4">Your Habits</h1>
            <AddHabit />
            <HabitList />
          </div>
        )}
      </div>

      <section className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-4 text-[#e7f826ea]">
          Why Choose Habits Hub?
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300 text-left px-4">
          <li>✅ Easy-to-use interface</li>
          <li>🎯 Customizable habit tracking</li>
          <li>📈 Progress tracking and analytics</li>
          <li>🔔 Reminders and notifications</li>
          <li>🌱 Community support and challenges</li>
        </ul>
      </section>

      <section className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-4 text-[#e7f826ea]">
          What Our Users Say
        </h2>
        <div className="flex gap-6 px-4">
          <blockquote className="bg-[#161b22] p-4 rounded-xl text-gray-300">
            <p>
              "Habits Hub has been a game-changer for me. I've been able to
              track my habits and see real progress."
            </p>
            <cite className="text-gray-500 mt-2 block">- Jane Doe</cite>
          </blockquote>
          <blockquote className="bg-[#161b22] p-4 rounded-xl text-gray-300">
            <p>
              "The reminders and analytics are incredibly helpful. I highly
              recommend Habits Hub."
            </p>
            <cite className="text-gray-500 mt-2 block">- John Smith</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
