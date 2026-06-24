import Nav from '@/app/components/Nav'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <div className="max-w-2xl mx-auto px-4 py-10">

        {/* Hero */}
        <div className="mb-8">
          <p className="text-xs font-semibold tracking-widest text-blue-700 uppercase mb-3">Youth sports · Simple</p>
          <h1 className="font-display text-4xl font-bold text-gray-900 leading-tight mb-3">
            Sign-ups that<br />just work.
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-sm">
            No app. No account. Coach shares a link — parents tap and claim a slot.
          </p>
        </div>

        {/* Feature tiles */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white border border-gray-200 rounded-xl px-4 py-4 shadow-sm">
            <p className="text-xl mb-2">🍎</p>
            <p className="font-semibold text-gray-900 text-sm leading-snug">Snack sign-ups</p>
            <p className="text-gray-400 text-xs mt-0.5">One slot per game</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl px-4 py-4 shadow-sm">
            <p className="text-xl mb-2">📱</p>
            <p className="font-semibold text-gray-900 text-sm leading-snug">Any phone</p>
            <p className="text-gray-400 text-xs mt-0.5">No download needed</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl px-4 py-4 shadow-sm">
            <p className="text-xl mb-2">🚫</p>
            <p className="font-semibold text-gray-900 text-sm leading-snug">No ads, ever</p>
            <p className="text-gray-400 text-xs mt-0.5">Free for coaches</p>
          </div>
        </div>

        {/* How it works */}
        <div className="bg-white border border-gray-200 rounded-xl px-5 py-5 shadow-sm mb-4">
          <p className="text-xs font-semibold tracking-widest text-blue-700 uppercase mb-4">How it works</p>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-blue-50 text-blue-700 text-xs font-bold flex items-center justify-center">1</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Coach sets up the team page</p>
                <p className="text-gray-400 text-xs mt-0.5">Games are added as the schedule fills in — no code changes</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-blue-50 text-blue-700 text-xs font-bold flex items-center justify-center">2</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Share one link with the team</p>
                <p className="text-gray-400 text-xs mt-0.5">Works in any group chat, email, or app</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-blue-50 text-blue-700 text-xs font-bold flex items-center justify-center">3</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Parents tap, enter their name, done</p>
                <p className="text-gray-400 text-xs mt-0.5">Slot is locked instantly — no double-claims</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-700 rounded-xl px-5 py-5 text-white">
          <p className="font-display font-bold text-lg mb-1">Set up your team</p>
          <p className="text-blue-200 text-sm mb-4">For coaches and team managers. Takes about 5 minutes.</p>
          <a
            href="mailto:hello@slotup.xyz"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold text-sm rounded-lg px-4 py-2.5 hover:bg-blue-50 transition-colors"
          >
            Get in touch →
          </a>
        </div>

        <p className="text-center text-gray-300 text-xs mt-10">Slotup · No ads, ever.</p>
      </div>
    </div>
  )
}
