export type Slot = {
  id: string
  label: string
  note?: string
}

export type Sheet = {
  id: string
  title: string
  team: string
  description: string
  slots: Slot[]
}

export const sheets: Sheet[] = [
  {
    id: 'ucc-bronze',
    title: 'Snack Sign-Up — Bronze Team',
    team: 'Bronze',
    description: 'United Champions Cup · Jun 30 – Jul 2 · Mostly evening games, 3 guaranteed games. Finals Jul 2 evening. Full schedule expected ~June 25.',
    slots: [
      { id: 'game-1', label: 'Game 1', note: 'Date & time TBD ~June 25' },
      { id: 'game-2', label: 'Game 2', note: 'Date & time TBD ~June 25' },
      { id: 'game-3', label: 'Game 3 — Finals', note: 'Jul 2, evening' },
    ],
  },
  {
    id: 'ucc-silver',
    title: 'Snack Sign-Up — Silver Team',
    team: 'Silver',
    description: 'United Champions Cup · Jun 30 – Jul 2 · Mostly evening games, 3 guaranteed games. Finals Jul 2 evening. Full schedule expected ~June 25.',
    slots: [
      { id: 'game-1', label: 'Game 1', note: 'Date & time TBD ~June 25' },
      { id: 'game-2', label: 'Game 2', note: 'Date & time TBD ~June 25' },
      { id: 'game-3', label: 'Game 3 — Finals', note: 'Jul 2, evening' },
    ],
  },
]

export function getSheet(id: string): Sheet | undefined {
  return sheets.find((s) => s.id === id)
}
