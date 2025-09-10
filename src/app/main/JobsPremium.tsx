"use client"

import { useState } from 'react';
import {
  Heart,
  MapPin,
  Clock,
  Briefcase,
  DollarSign,
  ChevronDown,
  Crown,
  Star,
  Building2,
  Monitor,
  PenTool,
  Users,
  TrendingUp,
  Lightbulb,
  SearchX
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import clsx from 'clsx';
import Link from 'next/link';

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
  companyImage?: string;
  isPremium?: boolean;
}

const jobsPremiumData: JobData[] = [
  {
    id: "p1",
    company: "PT Bank Central Asia Tbk",
    title: "Senior Credit Analyst",
    location: "Jakarta",
    jobType: "Full Time",
    education: ["Sarjana / S1"],
    experience: "3-5 Tahun",
    category: "Perbankan / Jasa Finansial",
    tags: ["Credit Analysis", "Banking", "Risk Management"],
    salary: "Rp 15 - 25 Juta",
    timePosted: "1 jam yang lalu",
    logo: "BCA",
    isPremium: true
  },
  {
    id: "p2",
    company: "Google Indonesia",
    title: "Software Engineer",
    location: "Jakarta",
    jobType: "Full Time",
    education: ["Sarjana / S1"],
    experience: "2-4 Tahun",
    category: "IT",
    tags: ["Java", "Python", "Cloud Computing"],
    salary: "Rp 20 - 35 Juta",
    timePosted: "2 jam yang lalu",
    logo: "GOO",
    isPremium: true
  },
  {
    id: "p3",
    company: "PT Unilever Indonesia",
    title: "Marketing Manager",
    location: "Jakarta",
    jobType: "Full Time",
    education: ["Sarjana / S1"],
    experience: "4-6 Tahun",
    category: "Marketing",
    tags: ["Digital Marketing", "Brand Management", "Strategy"],
    salary: "Rp 18 - 30 Juta",
    timePosted: "3 jam yang lalu",
    logo: "UNI",
    isPremium: true
  },
  {
    id: "p4",
    company: "McKinsey & Company",
    title: "Management Consultant",
    location: "Jakarta",
    jobType: "Full Time",
    education: ["Sarjana / S1"],
    experience: "1-3 Tahun",
    category: "Konsultan",
    tags: ["Strategy", "Business Analysis", "Consulting"],
    salary: "Rp 25 - 40 Juta",
    timePosted: "4 jam yang lalu",
    logo: "MCK",
    isPremium: true
  },
  {
    id: "p5",
    company: "PT Astra International",
    title: "Finance Director",
    location: "Jakarta",
    jobType: "Full Time",
    education: ["Sarjana / S1", "Magister / S2"],
    experience: "8-12 Tahun",
    category: "Management",
    tags: ["Leadership", "Financial Planning", "Corporate Finance"],
    salary: "Rp 50 - 80 Juta",
    timePosted: "5 jam yang lalu",
    logo: "AST",
    isPremium: true
  },
  {
    id: "p6",
    company: "PT Telkom Indonesia",
    title: "Head of Digital Transformation",
    location: "Bandung",
    jobType: "Full Time",
    education: ["Sarjana / S1", "Magister / S2"],
    experience: "6-10 Tahun",
    category: "IT",
    tags: ["Digital Strategy", "Leadership", "Technology"],
    salary: "Rp 30 - 50 Juta",
    timePosted: "6 jam yang lalu",
    logo: "TEL",
    isPremium: true
  },
];

const categories = [
  { value: "Semua", label: "Semua", icon: Users },
  { value: "Perbankan / Jasa Finansial", label: "Perbankan / Jasa Finansial", icon: Building2 },
  { value: "IT", label: "IT", icon: Monitor },
  { value: "Marketing", label: "Marketing", icon: PenTool },
  { value: "Konsultan", label: "Konsultan", icon: Lightbulb },
  { value: "Management", label: "Management", icon: TrendingUp }
];

