"use client"

import { Briefcase, Heart } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { footerData } from "../data/footer-data"
import { cn } from "@/lib/utils"

export default function FooterPage() {
    return (
        <footer className="bg-white border-t shadow-lg border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                        <div className="lg:col-span-2">
                            <div className="flex items-center mb-6">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg blur opacity-75"></div>
                                    <div className="relative bg-gradient-to-br from-green-600 to-emerald-700 p-3 rounded-lg">
                                        <Briefcase className="h-7 w-7 text-white" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                                        {footerData.companyInfo.name}
                                    </span>
                                    <div className="text-sm text-gray-500 font-medium">
                                        {footerData.companyInfo.tagline}
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-md">
                                {footerData.companyInfo.description}
                            </p>

                            <div className="space-y-4">
                                {footerData.contactInfo.map((contact) => (
                                    <div key={contact.type} className="flex items-start space-x-3">
                                        <div className="p-2 bg-green-500 rounded-lg shadow-lg flex-shrink-0">
                                            <contact.icon className="h-4 w-4 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                                {contact.type}
                                            </div>
                                            {contact.href ? (
                                                <a
                                                    href={contact.href}
                                                    className="text-sm text-gray-700 hover:text-green-600 transition-colors duration-200"
                                                >
                                                    {contact.value}
                                                </a>
                                            ) : (
                                                <div className="text-sm text-gray-700">{contact.value}</div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {footerData.sections.map((section) => (
                            <div key={section.title} className="lg:col-span-1">
                                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
                                    {section.title}
                                </h3>
                                <ul className="space-y-3">
                                    {section.links.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.href}
                                                className="group flex items-center space-x-2 text-sm text-gray-600 hover:text-green-600 transition-colors duration-200"
                                            >
                                                {link.icon && (
                                                    <link.icon className="h-4 w-4 text-gray-400 group-hover:text-green-500 transition-colors duration-200" />
                                                )}
                                                <span className="group-hover:translate-x-1 transition-transform duration-200">
                                                    {link.name}
                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <Separator className="bg-gray-300" />

                <div className="py-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <div className="flex items-center space-x-1 text-sm text-gray-600">
                                <span>© 2025 {footerData.companyInfo.name}. Dibuat dengan</span>
                                <Heart className="h-4 w-4 text-red-500 fill-current" />
                                <span>di Indonesia</span>
                            </div>

                            <div className="flex flex-wrap items-center gap-4">
                                {footerData.legal.map((legal, index) => (
                                    <div key={legal.name} className="flex items-center">
                                        <a
                                            href={legal.href}
                                            className="text-sm text-gray-500 hover:text-green-600 transition-colors duration-200 flex items-center space-x-1"
                                        >
                                            {legal.icon && <legal.icon className="h-3 w-3" />}
                                            <span>{legal.name}</span>
                                        </a>
                                        {index < footerData.legal.length - 1 && (
                                            <div className="w-px h-4 bg-gray-300 ml-4"></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-3">
                                {footerData.socialLinks.map((social) => {
                                    const colorMap: Record<string, string> = {
                                        Facebook: "bg-blue-600 hover:bg-blue-700",
                                        Twitter: "bg-sky-500 hover:bg-sky-600",
                                        Instagram: "bg-pink-500 hover:bg-pink-600",
                                        LinkedIn: "bg-blue-700 hover:bg-blue-800",
                                        YouTube: "bg-red-600 hover:bg-red-700",
                                        GitHub: "bg-gray-800 hover:bg-gray-900",
                                    }

                                    return (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={cn(
                                                "group p-2 rounded-lg shadow-sm transition-all duration-300 text-white",
                                                colorMap[social.name] || "bg-gray-500 hover:bg-gray-600"
                                            )}
                                        >
                                            <social.icon className="h-4 w-4" />
                                            <span className="sr-only">{social.name}</span>
                                        </a>
                                    )
                                })}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}