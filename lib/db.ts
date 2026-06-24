import { supabase } from './supabase'

export type Team = {
  id: string
  org: string
  slug: string
  parent_slug: string | null
  display_name: string
  description: string | null
  sort_order: number
}

export type Game = {
  id: string
  org: string
  team_slug: string
  label: string
  game_date: string | null
  note: string | null
  sort_order: number
  active: boolean
}

export async function getTeam(org: string, slug: string): Promise<Team | null> {
  const { data } = await supabase
    .from('teams')
    .select('*')
    .eq('org', org)
    .eq('slug', slug)
    .maybeSingle()
  return data
}

export async function getGroups(org: string, parentSlug: string): Promise<Team[]> {
  const { data } = await supabase
    .from('teams')
    .select('*')
    .eq('org', org)
    .eq('parent_slug', parentSlug)
    .order('sort_order')
  return data ?? []
}

export async function getGames(org: string, teamSlug: string): Promise<Game[]> {
  const { data } = await supabase
    .from('games')
    .select('*')
    .eq('org', org)
    .eq('team_slug', teamSlug)
    .eq('active', true)
    .order('sort_order')
  return data ?? []
}

export async function getSignups(gameIds: string[]): Promise<Record<string, string>> {
  if (!gameIds.length) return {}
  const { data } = await supabase
    .from('signups')
    .select('game_id, claimer_name')
    .in('game_id', gameIds)
  return Object.fromEntries((data ?? []).map(r => [r.game_id, r.claimer_name]))
}
