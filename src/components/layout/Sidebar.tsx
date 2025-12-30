
"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Users,
    LayoutDashboard,
    Code2,
    Trophy,
    Settings,
    LogOut
} from "lucide-react"

const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: Code2, label: "Problems", href: "/problems" },
    { icon: Trophy, label: "Leaderboard", href: "/leaderboard" },
    { icon: Users, label: "Community", href: "/community" },
    { icon: Settings, label: "Settings", href: "/settings" },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <div className="flex h-screen w-64 flex-col border-r bg-card">
            <div className="flex h-14 items-center border-b px-6">
                <span className="text-lg font-bold text-primary">CodeMentor</span>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
                <nav className="space-y-1 px-2">
                    {sidebarItems.map((item) => (
                        <Link key={item.href} href={item.href}>
                            <Button
                                variant={pathname === item.href ? "secondary" : "ghost"}
                                className={cn("w-full justify-start", pathname === item.href && "bg-secondary")}
                            >
                                <item.icon className="mr-2 h-4 w-4" />
                                {item.label}
                            </Button>
                        </Link>
                    ))}
                </nav>
            </div>
            <div className="border-t p-4">
                <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-100/10">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                </Button>
            </div>
        </div>
    )
}
