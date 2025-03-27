"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, Search, Award, Shield, CheckCircle, FileCheck, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Certification categories and data
const categories = ["All", "Quality", "Environmental", "Safety", "Industry-Specific"]

const certifications = [
  {
    id: 1,
    name: "ISO 9001:2015",
    category: "Quality",
    description:
      "Quality Management System certification demonstrating our commitment to consistent quality and customer satisfaction.",
    image: "/placeholder.svg?height=200&width=200",
    issuer: "International Organization for Standardization",
    year: "2018 (Renewed 2021)",
    scope: "All manufacturing facilities and operations",
  },
  {
    id: 2,
    name: "ISO 14001:2015",
    category: "Environmental",
    description:
      "Environmental Management System certification showing our dedication to minimizing environmental impact and continuous improvement.",
    image: "/placeholder.svg?height=200&width=200",
    issuer: "International Organization for Standardization",
    year: "2019 (Renewed 2022)",
    scope: "All manufacturing facilities and operations",
  },
  {
    id: 3,
    name: "ISO 45001:2018",
    category: "Safety",
    description:
      "Occupational Health and Safety Management System certification ensuring worker safety and risk reduction.",
    image: "/placeholder.svg?height=200&width=200",
    issuer: "International Organization for Standardization",
    year: "2020",
    scope: "All manufacturing facilities and operations",
  },
  {
    id: 4,
    name: "REACH Compliance",
    category: "Environmental",
    description:
      "Registration, Evaluation, Authorization and Restriction of Chemicals compliance for EU market access.",
    image: "/placeholder.svg?height=200&width=200",
    issuer: "European Chemicals Agency",
    year: "2021",
    scope: "All products sold in European markets",
  },
  {
    id: 5,
    name: "GMP Certification",
    category: "Quality",
    description: "Good Manufacturing Practice certification for pharmaceutical-grade chemical production.",
    image: "/placeholder.svg?height=200&width=200",
    issuer: "FDA / EMA",
    year: "2022",
    scope: "Pharmaceutical division facilities",
  },
  {
    id: 6,
    name: "Responsible Care®",
    category: "Industry-Specific",
    description: "Chemical industry initiative for improving performance in environment, health, safety, and security.",
    image: "/placeholder.svg?height=200&width=200",
    issuer: "American Chemistry Council",
    year: "2017 (Renewed 2023)",
    scope: "All operations",
  },
  {
    id: 7,
    name: "FSSC 22000",
    category: "Industry-Specific",
    description: "Food Safety System Certification for chemical products used in food processing.",
    image: "/placeholder.svg?height=200&width=200",
    issuer: "Foundation FSSC",
    year: "2021",
    scope: "Food-grade chemical production facilities",
  },
  {
    id: 8,
    name: "ISO/IEC 17025:2017",
    category: "Quality",
    description: "Testing and calibration laboratories certification ensuring accurate and reliable test results.",
    image: "/placeholder.svg?height=200&width=200",
    issuer: "International Organization for Standardization",
    year: "2020",
    scope: "All testing laboratories",
  },
  {
    id: 9,
    name: "OHSAS 18001",
    category: "Safety",
    description: "Occupational Health and Safety Assessment Series certification for workplace safety management.",
    image: "/placeholder.svg?height=200&width=200",
    issuer: "BSI Group",
    year: "2019 (Transitioning to ISO 45001)",
    scope: "All manufacturing facilities",
  },
  {
    id: 10,
    name: "EcoVadis Gold",
    category: "Environmental",
    description: "Sustainability rating recognizing excellence in environmental, social, and ethical performance.",
    image: "/placeholder.svg?height=200&width=200",
    issuer: "EcoVadis",
    year: "2023",
    scope: "Company-wide assessment",
  },
  {
    id: 11,
    name: "ISCC PLUS",
    category: "Environmental",
    description: "International Sustainability & Carbon Certification for bio-based and circular materials.",
    image: "/placeholder.svg?height=200&width=200",
    issuer: "ISCC System GmbH",
    year: "2022",
    scope: "Sustainable materials production",
  },
  {
    id: 12,
    name: "Halal Certification",
    category: "Industry-Specific",
    description: "Certification for chemical products compliant with Islamic law requirements.",
    image: "/placeholder.svg?height=200&width=200",
    issuer: "Halal Certification Authority",
    year: "2021",
    scope: "Specific product lines",
  },
]

