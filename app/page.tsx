import Link from 'next/link'
import { sheets } from '@/lib/sheets'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Slotup</h1>
      <p className="text-gray-400 mb-10 text-sm">Pick a sign-up sheet below</p>
      <div className="flex flex-col gap-3 w-full max-w-sm">
        {sheets.map((sheet) => (
          <Link
            key={sheet.id}
            href={`/${sheet.id}`}
            className="block bg-gray-900 rounded-xl px-5 py-4 text-left hover:bg-gray-800 transition-colors"
          >
            <p className="font-semibold text-white">{sheet.title}</p>
            <p className="text-gray-400 text-sm mt-0.5">{sheet.slots.length} slots</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
