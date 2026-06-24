# Slotup Design Guidelines

## Fonts
- **Display / headings:** Plus Jakarta Sans (bold) — page titles, nav logo, section labels
- **Body:** Inter — descriptions, labels, buttons, all other text

## Colors
- **Accent:** `blue-700` (#1d4ed8) — eyebrow labels, progress bar, stat numbers
- **Background:** `gray-50` (#f9fafb) — page background
- **Surface:** `white` — cards, nav
- **Border:** `gray-200` (#e5e7eb) — card borders, input borders
- **Text primary:** `gray-900` — headings, slot names
- **Text secondary:** `gray-500` — descriptions, subtitles
- **Text muted:** `gray-400` — notes, timestamps, footer
- **Success:** `green-600` / `green-50` / `green-700` — claimed badge, claimed count
- **Neutral badge:** `gray-50` / `gray-500` — open badge

## Spacing
- Page max-width: `max-w-2xl` (672px)
- Page padding: `px-4 py-6`
- Card padding: `px-5 py-4`
- Gap between cards: `gap-3`

## Components
- **Cards:** `bg-white border border-gray-200 rounded-xl shadow-sm`
- **Buttons (primary):** `bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg py-2.5 text-sm` — max-width on desktop, full-width on mobile
- **Buttons (secondary):** `bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg`
- **Badges:** `rounded-full px-2.5 py-1 text-xs font-medium border`
- **Eyebrow label:** `text-xs font-semibold tracking-widest uppercase text-blue-700`
- **Nav:** `sticky top-0 bg-white border-b border-gray-200 h-14`
- **Back link:** `text-sm text-gray-400 hover:text-gray-600`

## Principles
- Mobile-first; max-width constrains on desktop
- No dark mode
- No purple / indigo — blue only
- Cards use subtle shadow + border, not flat fills
- Buttons full-width on mobile (`w-full`), auto-width on desktop (`sm:w-auto`)
