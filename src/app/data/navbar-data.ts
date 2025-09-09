// navbar-data.ts //

import {
  Home,
  Search,
  FileText,
  Bookmark,
  Bell,
  User,
  Settings,
  Gift,
  Shield,
  CreditCard
} from "lucide-react"

export interface NavMenuItem {
  name: string
  href: string
  icon: any
  active?: boolean
  badge?: string | number
  description?: string
}

export interface UserData {
  name: string
  email: string
  role: string
  avatar?: string
}

export interface NavbarData {
  user: UserData
  desktopMenu: NavMenuItem[]
  mobileMenu: NavMenuItem[]
  userDropdownMenu: NavMenuItem[]
}

export const navbarData: NavbarData = {
  user: {
    name: "John Doe",
    email: "john.doe@email.com",
    role: "Software Developer",
    avatar: "https://github.com/shadcn.png"
  },
  
  desktopMenu: [
    {
      name: "Lamaran Saya",
      href: "/applications",
      icon: FileText,
      active: false,
      badge: "3",
      description: "Lihat status lamaran kerja"
    },
    {
      name: "Tawaran Kerja",
      href: "/job-offers", 
      icon: Gift,
      active: false,
      badge: "2",
      description: "Tawaran pekerjaan untuk Anda"
    },
    {
      name: "Loker Disimpan",
      href: "/saved-jobs",
      icon: Bookmark,
      active: false,
      description: "Pekerjaan yang telah disimpan"
    },
    {
      name: "Cari Loker",
      href: "/search-jobs",
      icon: Search,
      active: false,
      description: "Temukan pekerjaan impian"
    }
  ],
  
  mobileMenu: [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: Home,
      active: false,
      description: "Ringkasan aktivitas Anda"
    },
    {
      name: "Cari Loker",
      href: "/search-jobs",
      icon: Search,
      active: true,
      description: "Temukan pekerjaan impian"
    },
    {
      name: "Lamaran Kerja",
      href: "/applications",
      icon: FileText,
      active: false,
      badge: 3,
      description: "Lihat status lamaran kerja"
    },
    {
      name: "Tawaran Kerja",
      href: "/job-offers",
      icon: Gift,
      active: false,
      badge: 2,
      description: "Tawaran pekerjaan untuk Anda"
    },
    {
      name: "Loker Disimpan",
      href: "/saved-jobs",
      icon: Bookmark,
      active: false,
      description: "Pekerjaan yang telah disimpan"
    },
    {
      name: "Notifikasi",
      href: "/notifications",
      icon: Bell,
      active: false,
      badge: 5,
      description: "Pemberitahuan terbaru"
    },
    {
      name: "Profile",
      href: "/profile",
      icon: User,
      active: false,
      description: "Kelola profil Anda"
    },
    {
      name: "Pengaturan",
      href: "/settings",
      icon: Settings,
      active: false,
      description: "Preferensi dan pengaturan"
    }
  ],
  
  userDropdownMenu: [
    {
      name: "Profile Saya",
      href: "/profile",
      icon: User,
      active: false,
      description: "Kelola profil dan CV"
    },
    {
      name: "Pengaturan Akun",
      href: "/settings",
      icon: Settings,
      active: false,
      description: "Preferensi dan privasi"
    },
    {
      name: "Keamanan",
      href: "/security",
      icon: Shield,
      active: false,
      description: "Password dan keamanan"
    },
    {
      name: "Langganan",
      href: "/subscription",
      icon: CreditCard,
      active: false,
      description: "Kelola paket premium"
    }
  ]
}