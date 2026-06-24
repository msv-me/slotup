'use client'

import { useState, useTransition } from 'react'
import { claimSlot } from '@/app/actions'

export default function ClaimForm({ sheetId, slotId }: { sheetId: string; slotId: string }) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [pending, startTransition] = useTransition()

  function submit() {
    startTransition(async () => {
      const result = await claimSlot(sheetId, slotId, name)
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
      <button
        onClick={() => setOpen(true)}
        className="mt-3 w-full sm:w-auto sm:min-w-40 rounded-lg bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-medium py-2.5 px-5 text-sm transition-colors"
      >
        Claim this slot
      </button>
    )
  }

  return (
    <div className="mt-3 flex flex-col gap-2">
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
  )
}
