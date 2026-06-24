import { notFound } from 'next/navigation'
import { getSheet } from '@/lib/sheets'
import { supabase } from '@/lib/supabase'
import ClaimForm from './ClaimForm'
import Nav from '@/app/components/Nav'

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
    <div className="min-h-screen bg-gray-50">
      <Nav />

      <div className="max-w-2xl mx-auto px-4 py-6">

        {/* Breadcrumb */}
        <a href="/" className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600 mb-5 transition-colors">
          ← All sign-ups
        </a>

        {/* Page heading */}
        <div className="mb-6">
          <p className="text-xs font-semibold tracking-widest text-blue-700 uppercase mb-1">
            {sheet.team} Team · UCC Jamboree
          </p>
          <h1 className="text-3xl font-bold text-gray-900 leading-tight">Snack Sign-Up</h1>
          <p className="text-gray-500 text-sm mt-1.5 leading-relaxed">{sheet.description}</p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
            <p className="text-2xl font-bold text-blue-700">{totalSlots}</p>
            <p className="text-xs text-gray-400 mt-0.5">games total</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
            <p className="text-2xl font-bold text-green-600">{claimedCount}</p>
            <p className="text-xs text-gray-400 mt-0.5">slots claimed</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
            <p className="text-2xl font-bold text-gray-700">{totalSlots - claimedCount}</p>
            <p className="text-xs text-gray-400 mt-0.5">still open</p>
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
                  claimer ? 'border-gray-100 opacity-75' : 'border-gray-200'
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
    </div>
  )
}
