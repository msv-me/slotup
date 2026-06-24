import Link from 'next/link'
import { sheets } from '@/lib/sheets'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Slotup</h1>
        <p className="text-gray-500 mt-1.5 text-sm">Pick a sign-up sheet below</p>
      </div>
      <div className="flex flex-col gap-3 w-full max-w-sm">
        {sheets.map((sheet) => (
          <Link
            key={sheet.id}
            href={`/${sheet.id}`}
            className="block bg-white border border-gray-200 rounded-xl px-5 py-4 text-left hover:border-gray-300 hover:shadow-sm transition-all"
          >
            <p className="font-semibold text-gray-900">{sheet.title}</p>
            <p className="text-gray-400 text-sm mt-0.5">{sheet.slots.length} slots</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
