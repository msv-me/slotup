import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="max-w-2xl mx-auto px-4 h-14 flex items-center">
        <Link href="/">
          <Image src="/slotup-wordmark.svg" alt="Slotup" width={96} height={28} priority />
        </Link>
      </div>
    </header>
  )
}
