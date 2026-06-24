'use server'

import { revalidatePath } from 'next/cache'
import { supabase } from '@/lib/supabase'

export async function claimSlot(sheetId: string, slotId: string, name: string) {
  const trimmed = name.trim()
  if (!trimmed) return { error: 'Please enter your name.' }

  const { error } = await supabase.from('signups').insert({
    sheet_id: sheetId,
    slot_id: slotId,
    claimer_name: trimmed,
  })

  if (error) {
    if (error.code === '23505') return { error: 'Someone just grabbed that slot — pick another!' }
    return { error: 'Something went wrong. Try again.' }
  }

  revalidatePath(`/${sheetId}`)
  return { success: true }
}
