'use client'
import { Logo } from './Logo'
import { Cog, LifeBuoy, Search } from 'lucide-react'
import { MainNavigation } from './MainNavigation'
import { NavItem } from './MainNavigation/navItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import { useState } from 'react'
import * as Input from '../Input'

export function Sidebar() {
  const [isDismiss, setIsDismiss] = useState(false)

  const handleDismiss = () => {
    setIsDismiss(!isDismiss)
  }

  return (
    <aside className="flex max-h-screen flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>

      <MainNavigation />
      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>

        {!isDismiss && <UsedSpaceWidget handleDismissWidget={handleDismiss} />}

        <div className="h-px bg-zinc-200"></div>

        <Profile />
      </div>
    </aside>
  )
}
