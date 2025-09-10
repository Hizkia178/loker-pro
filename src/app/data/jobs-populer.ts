// jobs-popular.ts
export interface JobData {
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

export const jobsPopularData: JobData[] = [
  {
    id: "1",
    company: "PT Kompakindo Media Dewata (SAM Design)",
    title: "Copywriter",
    location: "Surabaya",
    jobType: "Full Time",
    education: ["Sarjana / S1"],
    experience: "1-2 Tahun",
    category: "Akuntansi",
    tags: ["Fresh Graduate", "Junior / Entry Level", "Penulis & Editor"],
    timePosted: "23 menit yang lalu",
    logo: "👑"
  },
  {
    id: "2",
    company: "Optik Bunaken",
    title: "Sales Assisten Refraksi Optisi (SASRO)",
    location: "Surabaya",
    jobType: "Full Time",
    education: ["SMA / SMK / STM", "Diploma/D1/D2/D3"],
    experience: "1-2 Tahun",
    category: "Customer Service",
    tags: ["Sarjana / S1", "Fresh Graduate", "Staff / Officer", "Optik"],
    salary: "Rp 2,5 - 5 Juta",
    timePosted: "32 menit yang lalu",
    logo: "👁️"
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
    tags: ["Fresh Graduate", "Junior / Entry Level", "Penjualan & Relasi Perbankan"],
    salary: "Rp 3 - 4 Juta",
    timePosted: "1 jam yang lalu",
    logo: "🏦"
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
    logo: "💻"
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
    tags: ["Finance", "Investment", "Advisory"],
    salary: "Rp 6 - 10 Juta",
    timePosted: "3 jam yang lalu",
    logo: "📈"
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
    tags: ["Data Entry", "Office Management", "Fresh Graduate"],
    salary: "Rp 3,5 - 5 Juta",
    timePosted: "4 jam yang lalu",
    logo: "🏥"
  }
];

export const categories = [
  "Semua",
  "Akuntansi", 
  "Perbankan / Jasa Finansial",
  "Administrasi",
  "Customer Service",
  "IT",
  "Lainnya"
];