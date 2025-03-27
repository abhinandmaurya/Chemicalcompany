"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Search, Filter, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Product categories and data
const categories = ["All", "Industrial", "Agricultural", "Specialty", "Research"]

const products = [
  {
    id: 1,
    name: "PolyFlex X200",
    category: "Industrial",
    description: "Advanced polymer with exceptional durability and chemical resistance for industrial applications.",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
  {
    id: 2,
    name: "AgroBoost Pro",
    category: "Agricultural",
    description: "Eco-friendly fertilizer enhancer that improves nutrient absorption and crop yield.",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
  {
    id: 3,
    name: "NanoSeal Coating",
    category: "Specialty",
    description: "Molecular-level protective coating that prevents corrosion and extends equipment lifespan.",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: 4,
    name: "BioSynth Reagent",
    category: "Research",
    description: "High-purity reagent for pharmaceutical research and development applications.",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: 5,
    name: "ThermoStable X50",
    category: "Industrial",
    description: "Heat-resistant compound for extreme temperature industrial environments.",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: 6,
    name: "EcoClean Solution",
    category: "Specialty",
    description: "Biodegradable industrial cleaning solution that's effective and environmentally friendly.",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: 7,
    name: "CropShield Advanced",
    category: "Agricultural",
    description: "Next-generation crop protection formula that defends against pests while being eco-conscious.",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: 8,
    name: "QuantumBond Adhesive",
    category: "Industrial",
    description: "Ultra-strong molecular bonding agent for critical industrial applications.",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
]

// Product Card Component
const ProductCard = ({ product, index }: { product: (typeof products)[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative backdrop-blur-md bg-gray-900/40 border border-gray-800 group-hover:border-blue-500/50 rounded-xl overflow-hidden transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {product.featured && (
            <div className="absolute top-2 right-2 bg-gradient-to-r from-blue-600 to-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Featured
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="text-xs text-blue-400 mb-2">{product.category}</div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-400 text-sm mb-4">{product.description}</p>
          <Button variant="outline" className="w-full border-blue-500/50 text-blue-400 hover:bg-blue-950/30">
            View Details
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter products based on active category and search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="pt-20 bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(0,136,255,0.2),transparent_40%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(0,255,170,0.2),transparent_40%)]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400">
                Products
              </span>{" "}
              & Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover our innovative chemical solutions designed for efficiency, sustainability, and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search products..."
                className="pl-10 bg-gray-900 border-gray-800 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="text-gray-400 h-4 w-4" />
              <span className="text-gray-400 text-sm">Filter by:</span>
              <Tabs defaultValue="All" className="w-auto">
                <TabsList className="bg-gray-900">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      onClick={() => setActiveCategory(category)}
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No products found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4 border-blue-500 text-blue-400"
                onClick={() => {
                  setActiveCategory("All")
                  setSearchQuery("")
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400">
              Beyond our product offerings, we provide specialized services to help you maximize efficiency and
              innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Custom Formulation",
                description:
                  "Our team of expert chemists can develop custom chemical formulations tailored to your specific needs and applications.",
                features: [
                  "Needs assessment and consultation",
                  "Prototype development and testing",
                  "Scale-up and production support",
                  "Quality assurance and certification",
                ],
              },
              {
                title: "Technical Consulting",
                description:
                  "Leverage our expertise to optimize your chemical processes, improve efficiency, and solve complex technical challenges.",
                features: [
                  "Process optimization",
                  "Troubleshooting and problem-solving",
                  "Regulatory compliance guidance",
                  "Sustainability assessment and improvement",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-md bg-gray-900/40 border border-gray-800 hover:border-green-500/50 rounded-xl p-8 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-3 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-green-500 flex items-center justify-center">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white">
                    Request Consultation
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-xl bg-blue-950/20 border border-blue-500/30 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-500/10"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need a custom solution?</h2>
                <p className="text-gray-300">
                  Our team of experts is ready to help you find the perfect chemical solution for your specific needs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white">
                  Request a Quote
                </Button>
                <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-950/30">
                  Download Catalog
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

