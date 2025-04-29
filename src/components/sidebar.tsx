"use client"

import { LayoutDashboard, Calendar, Clock, Users, LogOut } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarProps {
  className?: string
}

export default function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Appointments",
      href: "/appointments",
      icon: Calendar,
    },
    {
      name: "Your Schedule",
      href: "/schedule",
      icon: Clock,
    },
    {
      name: "Patients Data",
      href: "/patients",
      icon: Users,
    },
  ]

  return (
    <div className={`w-full md:w-60 bg-[#0078D7] text-white flex flex-col ${className}`}>
      <div className="p-6">
        <h1 className="text-2xl font-bold">MyMedic</h1>
      </div>
      <nav className="flex-1 px-3 py-2 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center px-4 py-3 text-sm font-medium rounded-md text-white ${
              isActive(item.href) ? "bg-[#0067be]" : "hover:bg-[#0067be]"
            }`}
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="p-3">
        <Link
          href="/"
          className="flex items-center px-4 py-3 text-sm font-medium rounded-md text-white hover:bg-[#0067be]"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Log Out
        </Link>
      </div>
    </div>
  )
}
