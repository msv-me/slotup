import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getTeam, getGroups, getGames, getSignups } from '@/lib/db'
import Nav from '@/app/components/Nav'
import ClaimForm from './ClaimForm'

export const revalidate = 0

export default async function TeamPage({
  params,
}: {
  params: Promise<{ org: string; team: string }>
}) {
  const { org, team } = await params

  const teamRecord = await getTeam(org, team)

  // Group page — has a teams row with this exact slug
  if (teamRecord) {
    const games = await getGames(org, team)
    const claimed = await getSignups(games.map(g => g.id))
    const claimedCount = Object.keys(claimed).length

    return (
      <div className="min-h-screen bg-gray-50">
        <Nav />
        <div className="max-w-2xl mx-auto px-4 py-6">

          {teamRecord.parent_slug && (
            <Link
              href={`/${org}/${teamRecord.parent_slug}`}
              className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600 mb-5 transition-colors"
            >
              ← Back
            </Link>
          )}

          <div className="mb-6">
            <p className="text-xs font-semibold tracking-widest text-brand-700 uppercase mb-1">
              Snack Sign-Up
            </p>
            <h1 className="font-display text-3xl font-bold text-gray-900 leading-tight">
              {teamRecord.display_name}
            </h1>
            {teamRecord.description && (
              <p className="text-gray-500 text-sm mt-1.5 leading-relaxed">{teamRecord.description}</p>
            )}
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
              <p className="text-2xl font-bold text-brand-700">{games.length}</p>
              <p className="text-xs text-gray-400 mt-0.5">games total</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
              <p className="text-2xl font-bold text-green-600">{claimedCount}</p>
              <p className="text-xs text-gray-400 mt-0.5">slots claimed</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
              <p className="text-2xl font-bold text-gray-700">{games.length - claimedCount}</p>
              <p className="text-xs text-gray-400 mt-0.5">still open</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {games.map((game) => {
              const claimer = claimed[game.id]
              return (
                <div
                  key={game.id}
                  className={`bg-white rounded-xl border px-5 py-4 shadow-sm transition-all ${
                    claimer ? 'border-gray-100 opacity-75' : 'border-gray-200'
                  }`}
                >
                  {claimer ? (
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-900">{game.label}</p>
                        {game.note && <p className="text-gray-400 text-xs mt-0.5">{game.note}</p>}
                        <p className="mt-2 text-sm text-gray-600">
                          <span className="text-gray-400">Bringing snacks:</span>{' '}
                          <span className="font-medium text-gray-800">{claimer}</span>
                        </p>
                      </div>
                      <span className="shrink-0 text-xs bg-green-50 text-green-700 border border-green-200 rounded-full px-2.5 py-1 font-medium">
                        Claimed
                      </span>
                    </div>
                  ) : (
                    <ClaimForm
                      gameId={game.id}
                      label={game.label}
                      note={game.note ?? undefined}
                      org={org}
                      teamSlug={team}
                    />
                  )}
                </div>
              )
            })}
          </div>

          <p className="text-center text-gray-300 text-xs mt-10">Slotup · No ads, ever.</p>
        </div>
      </div>
    )
  }

  // Hub page — no direct team record, look for groups with this parent slug
  const groups = await getGroups(org, team)
  if (!groups.length) notFound()

  const groupsWithCounts = await Promise.all(
    groups.map(async (g) => {
      const games = await getGames(org, g.slug)
      const claimed = await getSignups(games.map(game => game.id))
      return { ...g, total: games.length, open: games.length - Object.keys(claimed).length }
    })
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <div className="max-w-2xl mx-auto px-4 py-6">

        <div className="mb-6">
          <p className="text-xs font-semibold tracking-widest text-brand-700 uppercase mb-1">Snack Sign-Ups</p>
          <h1 className="font-display text-3xl font-bold text-gray-900">Pick your group</h1>
          <p className="text-gray-500 text-sm mt-1">Select your team's sign-up sheet below.</p>
        </div>

        <div className="flex flex-col gap-3">
          {groupsWithCounts.map((g) => (
            <Link
              key={g.slug}
              href={`/${org}/${g.slug}`}
              className="block bg-white border border-gray-200 rounded-xl px-5 py-4 shadow-sm hover:border-gray-300 hover:shadow transition-all"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-semibold text-gray-900">{g.display_name}</p>
                  {g.description && <p className="text-gray-400 text-sm mt-0.5">{g.description}</p>}
                  <p className="text-xs text-brand-600 mt-1.5">
                    {g.open} slot{g.open !== 1 ? 's' : ''} open
                  </p>
                </div>
                <span className="shrink-0 text-gray-300 text-lg">→</span>
              </div>
            </Link>
          ))}
        </div>

        <p className="text-center text-gray-300 text-xs mt-10">Slotup · No ads, ever.</p>
      </div>
    </div>
  )
}
