"use client"

import { useState, useEffect } from "react"
import { Menu, Bell, LogOut, Briefcase, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { navbarData } from "../data/navbar-data"

export default function NavbarUser() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 border-b border-gray-200/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg blur opacity-75"></div>
                <div className="relative bg-gradient-to-br from-green-600 to-emerald-700 p-2 rounded-lg">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="ml-3">
                <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  JobPortal
                </span>
                <div className="text-xs text-gray-500 font-medium">Find Your Dream Job</div>
              </div>
            </div>
            <div className="hidden lg:block w-64 h-8"></div>
            <div className="flex items-center space-x-3 w-32 h-8"></div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-2">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg blur opacity-75"></div>
                <div className="relative bg-gradient-to-br from-green-600 to-emerald-700 p-2 rounded-lg">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="ml-3">
                <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  JobPortal
                </span>
                <div className="text-xs text-gray-500 font-medium">Find Your Dream Job</div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="flex items-center space-x-1">
                {navbarData.desktopMenu.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 group",
                      "hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-700",
                      item.active
                        ? "bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 shadow-sm"
                        : "text-gray-700"
                    )}
                  >
                    <div className="flex items-center space-x-2">
                      <item.icon className={cn(
                        "h-4 w-4 transition-colors duration-300",
                        item.active ? "text-green-600" : "text-gray-500 group-hover:text-green-600"
                      )} />
                      <span>{item.name}</span>
                      {item.badge && (
                        <Badge
                          variant="secondary"
                          className="ml-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 text-xs px-2 py-0.5"
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                    {item.active && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                    )}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                className="relative hover:bg-green-50 rounded-full w-10 h-10 p-0 transition-all duration-300"
              >
                <Bell className="h-5 w-5 text-gray-600" />
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                >
                  3
                </Badge>
              </Button>

              <div className="hidden md:block">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex items-center space-x-3 px-3 py-2 rounded-xl hover:bg-green-50 transition-all duration-300"
                    >
                      <Avatar className="h-9 w-9 ring-2 ring-gray-200 hover:ring-green-300 transition-all duration-300">
                        <AvatarImage src={navbarData.user.avatar} alt={navbarData.user.name} />
                        <AvatarFallback className="bg-gradient-to-br from-green-500 to-emerald-600 text-white font-semibold">
                          {navbarData.user.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="hidden lg:block text-left">
                        <div className="text-sm font-semibold text-gray-900">{navbarData.user.name}</div>
                        <div className="text-xs text-gray-500">{navbarData.user.role}</div>
                      </div>
                      <ChevronDown className="h-4 w-4 text-gray-400 hidden lg:block" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-64 shadow-lg border-0 bg-white/95 backdrop-blur-lg">
                    <DropdownMenuLabel className="pb-3">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={navbarData.user.avatar} alt={navbarData.user.name} />
                          <AvatarFallback className="bg-gradient-to-br from-green-500 to-emerald-600 text-white font-semibold text-lg">
                            {navbarData.user.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-900">{navbarData.user.name}</p>
                          <p className="text-xs text-gray-500">{navbarData.user.email}</p>
                          <p className="text-xs text-green-600 font-medium">{navbarData.user.role}</p>
                        </div>
                      </div>
                    </DropdownMenuLabel>
                    <Separator className="my-2" />
                    {navbarData.userDropdownMenu.map((item) => (
                      <DropdownMenuItem key={item.name} asChild className="cursor-pointer">
                        <a href={item.href} className="flex items-center space-x-3 p-3 hover:bg-green-50 transition-colors duration-200">
                          <div className="p-1.5 rounded-lg bg-gray-100">
                            <item.icon className="h-4 w-4 text-gray-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">{item.name}</div>
                            <div className="text-xs text-gray-500">{item.description}</div>
                          </div>
                        </a>
                      </DropdownMenuItem>
                    ))}
                    <Separator className="my-2" />
                    <DropdownMenuItem className="text-red-600 focus:text-red-600 focus:bg-red-50 cursor-pointer">
                      <div className="flex items-center space-x-3 p-1">
                        <div className="p-1.5 rounded-lg bg-red-100">
                          <LogOut className="h-4 w-4 text-red-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">Keluar</div>
                          <div className="text-xs text-red-400">Sign out dari akun</div>
                        </div>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="md:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-full w-10 h-10 p-0 hover:bg-green-50 transition-colors duration-200"
                    >
                      <Menu className="h-6 w-6 text-gray-600" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-75 border-r-0 shadow-2xl p-0 flex flex-col max-h-screen">
                    <div className="flex-shrink-0 p-6 pb-4 bg-white border-b border-gray-200">
                      <SheetHeader>
                        <SheetTitle className="flex items-center space-x-4 text-left">
                          <Avatar className="h-14 w-14 ring-2 ring-green-200 shadow-lg">
                            <AvatarImage src={navbarData.user.avatar} alt={navbarData.user.name} />
                            <AvatarFallback className="bg-gradient-to-br from-green-500 to-emerald-600 text-white font-semibold text-xl">
                              {navbarData.user.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="text-lg font-semibold text-gray-900">{navbarData.user.name}</div>
                            <div className="text-sm text-gray-500">{navbarData.user.email}</div>
                            <div className="text-xs text-green-600 font-medium mt-1 px-2 py-1 bg-green-50 rounded-full inline-block">
                              {navbarData.user.role}
                            </div>
                          </div>
                        </SheetTitle>
                        <SheetDescription className="sr-only">Navigation menu</SheetDescription>
                      </SheetHeader>
                    </div>

                    <ScrollArea className="flex-1 h-0">
                      <div className="px-4 py-4 space-y-3">
                        {navbarData.mobileMenu.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "flex items-center space-x-4 px-4 py-4 text-sm font-medium transition-all duration-300 relative",
                              item.active
                                ? "bg-green-500 shadow-lg rounded-lg text-white ring-1 ring-green-600"
                                : "text-gray-700"
                            )}
                          >
                            <div
                              className={cn(
                                "p-2.5 rounded-lg transition-all duration-300",
                                item.active
                                  ? "bg-white/20 text-white" // biar icon tetap kelihatan di atas bg hijau
                                  : "bg-gray-100 text-gray-600"
                              )}
                            >
                              <item.icon className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                              <div
                                className={cn(
                                  "font-semibold transition-colors duration-300",
                                  item.active ? "text-white" : "text-gray-800"
                                )}
                              >
                                {item.name}
                              </div>
                              {item.description && (
                                <div
                                  className={cn(
                                    "text-xs mt-1 transition-colors duration-300",
                                    item.active ? "text-green-100" : "text-gray-500"
                                  )}
                                >
                                  {item.description}
                                </div>
                              )}
                            </div>
                            {item.badge && (
                              <Badge
                                variant="secondary"
                                className={cn(
                                  "text-xs px-2.5 py-1 font-semibold transition-all duration-300",
                                  item.active
                                    ? "bg-white/20 text-white"
                                    : "bg-gradient-to-r from-green-500 to-emerald-500 text-white opacity-80"
                                )}
                              >
                                {item.badge}
                              </Badge>
                            )}
                          </a>

                        ))}

                        <div className="pt-4">
                          <Separator className="mb-4" />
                          <a
                            href="/logout"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center space-x-4 px-4 py-4 text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-600 transition-all duration-300"
                          >
                            <div className="p-2.5 rounded-lg bg-red-100">
                              <LogOut className="h-5 w-5 text-red-600" />
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold">Keluar</div>
                              <div className="text-xs text-red-400 mt-1">Sign out dari akun</div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </ScrollArea>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="h-16"></div>
    </>
  )
}
