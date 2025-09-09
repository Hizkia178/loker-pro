// home-page.ts
import { 
  Code, 
  Palette, 
  TrendingUp, 
  Heart, 
  Briefcase, 
  Monitor, 
  Server, 
  Smartphone} from "lucide-react"

export interface JobCategory {
  id: string
  name: string
  icon: any
  count: number
  trending?: boolean
}

export interface PopularSearch {
  id: string
  keyword: string
  category: string
  count: number
}

export interface Location {
  id: string
  name: string
  province: string
  jobCount: number
}

export interface HomePageData {
  heroSection: {
    title: string
    subtitle: string
    description: string
    stats: {
      totalJobs: number
      activeCompanies: number
      jobSeekers: number
    }
  }
  jobCategories: JobCategory[]
  popularSearches: PopularSearch[]
  locations: Location[]
}

export const homePageData: HomePageData = {
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
    {
      id: "technology",
      name: "Teknologi & IT",
      icon: Code,
      count: 3245,
      trending: true
    },
    {
      id: "design",
      name: "Desain & Kreatif",
      icon: Palette,
      count: 1876
    },
    {
      id: "marketing",
      name: "Marketing & Sales",
      icon: TrendingUp,
      count: 2134,
      trending: true
    },
    {
      id: "healthcare",
      name: "Kesehatan",
      icon: Heart,
      count: 987
    },
    {
      id: "business",
      name: "Bisnis & Manajemen",
      icon: Briefcase,
      count: 1654
    },
    {
      id: "frontend",
      name: "Frontend Developer",
      icon: Monitor,
      count: 892
    },
    {
      id: "backend",
      name: "Backend Developer",
      icon: Server,
      count: 756,
      trending: true
    },
    {
      id: "mobile",
      name: "Mobile Developer",
      icon: Smartphone,
      count: 623
    }
  ],

  popularSearches: [
    {
      id: "1",
      keyword: "Frontend Developer",
      category: "Teknologi & IT",
      count: 1234
    },
    {
      id: "2", 
      keyword: "UI/UX Designer",
      category: "Desain & Kreatif",
      count: 876
    },
    {
      id: "3",
      keyword: "Digital Marketing",
      category: "Marketing & Sales", 
      count: 945
    },
    {
      id: "4",
      keyword: "Backend Developer",
      category: "Teknologi & IT",
      count: 756
    },
    {
      id: "5",
      keyword: "Product Manager",
      category: "Bisnis & Manajemen",
      count: 678
    },
    {
      id: "6",
      keyword: "Data Analyst",
      category: "Teknologi & IT",
      count: 543
    },
    {
      id: "7",
      keyword: "Graphic Designer",
      category: "Desain & Kreatif",
      count: 467
    },
    {
      id: "8",
      keyword: "Sales Executive",
      category: "Marketing & Sales",
      count: 432
    }
  ],

  locations: [
    {
      id: "jakarta",
      name: "Jakarta",
      province: "DKI Jakarta",
      jobCount: 4567
    },
    {
      id: "bandung", 
      name: "Bandung",
      province: "Jawa Barat",
      jobCount: 2134
    },
    {
      id: "surabaya",
      name: "Surabaya", 
      province: "Jawa Timur",
      jobCount: 1876
    },
    {
      id: "medan",
      name: "Medan",
      province: "Sumatera Utara", 
      jobCount: 987
    },
    {
      id: "yogyakarta",
      name: "Yogyakarta",
      province: "DI Yogyakarta",
      jobCount: 876
    },
    {
      id: "semarang",
      name: "Semarang",
      province: "Jawa Tengah",
      jobCount: 765
    },
    {
      id: "makassar",
      name: "Makassar",
      province: "Sulawesi Selatan", 
      jobCount: 543
    },
    {
      id: "denpasar",
      name: "Denpasar",
      province: "Bali",
      jobCount: 432
    }
  ]
}