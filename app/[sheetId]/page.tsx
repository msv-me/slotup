import { notFound } from 'next/navigation'
import { getSheet } from '@/lib/sheets'
import { supabase } from '@/lib/supabase'
import ClaimForm from './ClaimForm'

export const revalidate = 0

type Signup = { slot_id: string; claimer_name: string }

export default async function SheetPage({ params }: { params: Promise<{ sheetId: string }> }) {
  const { sheetId } = await params
  const sheet = getSheet(sheetId)
  if (!sheet) notFound()

  const { data } = await supabase
    .from('signups')
    .select('slot_id, claimer_name')
    .eq('sheet_id', sheetId)

  const claimed = new Map<string, string>(
    (data as Signup[] ?? []).map((r) => [r.slot_id, r.claimer_name])
  )

  const claimedCount = claimed.size
  const totalSlots = sheet.slots.length

  return (
    <main className="min-h-screen px-4 py-10 max-w-md mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight">{sheet.title}</h1>
        <p className="text-gray-400 text-sm mt-1.5 leading-relaxed">{sheet.description}</p>
        <p className="text-gray-500 text-xs mt-3">
          {claimedCount} of {totalSlots} slots claimed
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {sheet.slots.map((slot) => {
          const claimer = claimed.get(slot.id)
          return (
            <div
              key={slot.id}
              className={`rounded-xl px-5 py-4 ${claimer ? 'bg-gray-800 opacity-75' : 'bg-gray-900'}`}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-semibold text-white">{slot.label}</p>
                  {slot.note && <p className="text-gray-400 text-xs mt-0.5">{slot.note}</p>}
                </div>
                {claimer ? (
                  <span className="shrink-0 text-xs bg-green-900/60 text-green-400 rounded-full px-2.5 py-1 font-medium">
                    Claimed
                  </span>
                ) : (
                  <span className="shrink-0 text-xs bg-gray-700 text-gray-300 rounded-full px-2.5 py-1 font-medium">
                    Open
                  </span>
                )}
              </div>

              {claimer ? (
                <p className="mt-2 text-sm text-gray-300">
                  <span className="text-gray-500">Bringing snacks:</span> {claimer}
                </p>
              ) : (
                <ClaimForm sheetId={sheetId} slotId={slot.id} />
              )}
            </div>
          )
        })}
      </div>

      <p className="text-center text-gray-600 text-xs mt-10">
        Powered by Slotup · No ads, ever.
      </p>
    </main>
  )
}
