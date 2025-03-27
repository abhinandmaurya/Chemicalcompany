"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Products & Services",
    href: "/products",
    submenu: [
      { name: "Industrial Chemicals", href: "/products/industrial" },
      { name: "Agricultural Solutions", href: "/products/agricultural" },
      { name: "Specialty Chemicals", href: "/products/specialty" },
    ],
  },
  { name: "Industries", href: "/industries" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "R&D", href: "/research" },
  { name: "Certifications", href: "/certifications" },
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name)
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-blue-900/30 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400">
              ChemTech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <button
                    onClick={() => toggleSubmenu(item.name)}
                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link href={item.href} className="text-gray-300 hover:text-blue-400 transition-colors">
                    {item.name}
                  </Link>
                )}

                {/* Submenu */}
                {item.submenu && (
                  <div
                    className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-900/90 backdrop-blur-md border border-blue-900/50 transition-all duration-200 ${
                      openSubmenu === item.name
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
                  >
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-blue-900/30 hover:text-blue-400"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-md transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 pb-6 px-4 overflow-y-auto">
          <nav className="flex-1 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="flex items-center justify-between w-full py-3 text-gray-300 hover:text-blue-400 border-b border-gray-800"
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${openSubmenu === item.name ? "rotate-180" : ""}`}
                      />
                    </button>

                    {openSubmenu === item.name && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block py-2 text-gray-400 hover:text-blue-400"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3 text-gray-300 hover:text-blue-400 border-b border-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-6">
            <Button className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

