export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#58a6ff]/10 border border-[#58a6ff]/30 text-[#58a6ff] text-sm px-4 py-1 rounded-full mb-6">
          Classic Literature Meets Typing Mastery
        </div>
        <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
          Learn Typing by Retyping<br />
          <span className="text-[#58a6ff]">Classic Novels</span>
        </h1>
        <p className="text-xl text-[#8b949e] mb-10 max-w-2xl mx-auto">
          Practice typing chapter by chapter through Dickens, Austen, and Twain. Real-time WPM tracking, achievements, and reading comprehension — all in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Typing for $5/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto text-center">
          <div>
            <div className="text-3xl font-bold text-[#58a6ff]">50+</div>
            <div className="text-sm text-[#8b949e] mt-1">Classic Novels</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#58a6ff]">WPM</div>
            <div className="text-sm text-[#8b949e] mt-1">Live Tracking</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#58a6ff]">∞</div>
            <div className="text-sm text-[#8b949e] mt-1">Achievements</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/50 rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/5">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$5</div>
          <div className="text-[#8b949e] mb-8">per month, cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Access to 50+ public domain novels',
              'Real-time WPM & accuracy tracking',
              'Progress saved across sessions',
              'Gamified achievements & streaks',
              'Reading comprehension quizzes',
              'Personal typing speed history'
            ].map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started Now
          </a>
          <p className="text-[#8b949e] text-sm mt-4">No credit card trials. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Which novels are available?</h3>
            <p className="text-[#8b949e]">We include 50+ public domain classics — Pride and Prejudice, Oliver Twist, Adventures of Tom Sawyer, Moby Dick, and many more. New titles are added monthly.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How does WPM tracking work?</h3>
            <p className="text-[#8b949e]">As you type each chapter, we measure your words per minute and accuracy in real time. Your stats are saved so you can track improvement over days and weeks.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can I cancel my subscription?</h3>
            <p className="text-[#8b949e]">Yes — cancel anytime from your account dashboard. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Typing Practice Novels. All rights reserved.
      </footer>
    </main>
  )
}