// Certification Card Component
const CertificationCard = ({
  certification,
  onClick,
}: { certification: (typeof certifications)[0]; onClick: () => void }) => {
  return (
    <div
      className="backdrop-blur-md bg-gray-900/40 border border-gray-800 hover:border-blue-500/50 rounded-xl p-6 transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center mb-4">
        <div className="mr-4 relative w-16 h-16 flex-shrink-0">
          <Image
            src={certification.image || "/placeholder.svg"}
            alt={certification.name}
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">{certification.name}</h3>
          <p className="text-blue-400 text-sm">{certification.category}</p>
        </div>
      </div>
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{certification.description}</p>
      <div className="flex justify-between items-center text-xs text-gray-500">
        <span>Issued by: {certification.issuer}</span>
        <span>{certification.year}</span>
      </div>
    </div>
  )
}

// Certification Detail Modal
const CertificationDetail = ({
  certification,
  onClose,
}: { certification: (typeof certifications)[0]; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-lg blur-lg opacity-70"></div>
        <div className="relative backdrop-blur-md bg-gray-900/90 border border-gray-800 rounded-xl p-6 md:p-8">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 mx-auto md:mx-0">
              <Image
                src={certification.image || "/placeholder.svg"}
                alt={certification.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-900/50 text-blue-400 mb-2">
                {certification.category}
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">{certification.name}</h2>
              <p className="text-gray-300 mb-4">{certification.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="backdrop-blur-sm bg-gray-900/20 border border-gray-800 rounded-lg p-3">
                  <div className="text-xs text-gray-500 mb-1">Issuing Organization</div>
                  <div className="text-gray-300">{certification.issuer}</div>
                </div>
                <div className="backdrop-blur-sm bg-gray-900/20 border border-gray-800 rounded-lg p-3">
                  <div className="text-xs text-gray-500 mb-1">Certification Date</div>
                  <div className="text-gray-300">{certification.year}</div>
                </div>
                <div className="backdrop-blur-sm bg-gray-900/20 border border-gray-800 rounded-lg p-3 md:col-span-2">
                  <div className="text-xs text-gray-500 mb-1">Scope of Certification</div>
                  <div className="text-gray-300">{certification.scope}</div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">
                  View Certificate Details
                  <FileCheck className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CertificationsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCertification, setSelectedCertification] = useState<(typeof certifications)[0] | null>(null)

  // Filter certifications based on active category and search query
  const filteredCertifications = certifications.filter((cert) => {
    const matchesCategory = activeCategory === "All" || cert.category === activeCategory
    const matchesSearch =
      cert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="pt-20 bg-black">
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400">
                Certifications
              </span>{" "}
              & Compliance
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Our commitment to quality, safety, and environmental responsibility is backed by industry-leading
              certifications.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Overview */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              {
                title: "Quality Certifications",
                description: "Ensuring consistent product quality and customer satisfaction.",
                icon: <Award className="h-8 w-8 text-blue-400" />,
                count: certifications.filter((c) => c.category === "Quality").length,
              },
              {
                title: "Environmental Certifications",
                description: "Demonstrating our commitment to environmental stewardship.",
                icon: <Leaf className="h-8 w-8 text-green-400" />,
                count: certifications.filter((c) => c.category === "Environmental").length,
              },
              {
                title: "Safety Certifications",
                description: "Validating our rigorous safety standards and practices.",
                icon: <Shield className="h-8 w-8 text-blue-400" />,
                count: certifications.filter((c) => c.category === "Safety").length,
              },
              {
                title: "Industry-Specific",
                description: "Specialized certifications for specific sectors and applications.",
                icon: <CheckCircle className="h-8 w-8 text-green-400" />,
                count: certifications.filter((c) => c.category === "Industry-Specific").length,
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`backdrop-blur-md bg-gray-900/40 border border-gray-800 hover:border-${
                  index % 2 === 0 ? "blue" : "green"
                }-500/50 rounded-xl p-6 transition-all duration-300`}
              >
                <div
                  className={`h-12 w-12 rounded-full bg-gradient-to-r from-${
                    index % 2 === 0 ? "blue" : "green"
                  }-600/30 to-${index % 2 === 0 ? "cyan" : "emerald"}-500/30 flex items-center justify-center mb-4`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{category.description}</p>
                <div className="text-2xl font-bold text-blue-400">{category.count}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications List */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Certifications</h2>
            <p className="text-gray-400">
              Browse our comprehensive list of certifications that demonstrate our commitment to excellence across all
              aspects of our operations.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search certifications..."
                className="pl-10 bg-gray-900 border-gray-800 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
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

          {/* Certifications Grid */}
          {filteredCertifications.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCertifications.map((certification, index) => (
                <motion.div
                  key={certification.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <CertificationCard
                    certification={certification}
                    onClick={() => setSelectedCertification(certification)}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No certifications found matching your criteria.</p>
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

      {/* Compliance Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Regulatory Compliance</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Beyond certifications, we maintain strict compliance with all applicable regulations in the regions
                  where we operate and sell our products. Our dedicated regulatory affairs team ensures we stay ahead of
                  changing requirements and maintain full compliance at all times.
                </p>
                <p>
                  We actively participate in industry associations and regulatory forums to stay informed about upcoming
                  changes and contribute to the development of standards that promote safety, sustainability, and
                  innovation in the chemical industry.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-green-500 flex items-center justify-center">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">REACH Compliance</h3>
                    <p className="text-gray-400 text-sm">
                      Full compliance with EU Registration, Evaluation, Authorization and Restriction of Chemicals
                      regulation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-green-500 flex items-center justify-center">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">TSCA Compliance</h3>
                    <p className="text-gray-400 text-sm">
                      Adherence to US Toxic Substances Control Act requirements for chemical substances.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-green-500 flex items-center justify-center">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">GHS Compliance</h3>
                    <p className="text-gray-400 text-sm">
                      Globally Harmonized System of Classification and Labelling of Chemicals standards implementation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-lg blur-lg opacity-70"></div>
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Regulatory Compliance"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Management Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Quality Management System</h2>
            <p className="text-gray-400">
              Our comprehensive quality management system ensures consistent excellence across all our operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Policy",
                description:
                  "Our quality policy establishes the foundation for our commitment to excellence in all aspects of our operations.",
                points: [
                  "Customer-focused approach to quality",
                  "Continuous improvement methodology",
                  "Data-driven decision making",
                  "Preventive action over corrective action",
                ],
              },
              {
                title: "Quality Control",
                description:
                  "Rigorous testing and inspection processes ensure our products consistently meet or exceed specifications.",
                points: [
                  "State-of-the-art testing laboratories",
                  "Comprehensive batch testing protocols",
                  "Statistical process control",
                  "Advanced analytical techniques",
                ],
              },
              {
                title: "Quality Assurance",
                description:
                  "Systematic monitoring of production processes to prevent defects and ensure consistent quality.",
                points: [
                  "Process validation and verification",
                  "Regular internal and external audits",
                  "Supplier quality management",
                  "Continuous training and development",
                ],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-md bg-gray-900/40 border border-gray-800 hover:border-blue-500/50 rounded-xl p-8 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-3 mt-1 h-4 w-4 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-green-500 flex items-center justify-center">
                        <svg className="h-2 w-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-xl bg-blue-950/20 border border-blue-500/30 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-500/10"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need certification documentation?</h2>
                <p className="text-gray-300">
                  Contact our quality assurance team to request copies of our certifications or to discuss specific
                  compliance requirements for your application.
                </p>
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">
                Request Documentation
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Detail Modal */}
      {selectedCertification && (
        <CertificationDetail certification={selectedCertification} onClose={() => setSelectedCertification(null)} />
      )}
    </main>
  )
}

