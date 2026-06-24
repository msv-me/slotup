'use client'

import { useState, useTransition } from 'react'
import { submitRequest } from '@/app/actions'

export default function RequestForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')
  const [pending, startTransition] = useTransition()

  function submit() {
    if (honeypot) return
    startTransition(async () => {
      const result = await submitRequest(name, email, message)
      if (result.error) {
        setError(result.error)
      } else {
        setDone(true)
      }
    })
  }

  if (done) {
    return (
      <div className="text-center py-4">
        <p className="text-white font-semibold text-lg mb-1">You're on the list.</p>
        <p className="text-brand-200 text-sm">We'll reach out shortly to get you set up.</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2.5">
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={e => setHoneypot(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />
      <div className="flex gap-2.5">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="flex-1 rounded-xl bg-white/10 border border-white/20 text-white placeholder-brand-200 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-white/40"
        />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && submit()}
          className="flex-1 rounded-xl bg-white/10 border border-white/20 text-white placeholder-brand-200 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-white/40"
        />
      </div>
      <input
        type="text"
        placeholder="What are you signing people up for? (optional)"
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && submit()}
        className="w-full rounded-xl bg-white/10 border border-white/20 text-white placeholder-brand-200 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-white/40"
      />
      {error && <p className="text-red-300 text-xs">{error}</p>}
      <button
        onClick={submit}
        disabled={pending || !name.trim() || !email.trim()}
        className="w-full sm:w-auto sm:self-start bg-white text-brand-700 font-semibold text-sm rounded-xl px-5 py-2.5 hover:bg-brand-50 disabled:opacity-50 transition-colors"
      >
        {pending ? 'Sending…' : 'Request access →'}
      </button>
    </div>
  )
}
