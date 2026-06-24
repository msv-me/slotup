import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-2.5">
        <Image src="/sparta-logo.webp" alt="Sparta United" width={28} height={28} />
        <Link href="/" className="font-display font-bold text-gray-900 tracking-tight">Slotup</Link>
      </div>
    </header>
  )
}
