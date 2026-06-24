'use client'

import { useState, useTransition } from 'react'
import { claimSlot } from '@/app/actions'

interface Props {
  gameId: string
  label: string
  note?: string
  org: string
  teamSlug: string
}

export default function ClaimForm({ gameId, label, note, org, teamSlug }: Props) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [pending, startTransition] = useTransition()

  function submit() {
    startTransition(async () => {
      const result = await claimSlot(gameId, name, org, teamSlug)
      if (result.error) {
        setError(result.error)
      } else {
        setOpen(false)
        setName('')
        setError('')
      }
    })
  }

  if (!open) {
    return (
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-semibold text-gray-900">{label}</p>
          {note && <p className="text-gray-400 text-xs mt-0.5">{note}</p>}
        </div>
        <button
          onClick={() => setOpen(true)}
          className="shrink-0 rounded-lg bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-medium py-2 px-4 text-sm transition-colors"
        >
          Claim this slot
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="min-w-0">
          <p className="font-semibold text-gray-900">{label}</p>
          {note && <p className="text-gray-400 text-xs mt-0.5">{note}</p>}
        </div>
        <span className="shrink-0 text-xs bg-gray-50 text-gray-500 border border-gray-200 rounded-full px-2.5 py-1 font-medium">
          Open
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <input
          autoFocus
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => { setName(e.target.value); setError('') }}
          onKeyDown={(e) => e.key === 'Enter' && submit()}
          className="w-full rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-400 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {error && <p className="text-red-500 text-xs">{error}</p>}
        <div className="flex gap-2">
          <button
            onClick={submit}
            disabled={pending || !name.trim()}
            className="flex-1 sm:flex-none sm:min-w-32 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white font-medium py-2.5 px-5 text-sm transition-colors"
          >
            {pending ? 'Claiming…' : 'Confirm'}
          </button>
          <button
            onClick={() => { setOpen(false); setName(''); setError('') }}
            className="rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2.5 text-sm transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
