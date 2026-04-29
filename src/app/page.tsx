import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-green-700">VitaStack AI</span>
          </div>
          <div className="flex gap-4">
            <Link href="/auth/login" className="px-4 py-2 text-green-700 hover:text-green-900 font-medium">
              Sign In
            </Link>
            <Link href="/auth/signup" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium">
              Get Started
            </Link>
          </div>
        </nav>

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Your AI-Powered
            <span className="text-green-600"> Wellness</span> Dashboard
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Personalized wellness plans, habit tracking, and supplement guidance — all powered by Gemini AI.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/auth/signup" className="px-8 py-4 bg-green-600 text-white rounded-xl text-lg font-semibold hover:bg-green-700 transition-colors">
              Start Your Journey
            </Link>
            <Link href="/auth/login" className="px-8 py-4 bg-white text-green-700 border-2 border-green-600 rounded-xl text-lg font-semibold hover:bg-green-50 transition-colors">
              Sign In
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Personalized Plans</h3>
            <p className="text-gray-600">AI-generated nutrition and fitness plans tailored to your unique goals and preferences.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">Habit Tracking</h3>
            <p className="text-gray-600">Track your daily habits and get insights into your progress over time.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-4xl mb-4">💊</div>
            <h3 className="text-xl font-semibold mb-2">Supplement Guidance</h3>
            <p className="text-gray-600">Get personalized supplement recommendations backed by your health data.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
