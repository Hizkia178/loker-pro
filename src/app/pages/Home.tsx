"use client"

import { useState } from "react"
import { Search, MapPin, Briefcase, TrendingUp, Users, Building, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

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

export default function HomePage() {
    const [searchKeyword, setSearchKeyword] = useState("")
    const [selectedLocation, setSelectedLocation] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")

    const handleSearch = () => {
        console.log("Search:", { keyword: searchKeyword, location: selectedLocation, category: selectedCategory })
    }

    const handlePopularSearch = (keyword: string, category: string) => {
        setSearchKeyword(keyword)
        setSelectedCategory(category)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-emerald-200">
            <section className="relative pt-16 pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-emerald-600/5"></div>
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-green-400/10 to-emerald-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-green-500/10 rounded-full blur-3xl"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full px-6 py-3 border border-green-100 shadow-sm">
                                <Star className="h-5 w-5 text-green-600" />
                                <span className="text-sm font-semibold text-green-700">Platform #1 Pencari Kerja di Indonesia</span>
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
                                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                                    <TrendingUp className="h-5 w-5 text-green-600" />
                                    Pencarian Populer
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {homePageData.popularSearches.slice(0, 6).map((search) => (
                                        <button
                                            key={search.id}
                                            onClick={() => handlePopularSearch(search.keyword, search.category)}
                                            className="inline-flex items-center space-x-2 px-4 py-2 bg-white/70 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-700 rounded-full text-sm font-medium text-gray-700 transition-all duration-200 hover:shadow-md transform hover:scale-105 backdrop-blur-sm border border-gray-200/50 hover:border-green-200"
                                        >
                                            <span>{search.keyword}</span>
                                            <Badge variant="secondary" className="text-xs bg-gray-200 text-gray-600">
                                                {search.count}
                                            </Badge>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="lg:pl-8">
                            <Card className="shadow-lg border-0 bg-white/95 backdrop-blur-lg overflow-hidden">
                                <CardContent className="p-6">
                                    <div className="text-center mb-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">Mulai Pencarian Anda</h3>
                                        <p className="text-sm text-gray-600">
                                            Temukan pekerjaan sesuai keahlian dan minat Anda
                                        </p>
                                    </div>
                                    <div className="space-y-5">
                                        <div>
                                            <label htmlFor="keyword" className="block text-xs font-semibold text-gray-700 mb-2">Kata Kunci Pekerjaan</label>
                                            <div className="relative">
                                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                                <Input
                                                    id="keyword"
                                                    name="keyword"
                                                    placeholder="Contoh: Frontend Developer, UI/UX Designer"
                                                    value={searchKeyword}
                                                    onChange={(e) => setSearchKeyword(e.target.value)}
                                                    className="pl-12 h-12 text-sm border-2 border-gray-200 focus:border-green-500 focus:ring-green-500 rounded-lg bg-gray-50 focus:bg-white transition-all duration-200 shadow-sm"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-5">
                                            <div>
                                                <label htmlFor="location" className="block text-xs font-semibold text-gray-700 mb-2">Lokasi Pekerjaan</label>
                                                <div className="relative">
                                                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 z-10" />
                                                    <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                                                        <SelectTrigger id="location" className="h-12 pl-12 text-sm border-2 w-full border-gray-200 focus:border-green-500 focus:ring-green-500 rounded-lg bg-gray-50 focus:bg-white shadow-sm">
                                                            <SelectValue placeholder="Pilih kota atau wilayah" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {homePageData.locations.map((location) => (
                                                                <SelectItem key={location.id} value={location.id}>
                                                                    <div className="flex items-center justify-between w-full">
                                                                        <span className="font-medium">{location.name}</span>
                                                                        <div className="flex items-center space-x-2 ml-4">
                                                                            <span className="text-xs text-gray-500">{location.province}</span>
                                                                            <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                                                                                {location.jobCount}
                                                                            </Badge>
                                                                        </div>
                                                                    </div>
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="category" className="block text-xs font-semibold text-gray-700 mb-2">Kategori Pekerjaan</label>
                                                <div className="relative">
                                                    <Briefcase className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 z-10" />
                                                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                                        <SelectTrigger id="category" className="h-12 pl-12 text-sm border-2 w-full border-gray-200 focus:border-green-500 focus:ring-green-500 rounded-lg bg-gray-50 focus:bg-white shadow-sm">
                                                            <SelectValue placeholder="Pilih bidang pekerjaan" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {homePageData.jobCategories.map((category) => (
                                                                <SelectItem key={category.id} value={category.name}>
                                                                    <div className="flex items-center justify-between w-full">
                                                                        <span className="font-medium">{category.name}</span>
                                                                        <div className="flex items-center space-x-2 ml-4">
                                                                            {category.trending && (
                                                                                <div className="flex items-center">
                                                                                    <TrendingUp className="h-3 w-3 text-orange-500 mr-1" />
                                                                                    <span className="text-xs text-orange-600 font-semibold">HOT</span>
                                                                                </div>
                                                                            )}
                                                                            <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                                                                                {category.count}
                                                                            </Badge>
                                                                        </div>
                                                                    </div>
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                        <Button
                                            onClick={handleSearch}
                                            size="lg"
                                            className="w-full h-12 text-sm font-semibold bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                                        >
                                            <Search className="h-4 w-4 mr-2" />
                                            Cari Pekerjaan
                                        </Button>
                                        <div className="pt-3 border-t border-gray-200">
                                            <p className="text-xs font-semibold text-gray-700 mb-2">Pencarian Cepat:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {homePageData.popularSearches.slice(0, 4).map((search) => (
                                                    <button
                                                        key={search.id}
                                                        onClick={() => handlePopularSearch(search.keyword, search.category)}
                                                        className="inline-flex items-center px-3 py-1.5 bg-gray-100 hover:bg-green-50 hover:text-green-700 rounded-full text-xs font-medium text-gray-600 transition-all duration-200 hover:shadow-sm"
                                                    >
                                                        {search.keyword}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
