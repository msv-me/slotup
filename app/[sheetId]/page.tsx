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
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto px-4 py-10">

        {/* Header */}
        <div className="mb-8">
          <p className="text-xs font-semibold tracking-widest text-indigo-600 uppercase mb-2">
            Snack Sign-Up
          </p>
          <h1 className="text-2xl font-bold text-gray-900">{sheet.title}</h1>
          <p className="text-gray-500 text-sm mt-1.5 leading-relaxed">{sheet.description}</p>
          <div className="mt-4 flex items-center gap-2">
            <div className="h-1.5 flex-1 rounded-full bg-gray-200 overflow-hidden">
              <div
                className="h-full rounded-full bg-indigo-500 transition-all"
                style={{ width: `${(claimedCount / totalSlots) * 100}%` }}
              />
            </div>
            <p className="text-xs text-gray-400 shrink-0">
              {claimedCount} of {totalSlots} claimed
            </p>
          </div>
        </div>

        {/* Slots */}
        <div className="flex flex-col gap-3">
          {sheet.slots.map((slot) => {
            const claimer = claimed.get(slot.id)
            return (
              <div
                key={slot.id}
                className={`bg-white rounded-xl border px-5 py-4 shadow-sm transition-all ${
                  claimer ? 'border-gray-100 opacity-80' : 'border-gray-200'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-semibold text-gray-900">{slot.label}</p>
                    {slot.note && <p className="text-gray-400 text-xs mt-0.5">{slot.note}</p>}
                  </div>
                  {claimer ? (
                    <span className="shrink-0 text-xs bg-green-50 text-green-700 border border-green-200 rounded-full px-2.5 py-1 font-medium">
                      Claimed
                    </span>
                  ) : (
                    <span className="shrink-0 text-xs bg-gray-50 text-gray-500 border border-gray-200 rounded-full px-2.5 py-1 font-medium">
                      Open
                    </span>
                  )}
                </div>

                {claimer ? (
                  <p className="mt-2 text-sm text-gray-600">
                    <span className="text-gray-400">Bringing snacks:</span>{' '}
                    <span className="font-medium text-gray-800">{claimer}</span>
                  </p>
                ) : (
                  <ClaimForm sheetId={sheetId} slotId={slot.id} />
                )}
              </div>
            )
          })}
        </div>

        <p className="text-center text-gray-300 text-xs mt-10">
          Slotup · No ads, ever.
        </p>
      </div>
    </main>
  )
}
