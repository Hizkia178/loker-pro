"use client" // Navbar.tsx

import { useState, useEffect } from "react"
import { Menu, Briefcase, Search, Building2, Crown, Info, LogIn, UserPlus, UserSearch } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const navbarData = {
  menu: [
    {
      name: "Cari Loker",
      href: "/jobs",
      icon: Search,
      active: false,
      description: "Temukan pekerjaan impian Anda"
    },
    {
      name: "Perusahaan",
      href: "/companies",
      icon: Building2,
      active: false,
      description: "Jelajahi profil perusahaan"
    },
    {
      name: "Cari Kandidat",
      href: "/candidates",
      icon: UserSearch,
      active: false,
      description: "Temukan kandidat terbaik untuk perusahaan Anda"
    },
    {
      name: "Paket Premium",
      href: "/premium",
      icon: Crown,
      active: false,
      badge: "Hot",
      description: "Tingkatkan peluang karir Anda"
    },
    {
      name: "Tentang Kami",
      href: "/about",
      icon: Info,
      active: false,
      description: "Kenali lebih dekat JobPortal"
    },
  ]
}

export default function NavbarPublic() {
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
            <div className="flex items-center space-x-3 w-48 h-8"></div>
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
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
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
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-1">
                {navbarData.menu.map((item) => (
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
                          className="ml-1 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 text-xs px-2 py-0.5"
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

            {/* Auth Buttons */}
            <div className="flex items-center space-x-3">
              <div className="hidden sm:flex items-center space-x-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-700 hover:text-green-700 hover:bg-green-50 transition-all duration-300 font-medium"
                  asChild
                >
                  <Link href="/authform/login" className="flex items-center space-x-2">
                    <LogIn className="h-4 w-4" />
                    <span>Login</span>
                  </Link>
                </Button>

                <Button
                  size="sm"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                  asChild
                >
                  <Link href="/authform/register" className="flex items-center space-x-2">
                    <UserPlus className="h-4 w-4" />
                    <span>Daftar</span>
                  </Link>
                </Button>
              </div>

              {/* Mobile Menu */}
              <div className="lg:hidden">
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

                  <SheetContent side="left" className="w-75 border-l-0 shadow-2xl p-0 flex flex-col max-h-screen">
                    {/* Header */}
                    <div className="flex-shrink-0 p-6 pb-4 bg-white">
                      <SheetHeader>
                        <div className="flex items-center justify-between">
                          <SheetTitle className="flex items-center space-x-3 text-left">
                            <div className="relative">
                              <div className="absolute inset-0 bg-white/10 rounded-lg blur"></div>
                              <div className="relative bg-green-600 p-2.5 rounded-lg flex items-center justify-center shadow-md">
                                <Briefcase className="h-6 w-6 text-white" />
                              </div>
                            </div>
                            <div>
                              <div className="text-xl font-bold text-gray-900">JobPortal</div>
                              <div className="text-sm text-gray-500">Find Your Dream Job</div>
                            </div>
                          </SheetTitle>
                        </div>
                        <SheetDescription className="sr-only">Navigation menu</SheetDescription>
                      </SheetHeader>
                    </div>

                    {/* Separator setelah header */}
                    <Separator className="mb-2" />

                    <div className="flex-1 overflow-y-auto">
                      {/* Menu Navigasi */}
                      <div className="px-4 py-6 space-y-2">
                        {navbarData.menu.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "flex items-center space-x-4 px-4 py-4 text-sm font-medium transition-all duration-300 rounded-xl",
                              "hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-700",
                              item.active
                                ? "bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 shadow-sm"
                                : "text-gray-700"
                            )}
                          >
                            <div
                              className={cn(
                                "p-2.5 rounded-lg transition-all duration-300",
                                item.active
                                  ? "bg-green-100 text-green-600"
                                  : "bg-gray-100 text-gray-600"
                              )}
                            >
                              <item.icon className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold">{item.name}</div>
                              <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                            </div>
                            {item.badge && (
                              <Badge
                                variant="secondary"
                                className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2.5 py-1"
                              >
                                {item.badge}
                              </Badge>
                            )}
                          </a>
                        ))}
                      </div>

                      {/* Separator sebelum auth button */}
                      <Separator className="my-4" />

                      {/* Mobile Auth Buttons */}
                      <div className="px-4 pb-6 pt-2 space-y-3">
                        <Button
                          variant="outline"
                          className="w-full py-7 justify-start text-gray-700 hover:text-green-700 hover:bg-green-50 hover:border-green-200 transition-all duration-300"
                          asChild
                        >
                          <Link
                            href="/authform/login"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center space-x-3"
                          >
                            <LogIn className="h-6 w-6" />
                            <span className="font-medium">Login ke Akun</span>
                          </Link>
                        </Button>

                        <Button
                          className="w-full py-7 justify-start bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg"
                          asChild
                        >
                          <Link
                            href="/authform/register"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center space-x-3"
                          >
                            <UserPlus className="h-6 w-6" />
                            <span className="font-medium">Daftar Sekarang</span>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16"></div>
    </>
  )
}