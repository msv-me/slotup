'use server'

import { revalidatePath } from 'next/cache'
import { supabase } from '@/lib/supabase'

export async function claimSlot(gameId: string, name: string, org: string, teamSlug: string) {
  const trimmed = name.trim()
  if (!trimmed) return { error: 'Please enter your name.' }

  const { error } = await supabase.from('signups').insert({
    game_id: gameId,
    claimer_name: trimmed,
  })

  if (error) {
    if (error.code === '23505') return { error: 'Someone just grabbed that slot — pick another!' }
    return { error: 'Something went wrong. Try again.' }
  }

  revalidatePath(`/${org}/${teamSlug}`)
  return { success: true }
}