const jobTypes = [
  { value: "Semua", label: "Semua Jenis" },
  { value: "Full Time", label: "Full Time" },
  { value: "Part Time", label: "Part Time" },
  { value: "Freelance", label: "Freelance" }
];

const educations = [
  { value: "Semua", label: "Semua Pendidikan" },
  { value: "SMA/SMK", label: "SMA/SMK" },
  { value: "D3", label: "D3" },
  { value: "Sarjana / S1", label: "Sarjana / S1" },
  { value: "Magister / S2", label: "Magister / S2" }
];

const sorts = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" }
];

export default function JobsPremium() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedJobType, setSelectedJobType] = useState("Semua");
  const [selectedEducation, setSelectedEducation] = useState("Semua");
  const [selectedSort, setSelectedSort] = useState("newest");
  const [likedJobs, setLikedJobs] = useState<Set<string>>(new Set());

  const parseTimePosted = (time: string) => {
    const match = time.match(/(\d+) jam/);
    return match ? parseInt(match[1]) : 0;
  };

  let filteredJobs = jobsPremiumData;

  if (selectedCategory !== "Semua") {
    filteredJobs = filteredJobs.filter(job => job.category === selectedCategory);
  }

  if (selectedJobType !== "Semua") {
    filteredJobs = filteredJobs.filter(job => job.jobType === selectedJobType);
  }

  if (selectedEducation !== "Semua") {
    filteredJobs = filteredJobs.filter(job => job.education.includes(selectedEducation));
  }

  filteredJobs = [...filteredJobs].sort((a, b) => {
    const timeA = parseTimePosted(a.timePosted);
    const timeB = parseTimePosted(b.timePosted);
    return selectedSort === "newest" ? timeA - timeB : timeB - timeA;
  });

  const toggleLike = (jobId: string) => {
    const newLikedJobs = new Set(likedJobs);
    if (newLikedJobs.has(jobId)) {
      newLikedJobs.delete(jobId);
    } else {
      newLikedJobs.add(jobId);
    }
    setLikedJobs(newLikedJobs);
  };

  const PremiumJobCard = ({ job }: { job: JobData }) => (
    <div className={clsx(
      "bg-gradient-to-br from-white via-white to-red-50/30 border-2 border-red-200 rounded-2xl p-6 transition-all duration-300 relative overflow-hidden",
      "hover:bg-red-50 hover:border-red-200 hover:-translate-y-1",
      "group cursor-pointer",
      "flex flex-col"
    )}>
      {/* Konten utama card */}
      <div className="flex-1">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start space-x-4">
            <Avatar className="w-14 h-14 ring-2 ring-red-100 ring-offset-1">
              <AvatarFallback className="bg-gradient-to-br from-red-500 to-pink-600 text-white font-bold text-sm">
                {job.logo}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-slate-900 group-hover:text-red-700 transition-colors text-lg leading-tight">
                {job.title}
              </h3>
              <p className="text-sm text-slate-600 mt-1 font-medium">{job.company}</p>
              <div className="flex items-center space-x-2 mt-2 text-sm text-slate-500">
                <MapPin className="w-4 h-4" />
                <span>{job.location}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className={clsx(
                "rounded-full w-10 h-10 p-0 transition-all duration-300",
                likedJobs.has(job.id)
                  ? "text-red-500 hover:text-red-600 bg-red-50 hover:bg-red-100"
                  : "text-slate-400 hover:text-red-500 hover:bg-red-50"
              )}
              onClick={(e) => {
                e.stopPropagation();
                toggleLike(job.id);
              }}
            >
              <Heart className={clsx("w-4 h-4", likedJobs.has(job.id) && "fill-current")} />
            </Button>
          </div>
        </div>

        <div className="space-y-4 mb-4">
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-gradient-to-r from-red-500 to-pink-600 text-white border-0 px-3 py-1 text-xs font-semibold shadow-lg">
              <Crown className="w-3 h-3 mr-1" />
              Premium
            </Badge>
            <Badge variant="secondary" className="bg-red-50 text-red-700 border-red-200 font-medium">
              <Briefcase className="w-3 h-3 mr-1" />
              {job.jobType}
            </Badge>
            {job.education.map((edu, index) => (
              <Badge key={index} variant="outline" className="text-xs border-red-200 text-red-700">
                {edu}
              </Badge>
            ))}
            <Badge variant="outline" className="text-xs border-red-200 text-red-700">
              {job.experience}
            </Badge>
          </div>

          <div className="flex flex-wrap gap-2">
            {job.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs bg-red-100 text-red-700 hover:bg-red-200 transition-colors">
                {tag}
              </Badge>
            ))}
            {job.tags.length > 3 && (
              <Badge variant="secondary" className="text-xs bg-red-100 text-red-700">
                +{job.tags.length - 3} lainnya
              </Badge>
            )}
          </div>
        </div>

        {job.salary && (
          <div className="mb-4">
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-red-50 via-pink-50 to-red-50 rounded-xl border border-red-200 shadow-sm">
              <div className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-red-600" />
                <span className="font-bold text-red-700 text-lg">{job.salary}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-pink-500 fill-current" />
                <span className="text-xs text-slate-600 font-medium">Premium Job</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Separator selalu di bawah */}
      <Separator className="mt-auto mb-4" />

      {/* Footer waktu posting */}
      <div className="flex items-center justify-end">
        <div className="flex items-center space-x-2 text-sm text-slate-500">
          <Clock className="w-4 h-4" />
          <span>{job.timePosted}</span>
        </div>
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
            <div className="p-2 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              Lowongan Kerja Premium
            </h2>
          </div>
          <p className="text-slate-600">
            Peluang karir eksklusif dari perusahaan terkemuka dengan benefit terbaik
          </p>
        </div>

        <div className="mt-4 lg:mt-0 flex flex-col sm:flex-row gap-3">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full h-12 border-red-200 focus:border-red-500">
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

          <Select value={selectedJobType} onValueChange={setSelectedJobType}>
            <SelectTrigger className="w-full h-12 border-red-200 focus:border-red-500">
              <SelectValue placeholder="Jenis Loker" />
            </SelectTrigger>
            <SelectContent>
              {jobTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedEducation} onValueChange={setSelectedEducation}>
            <SelectTrigger className="w-full h-12 border-red-200 focus:border-red-500">
              <SelectValue placeholder="Pendidikan" />
            </SelectTrigger>
            <SelectContent>
              {educations.map((edu) => (
                <SelectItem key={edu.value} value={edu.value}>
                  {edu.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedSort} onValueChange={setSelectedSort}>
            <SelectTrigger className="w-full h-12 border-red-200 focus:border-red-500">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              {sorts.map((sort) => (
                <SelectItem key={sort.value} value={sort.value}>
                  {sort.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mb-8 p-4 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg">
            <Star className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-red-800">Lowongan Premium</h3>
            <p className="text-sm text-red-700">Pekerjaan eksklusif dengan gaji tinggi dan benefit menarik dari perusahaan ternama</p>
          </div>
        </div>
      </div>

      {filteredJobs.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12">
          <SearchX className="w-16 h-16 text-red-500 mb-4" />
          <p className="text-lg text-slate-600 font-medium">Tidak ada lowongan ditemukan</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredJobs.map((job) => (
            <PremiumJobCard key={job.id} job={job} />
          ))}
        </div>
      )}

      <div className="text-center">
        <Button
          size="lg"
          className="px-8 py-3 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 h-12"
          asChild
        >
          <Link
            href="/cari-lowongan-kerja?premium=true"
            className="flex items-center space-x-2"
          >
            <Crown className="w-4 h-4" />
            <span>Lihat Semua Premium Jobs</span>
            <ChevronDown className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}