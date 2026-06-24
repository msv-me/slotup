import Nav from '@/app/components/Nav'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4 py-16 sm:py-20">
          <p className="text-xs font-semibold tracking-widest text-brand-700 uppercase mb-4">
            Youth sports · Free · No account needed
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-5">
            Snack sign-ups,<br />simplified.
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-md mb-8">
            Coach shares a link. Parents tap a game and enter their name. Done — no app, no account, no group chat chaos.
          </p>
          <a
            href="mailto:hello@slotup.xyz"
            className="inline-flex items-center gap-2 bg-brand-700 hover:bg-brand-600 text-white font-semibold rounded-xl px-6 py-3 text-sm transition-colors shadow-sm"
          >
            Set up your team →
          </a>
        </div>
      </div>

      {/* Stats strip */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 py-6 grid grid-cols-3 gap-4">
          <div>
            <p className="text-2xl font-bold text-brand-700 font-display">0</p>
            <p className="text-xs text-gray-400 mt-0.5">apps to download</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-brand-700 font-display">0</p>
            <p className="text-xs text-gray-400 mt-0.5">accounts required</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-brand-700 font-display">0</p>
            <p className="text-xs text-gray-400 mt-0.5">ads, ever</p>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="max-w-2xl mx-auto px-4 py-12">
        <p className="text-xs font-semibold tracking-widest text-brand-700 uppercase mb-6">How it works</p>

        <div className="flex flex-col gap-px border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="bg-white px-5 py-5 flex items-start gap-4">
            <span className="shrink-0 w-7 h-7 rounded-full bg-brand-50 text-brand-700 text-xs font-bold flex items-center justify-center mt-0.5">1</span>
            <div>
              <p className="font-semibold text-gray-900">Coach adds games as they're scheduled</p>
              <p className="text-gray-400 text-sm mt-0.5">New games appear on the sign-up page instantly — no code changes, no redeploys</p>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-5 flex items-start gap-4">
            <span className="shrink-0 w-7 h-7 rounded-full bg-brand-50 text-brand-700 text-xs font-bold flex items-center justify-center mt-0.5">2</span>
            <div>
              <p className="font-semibold text-gray-900">Share one link in your group chat</p>
              <p className="text-gray-400 text-sm mt-0.5">Works in iMessage, WhatsApp, email, LeagueApps — anywhere</p>
            </div>
          </div>
          <div className="bg-white px-5 py-5 flex items-start gap-4">
            <span className="shrink-0 w-7 h-7 rounded-full bg-brand-50 text-brand-700 text-xs font-bold flex items-center justify-center mt-0.5">3</span>
            <div>
              <p className="font-semibold text-gray-900">Parents tap a game and enter their name</p>
              <p className="text-gray-400 text-sm mt-0.5">Slot locks instantly — no double-claims, no confusion</p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature cards */}
      <div className="max-w-2xl mx-auto px-4 pb-12">
        <p className="text-xs font-semibold tracking-widest text-brand-700 uppercase mb-6">Why coaches love it</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white border border-gray-200 rounded-2xl px-5 py-5 shadow-sm">
            <p className="text-2xl mb-3">🍎</p>
            <p className="font-semibold text-gray-900 text-sm">One slot per game</p>
            <p className="text-gray-400 text-xs mt-1 leading-relaxed">Each game has exactly one snack slot. First to claim it wins.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl px-5 py-5 shadow-sm">
            <p className="text-2xl mb-3">📱</p>
            <p className="font-semibold text-gray-900 text-sm">Works on any device</p>
            <p className="text-gray-400 text-xs mt-1 leading-relaxed">No app store. Opens in Safari, Chrome, anywhere.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl px-5 py-5 shadow-sm">
            <p className="text-2xl mb-3">⚡</p>
            <p className="font-semibold text-gray-900 text-sm">Add games anytime</p>
            <p className="text-gray-400 text-xs mt-1 leading-relaxed">Schedule trickles in? Add games to Supabase as they come.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl px-5 py-5 shadow-sm">
            <p className="text-2xl mb-3">🔒</p>
            <p className="font-semibold text-gray-900 text-sm">No double-claims</p>
            <p className="text-gray-400 text-xs mt-1 leading-relaxed">Database-level locking. Two parents can't claim the same slot.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-2xl mx-auto px-4 pb-16">
        <div className="bg-brand-700 rounded-2xl px-6 py-7 text-white">
          <p className="font-display font-bold text-xl mb-1">Ready to set up your team?</p>
          <p className="text-brand-200 text-sm mb-5">Takes about 5 minutes. Free for coaches.</p>
          <a
            href="mailto:hello@slotup.xyz"
            className="inline-flex items-center gap-2 bg-white text-brand-700 font-semibold text-sm rounded-xl px-5 py-2.5 hover:bg-brand-50 transition-colors"
          >
            Get in touch →
          </a>
        </div>
      </div>

      <p className="text-center text-gray-300 text-xs pb-10">Slotup · No ads, ever.</p>
    </div>
  )
}
