import Nav from '@/app/components/Nav'
import RequestForm from '@/app/components/RequestForm'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4 py-16 sm:py-20">
          <p className="text-xs font-semibold tracking-widest text-brand-700 uppercase mb-4">
            Free · No account needed
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-4">
            Claim a slot<br />in seconds.
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-md mb-2">
            No account, no app, no friction.
          </p>
          <p className="text-gray-400 text-base leading-relaxed max-w-md mb-8">
            Create a sign-up page, share a link, and let people pick their spot — sports, volunteering, potlucks, anything.
          </p>
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 bg-brand-700 hover:bg-brand-600 text-white font-semibold rounded-xl px-6 py-3 text-sm transition-colors shadow-sm"
          >
            Set up your page →
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
              <p className="font-semibold text-gray-900">Create a page with your slots</p>
              <p className="text-gray-400 text-sm mt-0.5">Add as many slots as you need — games, shifts, dates, tasks. Add more anytime.</p>
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-5 flex items-start gap-4">
            <span className="shrink-0 w-7 h-7 rounded-full bg-brand-50 text-brand-700 text-xs font-bold flex items-center justify-center mt-0.5">2</span>
            <div>
              <p className="font-semibold text-gray-900">Share one link</p>
              <p className="text-gray-400 text-sm mt-0.5">Drop it in a group chat, email, or anywhere. No login required to claim.</p>
            </div>
          </div>
          <div className="bg-white px-5 py-5 flex items-start gap-4">
            <span className="shrink-0 w-7 h-7 rounded-full bg-brand-50 text-brand-700 text-xs font-bold flex items-center justify-center mt-0.5">3</span>
            <div>
              <p className="font-semibold text-gray-900">People tap and claim</p>
              <p className="text-gray-400 text-sm mt-0.5">Enter a name, done. Slot locks instantly — no double-claims.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Use cases */}
      <div className="max-w-2xl mx-auto px-4 pb-12">
        <p className="text-xs font-semibold tracking-widest text-brand-700 uppercase mb-6">Works for anything</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white border border-gray-200 rounded-2xl px-5 py-5 shadow-sm">
            <p className="text-2xl mb-3">⚽</p>
            <p className="font-semibold text-gray-900 text-sm">Youth sports</p>
            <p className="text-gray-400 text-xs mt-1 leading-relaxed">Snack duty, carpool, post-game slots — one link per team.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl px-5 py-5 shadow-sm">
            <p className="text-2xl mb-3">⛪</p>
            <p className="font-semibold text-gray-900 text-sm">Church volunteering</p>
            <p className="text-gray-400 text-xs mt-1 leading-relaxed">Greeter shifts, setup crews, nursery rotations.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl px-5 py-5 shadow-sm">
            <p className="text-2xl mb-3">🏫</p>
            <p className="font-semibold text-gray-900 text-sm">School & PTA</p>
            <p className="text-gray-400 text-xs mt-1 leading-relaxed">Classroom helpers, field trip chaperones, bake sale items.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl px-5 py-5 shadow-sm">
            <p className="text-2xl mb-3">🍽️</p>
            <p className="font-semibold text-gray-900 text-sm">Potlucks & events</p>
            <p className="text-gray-400 text-xs mt-1 leading-relaxed">Who's bringing what — no spreadsheet needed.</p>
          </div>
        </div>
      </div>

      {/* CTA with form */}
      <div className="max-w-2xl mx-auto px-4 pb-16" id="get-started">
        <div className="bg-brand-700 rounded-2xl px-6 py-7 text-white">
          <p className="font-display font-bold text-xl mb-1">Set up your page</p>
          <p className="text-brand-200 text-sm mb-5">Free for organizers. Takes about 5 minutes.</p>
          <RequestForm />
        </div>
      </div>

      <p className="text-center text-gray-300 text-xs pb-10">Slotup · No ads, ever.</p>
    </div>
  )
}
