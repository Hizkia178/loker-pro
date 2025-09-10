"use client"

import { ReactNode } from "react"
import { useState, useEffect } from "react"
import { Search, Briefcase, TrendingUp, Users, Building, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const homePageData = {
    heroSection: {
        title: "Temukan Karier Impian Anda",
        subtitle: "Ribuan Peluang Menanti",
        description: "Platform terpercaya untuk menemukan pekerjaan terbaik dari perusahaan ternama di seluruh Indonesia",
        stats: {
            totalJobs: 15420,
            activeCompanies: 2830,
            jobSeekers: 45670
        }
    },
    jobCategories: [
        { id: "technology", name: "Teknologi & IT", count: 3245, trending: true },
        { id: "design", name: "Desain & Kreatif", count: 1876 },
        { id: "marketing", name: "Marketing & Sales", count: 2134, trending: true },
        { id: "healthcare", name: "Kesehatan", count: 987 },
        { id: "business", name: "Bisnis & Manajemen", count: 1654 },
        { id: "frontend", name: "Frontend Developer", count: 892 },
        { id: "backend", name: "Backend Developer", count: 756, trending: true },
        { id: "mobile", name: "Mobile Developer", count: 623 }
    ],
    popularSearches: [
        { id: "1", keyword: "Frontend Developer", category: "Teknologi & IT", count: 1234 },
        { id: "2", keyword: "UI/UX Designer", category: "Desain & Kreatif", count: 876 },
        { id: "3", keyword: "Digital Marketing", category: "Marketing & Sales", count: 945 },
        { id: "4", keyword: "Backend Developer", category: "Teknologi & IT", count: 756 },
        { id: "5", keyword: "Product Manager", category: "Bisnis & Manajemen", count: 678 },
        { id: "6", keyword: "Data Analyst", category: "Teknologi & IT", count: 543 },
        { id: "7", keyword: "Graphic Designer", category: "Desain & Kreatif", count: 467 },
        { id: "8", keyword: "Sales Executive", category: "Marketing & Sales", count: 432 }
    ],
    locations: [
        { id: "jakarta", name: "Jakarta", province: "DKI Jakarta", jobCount: 4567 },
        { id: "bandung", name: "Bandung", province: "Jawa Barat", jobCount: 2134 },
        { id: "surabaya", name: "Surabaya", province: "Jawa Timur", jobCount: 1876 },
        { id: "medan", name: "Medan", province: "Sumatera Utara", jobCount: 987 },
        { id: "yogyakarta", name: "Yogyakarta", province: "DI Yogyakarta", jobCount: 876 },
        { id: "semarang", name: "Semarang", province: "Jawa Tengah", jobCount: 765 },
        { id: "makassar", name: "Makassar", province: "Sulawesi Selatan", jobCount: 543 },
        { id: "denpasar", name: "Denpasar", province: "Bali", jobCount: 432 }
    ]
}
type FloatingElementProps = {
  children: ReactNode
  delay?: number
  duration?: number
}

const FloatingElement = ({ children, delay = 0, duration = 4 }: FloatingElementProps) => {
    return (
        <div 
            className="animate-caret-blink"
            style={{
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                animationIterationCount: 'infinite',
                animationTimingFunction: 'ease-in-out'
            }}
        >
            {children}
        </div>
    )
}

type PulseElementProps = {
  children: ReactNode
  delay?: number
}


const PulseElement = ({ children, delay = 0 }: PulseElementProps) => {
    return (
        <div 
            className="animate-ping"
            style={{
                animationDelay: `${delay}s`,
                animationDuration: '3s',
                animationIterationCount: 'infinite'
            }}
        >
            {children}
        </div>
    )
}

export default function HomePage() {
    const [, setSearchKeyword] = useState("")
    const [] = useState("")
    const [, setSelectedCategory] = useState("")
    const [, setAnimationPhase] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationPhase(prev => (prev + 1) % 3)
        }, 3000)
        return () => clearInterval(interval)
    }, [])


    const handlePopularSearch = (keyword: string, category: string) => {
        setSearchKeyword(keyword)
        setSelectedCategory(category)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-emerald-200">
            <section className="relative pt-12 pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-emerald-600/5"></div>
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-green-400/10 to-emerald-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-green-500/10 rounded-full blur-3xl"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md rounded-full px-6 py-3 border border-green-100 shadow-lg">
                                <Sparkles className="h-4 w-4 text-green-600" />
                                <span className="text-sm font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                                    Platform #1 Pencari Kerja di Indonesia
                                </span>
                            </div>
                            <div className="space-y-6">
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                                        {homePageData.heroSection.title}
                                    </span>
                                </h1>
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700">
                                    {homePageData.heroSection.subtitle}
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {homePageData.heroSection.description}
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                                <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-gray-100">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg">
                                        <Briefcase className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold text-gray-900">
                                            {homePageData.heroSection.stats.totalJobs.toLocaleString("id-ID")}
                                        </div>
                                        <div className="text-xs font-medium text-gray-600">Lowongan Kerja</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-gray-100">
                                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-lg flex items-center justify-center shadow-lg">
                                        <Building className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold text-gray-900">
                                            {homePageData.heroSection.stats.activeCompanies.toLocaleString("id-ID")}
                                        </div>
                                        <div className="text-xs font-medium text-gray-600">Perusahaan Aktif</div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-gray-100">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
                                        <Users className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold text-gray-900">
                                            {homePageData.heroSection.stats.jobSeekers.toLocaleString("id-ID")}
                                        </div>
                                        <div className="text-xs font-medium text-gray-600">Pencari Kerja</div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                                    <TrendingUp className="h-4 w-4 text-green-600" />
                                    Pencarian Populer
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {homePageData.popularSearches.map((search) => (
                                        <Button
                                            key={search.id}
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handlePopularSearch(search.keyword, search.category)}
                                            className="bg-white/70 backdrop-blur-sm border-green-200 text-gray-700 hover:bg-green-50 hover:text-green-700 hover:border-green-300 transition-all duration-200"
                                        >
                                            {search.keyword}
                                            <span className="ml-2 bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs">
                                                {search.count}
                                            </span>
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        {/* Animated Illustration Section */}
                        <div className="lg:pl-8 flex items-center justify-center">
                            <div className="relative w-full max-w-lg h-96">
                                {/* Central Circle with rotating border */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative">
                                        <div 
                                            className="w-48 h-48 rounded-full border-4 border-green-200"
                                            style={{
                                                background: 'conic-gradient(from 0deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.3), rgba(34, 197, 94, 0.1))',
                                                animation: 'spin 8s linear infinite'
                                            }}
                                        />
                                        <div className="absolute inset-4 bg-white/95 backdrop-blur-lg rounded-full shadow-xl flex items-center justify-center">
                                            <div className="text-center p-4">
                                                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-3 mx-auto shadow-lg animate-bounce">
                                                    <Search className="h-8 w-8 text-white" />
                                                </div>
                                                <h3 className="font-bold text-gray-900 mb-1">Cari & Temukan</h3>
                                                <p className="text-xs text-gray-600">Pekerjaan Impian</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Job Cards */}
                                <FloatingElement delay={0}>
                                    <div className="absolute top-8 left-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-green-100">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                                                <Briefcase className="h-4 w-4 text-white" />
                                            </div>
                                            <div>
                                                <div className="text-xs font-semibold text-gray-900">Frontend Dev</div>
                                                <div className="text-xs text-gray-500">Jakarta</div>
                                            </div>
                                        </div>
                                    </div>
                                </FloatingElement>

                                <FloatingElement delay={1}>
                                    <div className="absolute top-12 right-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-green-100">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg flex items-center justify-center">
                                                <Users className="h-4 w-4 text-white" />
                                            </div>
                                            <div>
                                                <div className="text-xs font-semibold text-gray-900">UI/UX Designer</div>
                                                <div className="text-xs text-gray-500">Bandung</div>
                                            </div>
                                        </div>
                                    </div>
                                </FloatingElement>

                                <FloatingElement delay={2}>
                                    <div className="absolute bottom-16 left-8 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-green-100">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                                                <TrendingUp className="h-4 w-4 text-white" />
                                            </div>
                                            <div>
                                                <div className="text-xs font-semibold text-gray-900">Data Analyst</div>
                                                <div className="text-xs text-gray-500">Surabaya</div>
                                            </div>
                                        </div>
                                    </div>
                                </FloatingElement>

                                <FloatingElement delay={1.5}>
                                    <div className="absolute bottom-20 right-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-green-100">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-400 rounded-lg flex items-center justify-center">
                                                <Building className="h-4 w-4 text-white" />
                                            </div>
                                            <div>
                                                <div className="text-xs font-semibold text-gray-900">Product Manager</div>
                                                <div className="text-xs text-gray-500">Yogyakarta</div>
                                            </div>
                                        </div>
                                    </div>
                                </FloatingElement>

                                {/* Pulsing Dots */}
                                <PulseElement delay={0}>
                                    <div className="absolute top-24 right-12 w-3 h-3 bg-green-400 rounded-full"></div>
                                </PulseElement>
                                <PulseElement delay={1}>
                                    <div className="absolute bottom-32 left-16 w-2 h-2 bg-emerald-400 rounded-full"></div>
                                </PulseElement>
                                <PulseElement delay={2}>
                                    <div className="absolute top-16 left-20 w-2 h-2 bg-green-500 rounded-full"></div>
                                </PulseElement>

                                {/* Connecting Lines */}
                                <div className="absolute inset-0 opacity-20">
                                    <svg className="w-full h-full">
                                        <defs>
                                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="rgb(34, 197, 94)" />
                                                <stop offset="100%" stopColor="rgb(16, 185, 129)" />
                                            </linearGradient>
                                        </defs>
                                        <path
                                            d="M 50 50 Q 100 80 150 50 T 250 70"
                                            stroke="url(#lineGradient)"
                                            strokeWidth="2"
                                            fill="none"
                                            strokeDasharray="5,5"
                                            className="animate-pulse"
                                        />
                                        <path
                                            d="M 80 200 Q 150 160 220 200 T 320 180"
                                            stroke="url(#lineGradient)"
                                            strokeWidth="2"
                                            fill="none"
                                            strokeDasharray="5,5"
                                            className="animate-pulse"
                                            style={{ animationDelay: '1s' }}
                                        />
                                    </svg>
                                </div>

                                {/* Success Indicators */}
                                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 animate-bounce">
                                    <div className="flex items-center gap-1 bg-green-100 rounded-full px-3 py-1">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-caret-blink"></div>
                                        <span className="text-xs font-semibold text-green-700">15.4K+ Jobs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                @keyframes spin {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </div>
    )
}