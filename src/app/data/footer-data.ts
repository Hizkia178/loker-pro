// footer-data.ts
import {
  Search,
  FileText,
  Bookmark,
  Gift,
  Users,
  Building2,
  HelpCircle,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Shield,
  FileCheck,
  Globe,
  type LucideIcon, 
} from "lucide-react"

export interface FooterLink {
  name: string
  href: string
  icon?: LucideIcon
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface SocialLink {
  name: string
  href: string
  icon: LucideIcon
}

export interface ContactInfo {
  type: string
  value: string
  icon: LucideIcon
  href?: string
}

export interface FooterData {
  sections: FooterSection[]
  socialLinks: SocialLink[]
  contactInfo: ContactInfo[]
  companyInfo: {
    name: string
    description: string
    tagline: string
  }
  legal: FooterLink[]
}

export const footerData: FooterData = {
  companyInfo: {
    name: "JobPortal",
    description:
      "Platform terpercaya untuk menemukan pekerjaan impian dan menghubungkan talent terbaik dengan perusahaan berkualitas.",
    tagline: "Find Your Dream Job",
  },

  sections: [
    {
      title: "Pencari Kerja",
      links: [
        { name: "Cari Lowongan", href: "/search-jobs", icon: Search },
        { name: "Lamaran Saya", href: "/applications", icon: FileText },
        { name: "Loker Tersimpan", href: "/saved-jobs", icon: Bookmark },
        { name: "Tawaran Kerja", href: "/job-offers", icon: Gift },
        { name: "Tips Karir", href: "/career-tips" },
      ],
    },
    {
      title: "Perusahaan",
      links: [
        { name: "Posting Lowongan", href: "/post-job", icon: Building2 },
        { name: "Cari Kandidat", href: "/find-candidates", icon: Users },
        { name: "Paket Berlangganan", href: "/subscription-plans" },
        { name: "Dashboard Perusahaan", href: "/company-dashboard" },
        { name: "Panduan Rekrutmen", href: "/recruitment-guide" },
      ],
    },
    {
      title: "Dukungan",
      links: [
        { name: "Pusat Bantuan", href: "/help-center", icon: HelpCircle },
        { name: "FAQ", href: "/faq" },
        { name: "Hubungi Kami", href: "/contact", icon: Mail },
        { name: "Live Chat", href: "/live-chat" },
        { name: "Panduan Pengguna", href: "/user-guide" },
      ],
    },
    {
      title: "Tentang Kami",
      links: [
        { name: "Tentang JobPortal", href: "/about" },
        { name: "Tim Kami", href: "/team" },
        { name: "Karir di JobPortal", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "Press Release", href: "/press" },
      ],
    },
  ],

  contactInfo: [
    {
      type: "Alamat",
      value: "Jl. Sudirman No. 123, Jakarta Pusat 10220",
      icon: MapPin,
      href: "https://maps.google.com",
    },
    {
      type: "Telepon",
      value: "+62 21 5555 0123",
      icon: Phone,
      href: "tel:+622155550123",
    },
    {
      type: "Email",
      value: "info@jobportal.com",
      icon: Mail,
      href: "mailto:info@jobportal.com",
    },
  ],

  socialLinks: [
    { name: "Facebook", href: "https://facebook.com/jobportal", icon: Facebook },
    { name: "Twitter", href: "https://twitter.com/jobportal", icon: Twitter },
    { name: "Instagram", href: "https://instagram.com/jobportal", icon: Instagram },
    { name: "LinkedIn", href: "https://linkedin.com/company/jobportal", icon: Linkedin },
    { name: "YouTube", href: "https://youtube.com/jobportal", icon: Youtube },
  ],

  legal: [
    { name: "Kebijakan Privasi", href: "/privacy-policy", icon: Shield },
    { name: "Syarat & Ketentuan", href: "/terms-conditions", icon: FileCheck },
    { name: "Kebijakan Cookie", href: "/cookie-policy" },
    { name: "Sitemap", href: "/sitemap", icon: Globe },
  ],
}
