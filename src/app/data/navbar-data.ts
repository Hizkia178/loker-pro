// navbar-public-data.ts
import {
  Search,
  Building2,
  Crown,
  Info,
  type LucideIcon,
} from "lucide-react"

export interface PublicNavMenuItem {
  name: string
  href: string
  icon: LucideIcon
  active?: boolean
  badge?: string | number
  description?: string
}

export interface PublicNavbarData {
  menu: PublicNavMenuItem[]
}

export const publicNavbarData: PublicNavbarData = {
  menu: [
    {
      name: "Cari Loker",
      href: "/jobs",
      icon: Search,
      active: false,
      description: "Temukan pekerjaan impian Anda",
    },
    {
      name: "Perusahaan",
      href: "/companies", 
      icon: Building2,
      active: false,
      description: "Jelajahi profil perusahaan",
    },
    {
      name: "Paket Premium",
      href: "/premium",
      icon: Crown,
      active: false,
      badge: "Hot",
      description: "Tingkatkan peluang karir Anda",
    },
    {
      name: "Tentang Kami",
      href: "/about",
      icon: Info,
      active: false,
      description: "Kenali lebih dekat JobPortal",
    },
  ]
}