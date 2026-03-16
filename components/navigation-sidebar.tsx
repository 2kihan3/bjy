"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { HomeIcon, UsersIcon, TruckIcon, FactoryIcon, ThermometerIcon, MonitorIcon, DollarSignIcon, UserIcon, SettingsIcon, LogOutIcon } from "lucide-react"

// 导航项类型定义
interface NavItem {
  title: string
  icon: React.ReactNode
  href: string
  badge?: string
}

// 一级导航数据
const mainNavItems: NavItem[] = [
  {
    title: "工作台",
    icon: <HomeIcon />,
    href: "/dashboard",
    badge: "3",
  },
  {
    title: "用户中心",
    icon: <UsersIcon />,
    href: "/users",
  },
  {
    title: "物流中心",
    icon: <TruckIcon />,
    href: "/logistics",
  },
  {
    title: "工厂中心",
    icon: <FactoryIcon />,
    href: "/factory",
  },
  {
    title: "热力分析",
    icon: <ThermometerIcon />,
    href: "/heatmap",
  },
  {
    title: "新媒体分析",
    icon: <MonitorIcon />,
    href: "/social-media",
  },
  {
    title: "财务风控",
    icon: <DollarSignIcon />,
    href: "/finance",
  },
]

// 顶部栏组件
function TopBar() {
  return (
    <div className="flex items-center justify-between w-full px-4 py-3 bg-background border-b border-border">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <h1 className="text-xl font-semibold">中台管理系统</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <button className="p-2 rounded-full hover:bg-muted transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
              <path d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"></path>
            </svg>
          </button>
        </div>
        <div className="relative">
          <button className="p-2 rounded-full hover:bg-muted transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://ui.shadcn.com/placeholder.svg" alt="用户头像" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

// 主导航栏组件
function MainSidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }
  
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-screen flex-col bg-background w-full">
        <TopBar />
        <div className="flex flex-1 overflow-hidden w-full">
          <Sidebar side="left" collapsible="icon">
            <SidebarHeader className="flex items-center gap-3 p-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <span className="text-lg font-semibold">中台系统</span>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                {mainNavItems.map((item, index) => (
                  <SidebarMenuItem key={index}>
                    <a 
                      href={item.href === "/dashboard" ? "/" : item.href}
                      className={cn(
                        "flex w-full items-center gap-3 overflow-hidden rounded-lg px-3 py-2.5 text-sm ring-sidebar-ring outline-hidden transition-all group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-2 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 [&>span:last-child]:truncate",
                        isActive(item.href === "/dashboard" ? "/" : item.href) ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-lg shadow-blue-500/30' : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                      )}
                    >
                      {item.icon}
                      <span>{item.title}</span>
                      {item.badge && (
                        <span className="ml-auto">
                          <Badge variant="secondary" className="text-xs">{item.badge}</Badge>
                        </span>
                      )}
                    </a>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
              <SidebarGroup className="mt-auto">
                <SidebarGroupLabel>个人</SidebarGroupLabel>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <a 
                      href="/profile"
                      className={cn(
                        "flex w-full items-center gap-3 overflow-hidden rounded-lg px-3 py-2.5 text-sm ring-sidebar-ring outline-hidden transition-all group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-2 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 [&>span:last-child]:truncate",
                        isActive("/profile") ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-lg shadow-blue-500/30' : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                      )}
                    >
                      <UserIcon />
                      <span>个人资料</span>
                    </a>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <a 
                      href="/settings"
                      className={cn(
                        "flex w-full items-center gap-3 overflow-hidden rounded-lg px-3 py-2.5 text-sm ring-sidebar-ring outline-hidden transition-all group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-2 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 [&>span:last-child]:truncate",
                        isActive("/settings") ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-lg shadow-blue-500/30' : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                      )}
                    >
                      <SettingsIcon />
                      <span>设置</span>
                    </a>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <a 
                      href="/logout"
                      className={cn(
                        "flex w-full items-center gap-3 overflow-hidden rounded-lg px-3 py-2.5 text-sm ring-sidebar-ring outline-hidden transition-all group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-2 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 [&>span:last-child]:truncate",
                        isActive("/logout") ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-lg shadow-blue-500/30' : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                      )}
                    >
                      <LogOutIcon />
                      <span>退出登录</span>
                    </a>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <main className="flex-1 overflow-auto p-6 w-full">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

export { MainSidebar }