"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"

const navItems = [
  { href: "/", label: "Timer" },
  { href: "/history", label: "Histórico" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="flex h-screen w-56 flex-col border-r border-zinc-800 bg-zinc-950 p-4">
      <div className="mb-8">
        <span className="text-lg font-semibold tracking-tight text-white">
          JV Tracker
        </span>
      </div>

      <nav className="flex flex-1 flex-col gap-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`rounded-md px-3 py-2 text-sm transition-colors ${
              pathname === item.href
                ? "bg-zinc-800 text-white"
                : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <button
        onClick={() => signOut({ callbackUrl: "/login" })}
        className="rounded-md px-3 py-2 text-left text-sm text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-white"
      >
        Sair
      </button>
    </aside>
  )
}
