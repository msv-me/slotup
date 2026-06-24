import Link from 'next/link'
import { sheets } from '@/lib/sheets'
import Nav from '@/app/components/Nav'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-6">
          <p className="text-xs font-semibold tracking-widest text-blue-700 uppercase mb-1">Sign-Ups</p>
          <h1 className="font-display text-3xl font-bold text-gray-900">Pick your team</h1>
          <p className="text-gray-500 text-sm mt-1">Select a sign-up sheet below to claim a snack slot.</p>
        </div>
        <div className="flex flex-col gap-3">
          {sheets.map((sheet) => (
            <Link
              key={sheet.id}
              href={`/${sheet.id}`}
              className="block bg-white border border-gray-200 rounded-xl px-5 py-4 shadow-sm hover:border-gray-300 hover:shadow transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">{sheet.title}</p>
                  <p className="text-gray-400 text-sm mt-0.5">{sheet.slots.length} games · UCC Jamboree</p>
                </div>
                <span className="text-gray-300 text-lg">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
