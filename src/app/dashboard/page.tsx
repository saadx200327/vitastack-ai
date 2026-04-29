'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase';
import type { User } from '@supabase/supabase-js';

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [aiPlan, setAiPlan] = useState('');
  const [planLoading, setPlanLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/auth/login');
      } else {
        setUser(user);
        setLoading(false);
      }
    };
    getUser();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  const generatePlan = async () => {
    setPlanLoading(true);
    try {
      const response = await fetch('/api/generate-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user?.id })
      });
      const data = await response.json();
      setAiPlan(data.plan);
    } catch (err) {
      console.error(err);
    }
    setPlanLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold text-green-700">VitaStack AI</span>
        <div className="flex items-center gap-4">
          <span className="text-gray-600 text-sm">{user?.email}</span>
          <button onClick={handleSignOut} className="px-4 py-2 text-sm text-red-600 hover:text-red-800 font-medium">Sign Out</button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {user?.user_metadata?.full_name || 'friend'}!
        </h1>
        <p className="text-gray-600 mb-8">Here's your wellness dashboard</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl mb-2">🔥</div>
            <h3 className="font-semibold text-gray-900">Habits Today</h3>
            <p className="text-3xl font-bold text-green-600 mt-1">0/5</p>
            <p className="text-sm text-gray-500">habits completed</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="font-semibold text-gray-900">Wellness Score</h3>
            <p className="text-3xl font-bold text-blue-600 mt-1">72</p>
            <p className="text-sm text-gray-500">out of 100</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl mb-2">💪</div>
            <h3 className="font-semibold text-gray-900">Streak</h3>
            <p className="text-3xl font-bold text-orange-600 mt-1">0</p>
            <p className="text-sm text-gray-500">days</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">🤖 AI Wellness Plan</h2>
            <button
              onClick={generatePlan}
              disabled={planLoading}
              className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 disabled:opacity-50"
            >
              {planLoading ? 'Generating...' : 'Generate My Plan'}
            </button>
          </div>
          {aiPlan ? (
            <div className="prose max-w-none">
              <pre className="whitespace-pre-wrap text-gray-700 text-sm leading-relaxed">{aiPlan}</pre>
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">Click "Generate My Plan" to get your personalized AI wellness recommendations</p>
          )}
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">📊 Today's Habits</h2>
          <p className="text-gray-500 text-center py-8">No habits tracked yet. Your habit log will appear here.</p>
        </div>
      </div>
    </main>
  );
}
