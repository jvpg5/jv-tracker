import { Providers } from "@/components/providers"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <div className="flex min-h-screen items-center justify-center">
        {children}
      </div>
    </Providers>
  )
}
