"use client"

import { useState } from 'react';
import {
    Heart,
    MapPin,
    Clock,
    Briefcase,
    DollarSign,
    ChevronDown,
    Users,
    Calculator,
    Building2,
    Headphones,
    Monitor,
    ShoppingBag,
    Stethoscope,
    PenTool
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import clsx from 'clsx';

interface JobData {
    id: string;
    company: string;
    title: string;
    location: string;
    jobType: string;
    education: string[];
    experience: string;
    category: string;
    tags: string[];
    salary?: string;
    timePosted: string;
    logo: string;
    isPremium?: boolean;
}

const jobsPopularData: JobData[] = [
    {
        id: "1",
        company: "PT Kompakindo Media Dewata",
        title: "Copywriter",
        location: "Surabaya",
        jobType: "Full Time",
        education: ["Sarjana / S1"],
        experience: "1-2 Tahun",
        category: "Marketing",
        tags: ["Fresh Graduate", "Junior Level", "Content Writing"],
        salary: "Rp 2,5 - 5 Juta",
        timePosted: "23 menit yang lalu",
        logo: "KM"
    },
    {
        id: "2",
        company: "Optik Bunaken",
        title: "Sales Assistant Refraksi Optisi",
        location: "Surabaya",
        jobType: "Full Time",
        education: ["SMA / SMK / STM", "Diploma/D1/D2/D3"],
        experience: "1-2 Tahun",
        category: "Healthcare",
        tags: ["Sales", "Healthcare", "Customer Relations"],
        salary: "Rp 2,5 - 5 Juta",
        timePosted: "32 menit yang lalu",
        logo: "OB"
    },
    {
        id: "3",
        company: "Kspps Yaummi Mas",
        title: "Account Officer",
        location: "Demak",
        jobType: "Full Time",
        education: ["SMA / SMK / STM", "Diploma/D1/D2/D3"],
        experience: "1-2 Tahun",
        category: "Perbankan / Jasa Finansial",
        tags: ["Banking", "Finance", "Customer Service"],
        salary: "Rp 3 - 4 Juta",
        timePosted: "1 jam yang lalu",
        logo: "KY"
    },
    {
        id: "4",
        company: "PT Digital Inovasi Indonesia",
        title: "Frontend Developer",
        location: "Jakarta",
        jobType: "Full Time",
        education: ["Sarjana / S1"],
        experience: "2-3 Tahun",
        category: "IT",
        tags: ["React", "JavaScript", "TypeScript"],
        salary: "Rp 8 - 12 Juta",
        timePosted: "2 jam yang lalu",
        logo: "DI"
    },
    {
        id: "5",
        company: "PT Mandiri Sekuritas",
        title: "Investment Advisor",
        location: "Surabaya",
        jobType: "Full Time",
        education: ["Sarjana / S1"],
        experience: "1-3 Tahun",
        category: "Perbankan / Jasa Finansial",
        tags: ["Investment", "Finance", "Advisory"],
        salary: "Rp 6 - 10 Juta",
        timePosted: "3 jam yang lalu",
        logo: "MS"
    },
    {
        id: "6",
        company: "RS Mitra Keluarga",
        title: "Staff Administrasi",
        location: "Bandung",
        jobType: "Full Time",
        education: ["SMA / SMK / STM", "Diploma/D1/D2/D3"],
        experience: "Fresh Graduate",
        category: "Administrasi",
        tags: ["Data Entry", "Office Management", "Healthcare"],
        salary: "Rp 3,5 - 5 Juta",
        timePosted: "4 jam yang lalu",
        logo: "RS"
    }
];

const categories = [
    { value: "Semua", label: "Semua", icon: Users },
    { value: "Akuntansi", label: "Akuntansi", icon: Calculator },
    { value: "Perbankan / Jasa Finansial", label: "Perbankan / Jasa Finansial", icon: Building2 },
    { value: "Administrasi", label: "Administrasi", icon: Briefcase },
    { value: "Healthcare", label: "Healthcare", icon: Stethoscope },
    { value: "IT", label: "IT", icon: Monitor },
    { value: "Marketing", label: "Marketing", icon: PenTool }
];

export default function JobsPopuler() {
    const [selectedCategory, setSelectedCategory] = useState("Semua");
    const [likedJobs, setLikedJobs] = useState<Set<string>>(new Set());

    const filteredJobs = selectedCategory === "Semua"
        ? jobsPopularData
        : jobsPopularData.filter(job => job.category === selectedCategory);

    const toggleLike = (jobId: string) => {
        const newLikedJobs = new Set(likedJobs);
        if (newLikedJobs.has(jobId)) {
            newLikedJobs.delete(jobId);
        } else {
            newLikedJobs.add(jobId);
        }
        setLikedJobs(newLikedJobs);
    };

    const JobCard = ({ job }: { job: JobData }) => (
        <div className={clsx(
            "bg-white border border-slate-200 rounded-2xl p-6 transition-all duration-300",
            "hover:border-blue-200 hover:-translate-y-1 hover:bg-blue-50",
            "group cursor-pointer relative overflow-hidden",
            "flex flex-col" // Tambahkan flex-col
        )}>
            {/* Konten utama card */}
            <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                        <Avatar className="w-12 h-12 ring-2 ring-blue-50 ring-offset-1">
                            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white font-semibold text-sm">
                                {job.logo}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-tight text-lg">
                                {job.title}
                            </h3>
                            <p className="text-sm text-slate-600 mt-1 font-medium">{job.company}</p>
                            <div className="flex items-center space-x-2 mt-2 text-sm text-slate-500">
                                <MapPin className="w-4 h-4" />
                                <span>{job.location}</span>
                            </div>
                        </div>
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        className={clsx(
                            "rounded-full w-10 h-10 p-0 transition-all duration-300 shrink-0",
                            likedJobs.has(job.id)
                                ? "text-rose-500 hover:text-rose-600 bg-rose-50 hover:bg-rose-100"
                                : "text-slate-400 hover:text-rose-500 hover:bg-rose-50"
                        )}
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleLike(job.id);
                        }}
                    >
                        <Heart className={clsx("w-4 h-4", likedJobs.has(job.id) && "fill-current")} />
                    </Button>
                </div>

                <div className="space-y-4 mb-4">
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 font-medium">
                            <Briefcase className="w-3 h-3 mr-1" />
                            {job.jobType}
                        </Badge>
                        {job.education.map((edu, index) => (
                            <Badge key={index} variant="outline" className="text-xs border-slate-300 text-slate-600">
                                {edu}
                            </Badge>
                        ))}
                        <Badge variant="outline" className="text-xs border-slate-300 text-slate-600">
                            {job.experience}
                        </Badge>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {job.tags.slice(0, 3).map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">
                                {tag}
                            </Badge>
                        ))}
                        {job.tags.length > 3 && (
                            <Badge variant="secondary" className="text-xs bg-slate-100 text-slate-700">
                                +{job.tags.length - 3} lainnya
                            </Badge>
                        )}
                    </div>
                </div>

                {job.salary && (
                    <div className="mb-4">
                        <div className="flex items-center space-x-2 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border border-emerald-200">
                            <DollarSign className="w-5 h-5 text-emerald-600" />
                            <span className="font-bold text-emerald-700 text-lg">{job.salary}</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Separator selalu di bawah */}
            <Separator className="mt-auto mb-4" />

            <div className="flex items-center justify-end mt-2">
                <div className="flex items-center space-x-2 text-sm text-slate-500">
                    <Clock className="w-4 h-4" />
                    <span>{job.timePosted}</span>
                </div>
            </div>
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">
                        Lowongan Kerja Terpopuler
                    </h2>
                    <p className="text-slate-600">
                        Temukan pekerjaan terpopuler dari perusahaan terpercaya
                    </p>
                </div>

                <div className="mt-4 lg:mt-0">
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger className="w-72 h-12">
                            <SelectValue placeholder="Pilih kategori" />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map((category) => (
                                <SelectItem key={category.value} value={category.value}>
                                    <div className="flex items-center space-x-2">
                                        <category.icon className="w-4 h-4" />
                                        <span>{category.label}</span>
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {filteredJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>

            <div className="text-center">
                <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-3 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 h-12"
                    asChild
                >
                    <a href="/cari-lowongan-kerja" className="flex items-center space-x-2">
                        <span>Lihat Lebih Banyak</span>
                        <ChevronDown className="w-4 h-4" />
                    </a>
                </Button>
            </div>
        </div>
    );
}