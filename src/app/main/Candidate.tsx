"use client"

import { useState } from 'react';
import {
    MapPin,
    Briefcase,
    DollarSign,
    ChevronDown,
    Monitor,
    PenTool,
    Users,
    TrendingUp,
    Lightbulb,
    GraduationCap,
    Award,
    Eye,
    MessageCircle,
    CheckCircle,
    Calendar,
    Globe,
    Linkedin,
    Github,
    UserCheck,
    Star,
    SearchX
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import clsx from 'clsx';
import Link from 'next/link';

interface CandidateData {
    id: string;
    name: string;
    title: string;
    location: string;
    experience: string;
    education: string;
    skills: string[];
    expectedSalary?: string;
    availability: string;
    profileImage?: string;
    rating: number;
    completedProjects: number;
    bio: string;
    isVerified: boolean;
    isPremium?: boolean;
    isOpenToWork: boolean;
    languages: string[];
    portfolio?: string;
    linkedin?: string;
    github?: string;
    lastActive: string;
}

const candidatesData: CandidateData[] = [
    {
        id: "c1",
        name: "Ahmad Rizki Pratama",
        title: "Senior Full Stack Developer",
        location: "Jakarta",
        experience: "5+ Tahun",
        education: "S1 Teknik Informatika - Institut Teknologi Bandung",
        skills: ["React", "Node.js", "Python", "AWS", "Docker", "PostgreSQL", "TypeScript", "GraphQL"],
        expectedSalary: "Rp 18 - 25 Juta",
        availability: "Tersedia Sekarang",
        rating: 4.9,
        completedProjects: 47,
        bio: "Passionate full-stack developer dengan 5+ tahun pengalaman dalam membangun aplikasi web scalable. Berpengalaman dalam fintech dan e-commerce.",
        isVerified: true,
        isPremium: true,
        isOpenToWork: true,
        languages: ["Indonesia", "English", "Mandarin"],
        portfolio: "ahmadrizki.dev",
        linkedin: "linkedin.com/in/ahmadrizki",
        github: "github.com/ahmadrizki",
        lastActive: "Online sekarang"
    },
    {
        id: "c2",
        name: "Sari Indah Permatasari",
        title: "Digital Marketing Strategist",
        location: "Bandung",
        experience: "4+ Tahun",
        education: "S1 Komunikasi - Universitas Padjadjaran",
        skills: ["SEO", "Google Ads", "Social Media Marketing", "Content Strategy", "Analytics", "Email Marketing"],
        expectedSalary: "Rp 12 - 18 Juta",
        availability: "2 Minggu Notice",
        rating: 4.7,
        completedProjects: 32,
        bio: "Digital marketing expert yang telah membantu 50+ brand meningkatkan online presence dan ROI. Spesialisasi dalam growth hacking dan conversion optimization.",
        isVerified: true,
        isPremium: false,
        isOpenToWork: true,
        languages: ["Indonesia", "English"],
        portfolio: "sarimarketing.com",
        linkedin: "linkedin.com/in/saripermata",
        lastActive: "2 jam yang lalu"
    },
    {
        id: "c3",
        name: "Budi Santoso",
        title: "Senior Data Analyst",
        location: "Jakarta",
        experience: "6+ Tahun",
        education: "S1 Statistika - Universitas Indonesia",
        skills: ["Python", "R", "SQL", "Tableau", "Power BI", "Machine Learning", "Statistics", "Excel"],
        expectedSalary: "Rp 15 - 22 Juta",
        availability: "1 Bulan Notice",
        rating: 4.5,
        completedProjects: 28,
        bio: "Data analyst berpengalaman dalam banking dan retail. Ahli dalam predictive modeling dan business intelligence untuk strategic decision making.",
        isVerified: true,
        isPremium: false,
        isOpenToWork: false,
        languages: ["Indonesia", "English"],
        linkedin: "linkedin.com/in/budisantoso",
        github: "github.com/budisantoso",
        lastActive: "1 hari yang lalu"
    },
    {
        id: "c4",
        name: "Maya Kusuma Dewi",
        title: "Product Manager",
        location: "Jakarta",
        experience: "7+ Tahun",
        education: "S2 MBA - INSEAD Singapore",
        skills: ["Product Strategy", "Agile", "User Research", "Roadmapping", "Analytics", "Leadership", "Figma"],
        expectedSalary: "Rp 25 - 35 Juta",
        availability: "Tersedia Sekarang",
        rating: 4.8,
        completedProjects: 15,
        bio: "Experienced product manager dengan track record meluncurkan 10+ successful products. Expertise dalam B2B SaaS dan mobile applications.",
        isVerified: true,
        isPremium: true,
        isOpenToWork: true,
        languages: ["Indonesia", "English", "French"],
        portfolio: "mayakusuma.com",
        linkedin: "linkedin.com/in/mayakusuma",
        lastActive: "Online sekarang"
    },
    {
        id: "c5",
        name: "Andi Wijaya",
        title: "UI/UX Designer",
        location: "Yogyakarta",
        experience: "4+ Tahun",
        education: "S1 Desain Komunikasi Visual - Institut Seni Budaya Indonesia",
        skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research", "Design System", "Webflow"],
        expectedSalary: "Rp 10 - 16 Juta",
        availability: "Freelance Available",
        rating: 4.6,
        completedProjects: 89,
        bio: "Creative UI/UX designer dengan passion untuk creating intuitive and beautiful user experiences. Portfolio includes work for startups dan enterprise clients.",
        isVerified: true,
        isPremium: false,
        isOpenToWork: true,
        languages: ["Indonesia", "English"],
        portfolio: "andidesign.co",
        linkedin: "linkedin.com/in/andiwijaya",
        lastActive: "3 jam yang lalu"
    },
    {
        id: "c6",
        name: "Dr. Fitri Handayani",
        title: "Data Science Lead",
        location: "Bandung",
        experience: "8+ Tahun",
        education: "S3 Computer Science - Institut Teknologi Bandung",
        skills: ["Machine Learning", "Deep Learning", "Python", "TensorFlow", "Apache Spark", "Cloud Computing", "Leadership"],
        expectedSalary: "Rp 30 - 45 Juta",
        availability: "3 Bulan Notice",
        rating: 4.9,
        completedProjects: 22,
        bio: "PhD in Computer Science dengan expertise dalam AI/ML. Memimpin tim data science di unicorn startup dan berkontribusi dalam 15+ research papers.",
        isVerified: true,
        isPremium: true,
        isOpenToWork: false,
        languages: ["Indonesia", "English", "Japanese"],
        portfolio: "fitrihandayani.ai",
        linkedin: "linkedin.com/in/fitrihandayani",
        github: "github.com/fitrihandayani",
        lastActive: "5 jam yang lalu"
    }
];

const categoryFilters = [
    { value: "semua", label: "Semua Profesi", icon: Users },
    { value: "developer", label: "Developer", icon: Monitor },
    { value: "marketing", label: "Marketing", icon: PenTool },
    { value: "data", label: "Data & Analytics", icon: TrendingUp },
    { value: "product", label: "Product", icon: Lightbulb },
    { value: "design", label: "Design", icon: Award }
];

const availabilityFilters = [
    { value: "semua", label: "Semua" },
    { value: "available", label: "Tersedia Sekarang" },
    { value: "notice", label: "Butuh Notice" },
    { value: "freelance", label: "Freelance" }
];

export default function Candidates() {
    const [selectedCategory, setSelectedCategory] = useState("semua");
    const [selectedAvailability, setSelectedAvailability] = useState("semua");

    const filteredCandidates = candidatesData.filter(candidate => {
        const categoryMatch = selectedCategory === "semua" ||
            (selectedCategory === "developer" && candidate.title.toLowerCase().includes("developer")) ||
            (selectedCategory === "marketing" && candidate.title.toLowerCase().includes("marketing")) ||
            (selectedCategory === "data" && (candidate.title.toLowerCase().includes("data") || candidate.title.toLowerCase().includes("analyst"))) ||
            (selectedCategory === "product" && candidate.title.toLowerCase().includes("product")) ||
            (selectedCategory === "design" && candidate.title.toLowerCase().includes("design"));

        const availabilityMatch = selectedAvailability === "semua" ||
            (selectedAvailability === "available" && candidate.availability.includes("Tersedia Sekarang")) ||
            (selectedAvailability === "notice" && candidate.availability.includes("Notice")) ||
            (selectedAvailability === "freelance" && candidate.availability.includes("Freelance"));

        return categoryMatch && availabilityMatch;
    });

    const CandidateCard = ({ candidate }: { candidate: CandidateData }) => (
        <div className={clsx(
            "bg-gradient-to-br from-white via-white to-emerald-50/30 border-2 border-emerald-200 rounded-2xl p-6 transition-all duration-300 relative overflow-hidden",
            "hover:bg-emerald-50 hover:border-emerald-300 hover:-translate-y-1",
            "group cursor-pointer",
            "flex flex-col",
            !candidate.isOpenToWork && "opacity-75"
        )}>
            <div className="flex-1">
                <div className="flex items-start justify-between mb-4 pr-20">
                    <div className="flex items-start space-x-4">
                        <div className="relative">
                            <Avatar className="w-16 h-16 ring-2 ring-emerald-100 ring-offset-1">
                                <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-bold text-lg">
                                    {candidate.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                                </AvatarFallback>
                            </Avatar>
                            {candidate.lastActive.includes("Online") && (
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                            )}
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors text-lg leading-tight">
                                {candidate.name}
                            </h3>
                            <p className="text-sm text-slate-600 mt-1 font-medium">{candidate.title}</p>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-slate-500">
                                <div className="flex items-center space-x-1">
                                    <MapPin className="w-4 h-4" />
                                    <span>{candidate.location}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <Briefcase className="w-4 h-4" />
                                    <span>{candidate.experience}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 mb-4">
                    <div className="flex flex-wrap gap-2">
                        {candidate.isVerified && (
                            <Badge className="bg-blue-100 text-blue-700 border-blue-200 px-2 py-1 text-xs font-semibold">
                                <UserCheck className="w-3 h-3 mr-1" />
                                Verified
                            </Badge>
                        )}
                        <Badge className={clsx(
                            "border font-medium",
                            candidate.isOpenToWork
                                ? "bg-green-100 text-green-800 border-green-200"
                                : "bg-orange-100 text-orange-800 border-orange-200"
                        )}>
                            <CheckCircle className="w-3 h-3 mr-1" />
                            {candidate.isOpenToWork ? "Open to Work" : "Not Available"}
                        </Badge>
                        <Badge variant="outline" className="text-xs border-emerald-200 text-emerald-700">
                            <GraduationCap className="w-3 h-3 mr-1" />
                            {candidate.education.split(' - ')[0]}
                        </Badge>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">{candidate.bio}</p>

                    <div className="flex flex-wrap gap-2">
                        {candidate.skills.slice(0, 6).map((skill, index) => (
                            <Badge key={index} variant="secondary" className="text-xs bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition-colors">
                                {skill}
                            </Badge>
                        ))}
                        {candidate.skills.length > 6 && (
                            <Badge variant="secondary" className="text-xs bg-emerald-100 text-emerald-700">
                                +{candidate.skills.length - 6} lainnya
                            </Badge>
                        )}
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1 text-slate-600">
                                <Calendar className="w-4 h-4" />
                                <span>{candidate.availability}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-slate-600">
                                <Globe className="w-4 h-4" />
                                <span>{candidate.languages.join(", ")}</span>
                            </div>
                        </div>
                        <div className="text-slate-500 text-xs">{candidate.lastActive}</div>
                    </div>
                </div>

                {candidate.expectedSalary && (
                    <div className="mb-4">
                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 rounded-xl border border-emerald-200 shadow-sm">
                            <div className="flex items-center space-x-2">
                                <DollarSign className="w-5 h-5 text-emerald-600" />
                                <span className="font-bold text-emerald-700 text-lg">{candidate.expectedSalary}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                {candidate.portfolio && (
                                    <a href="#" className="text-emerald-600 hover:text-emerald-700">
                                        <Globe className="w-4 h-4" />
                                    </a>
                                )}
                                {candidate.linkedin && (
                                    <a href="#" className="text-emerald-600 hover:text-emerald-700">
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                )}
                                {candidate.github && (
                                    <a href="#" className="text-emerald-600 hover:text-emerald-700">
                                        <Github className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex space-x-2 mb-4">
                    <Button
                        size="sm"
                        className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white"
                    >
                        <Eye className="w-4 h-4 mr-2" />
                        Lihat Profile
                    </Button>
                    <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                    >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Hubungi
                    </Button>
                </div>
            </div>

            <Separator className="mt-auto mb-4" />

            <div className="flex items-center justify-end">
            </div>

            {/* Efek gradient overlay */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform rotate-12 group-hover:left-full transition-all duration-1000"></div>
            </div>
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                <div>
                    <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg">
                            <Users className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                            Kandidat Profesional
                        </h2>
                    </div>
                    <p className="text-slate-600">
                        Temukan talenta terbaik Indonesia yang siap bergabung dengan tim Anda
                    </p>
                </div>

                <div className="mt-4 lg:mt-0 flex flex-col sm:flex-row gap-3">
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger className="w-full h-12 border-emerald-200 focus:border-emerald-500">
                            <SelectValue placeholder="Pilih kategori" />
                        </SelectTrigger>
                        <SelectContent>
                            {categoryFilters.map((category) => (
                                <SelectItem key={category.value} value={category.value}>
                                    <div className="flex items-center space-x-2">
                                        <category.icon className="w-4 h-4" />
                                        <span>{category.label}</span>
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Select value={selectedAvailability} onValueChange={setSelectedAvailability}>
                        <SelectTrigger className="w-full h-12 border-emerald-200 focus:border-emerald-500">
                            <SelectValue placeholder="Ketersediaan" />
                        </SelectTrigger>
                        <SelectContent>
                            {availabilityFilters.map((availability) => (
                                <SelectItem key={availability.value} value={availability.value}>
                                    {availability.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="mb-8 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg">
                            <TrendingUp className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-emerald-800">
                                {filteredCandidates.length} Profesional Tersedia
                            </h3>
                            <p className="text-sm text-emerald-700">
                                {filteredCandidates.length} Profesional Tersedia •
                                {filteredCandidates.filter(c => c.isOpenToWork).length} Open to Work •
                                Upgrade Premium untuk kontak langsung
                            </p>
                        </div>
                    </div>
                    <Button
                        variant="outline"
                        className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                    >
                        <Star className="w-4 h-4 mr-2" />
                        Upgrade ke Premium
                    </Button>
                </div>
            </div>

            {filteredCandidates.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12">
                    <SearchX className="w-16 h-16 text-emerald-500 mb-4" />
                    <p className="text-lg text-slate-600 font-medium">Tidak ada kandidat ditemukan</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
                    {filteredCandidates.map((candidate) => (
                        <CandidateCard key={candidate.id} candidate={candidate} />
                    ))}
                </div>
            )}

            <div className="text-center">
                <Button
                    size="lg"
                    className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 h-12"
                    asChild
                >
                    <Link href="/kandidat" className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        <span>Jelajahi Lebih Banyak Kandidat</span>
                        <ChevronDown className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
            </div>
        </div>
    );
}