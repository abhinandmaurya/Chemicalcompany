"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import {
  ChevronRight,
  ChevronDown,
  Building2,
  Leaf,
  FlaskRoundIcon as Flask,
  Pill,
  Cpu,
  Droplet,
  Zap,
  Car,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Industry data
const industries = [
  {
    id: "pharmaceuticals",
    name: "Pharmaceuticals",
    icon: <Pill className="h-8 w-8 text-blue-400" />,
    description:
      "Providing high-purity chemicals and custom synthesis services for pharmaceutical research and manufacturing.",
    image: "/placeholder.svg?height=500&width=800",
    benefits: [
      "Ultra-high purity reagents for research applications",
      "Custom synthesis of complex molecules and intermediates",
      "GMP-compliant manufacturing processes",
      "Specialized catalysts for pharmaceutical production",
    ],
    caseStudy: {
      title: "Accelerating Drug Development with Custom Catalysts",
      description:
        "We partnered with a leading pharmaceutical company to develop a specialized catalyst that reduced reaction time by 60% and improved yield by 35%, accelerating their drug development timeline by several months.",
    },
  },
  {
    id: "agriculture",
    name: "Agriculture",
    icon: <Leaf className="h-8 w-8 text-green-400" />,
    description:
      "Developing sustainable agricultural solutions that improve crop yields while minimizing environmental impact.",
    image: "/placeholder.svg?height=500&width=800",
    benefits: [
      "Eco-friendly fertilizer enhancers and soil conditioners",
      "Biodegradable crop protection formulations",
      "Precision agriculture chemical solutions",
      "Water-efficient treatment systems",
    ],
    caseStudy: {
      title: "Sustainable Crop Protection for Organic Farming",
      description:
        "Our team developed a plant-based crop protection formula that increased yield by 28% for organic farmers while meeting all organic certification requirements and biodegrading completely within 14 days.",
    },
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: <Building2 className="h-8 w-8 text-blue-400" />,
    description:
      "Supplying industrial chemicals and process solutions that enhance efficiency and reduce environmental footprint.",
    image: "/placeholder.svg?height=500&width=800",
    benefits: [
      "High-performance industrial coatings and adhesives",
      "Energy-efficient process chemicals",
      "Waste reduction and recycling solutions",
      "Corrosion prevention and material protection",
    ],
    caseStudy: {
      title: "Revolutionizing Production with Eco-Friendly Solvents",
      description:
        "We helped a major manufacturer replace toxic solvents with our biodegradable alternatives, reducing their hazardous waste by 75% while maintaining product quality and improving worker safety.",
    },
  },
  {
    id: "electronics",
    name: "Electronics",
    icon: <Cpu className="h-8 w-8 text-blue-400" />,
    description:
      "Creating ultra-pure chemicals and specialized solutions for semiconductor and electronics manufacturing.",
    image: "/placeholder.svg?height=500&width=800",
    benefits: [
      "Ultra-high purity chemicals for semiconductor fabrication",
      "Specialized cleaning solutions for precision components",
      "Advanced etching compounds for microelectronics",
      "Thermal management materials for electronic devices",
    ],
    caseStudy: {
      title: "Enabling Next-Generation Chip Production",
      description:
        "Our advanced etching solution helped a semiconductor manufacturer achieve 5nm process technology, enabling them to produce more powerful and energy-efficient chips for cutting-edge applications.",
    },
  },
  {
    id: "energy",
    name: "Energy",
    icon: <Zap className="h-8 w-8 text-green-400" />,
    description:
      "Supporting the energy sector with innovative solutions for conventional and renewable energy production.",
    image: "/placeholder.svg?height=500&width=800",
    benefits: [
      "Enhanced efficiency additives for fossil fuels",
      "Specialized chemicals for solar panel manufacturing",
      "Battery technology materials and electrolytes",
      "Carbon capture and sequestration solutions",
    ],
    caseStudy: {
      title: "Improving Battery Performance with Novel Electrolytes",
      description:
        "Our research team developed a new electrolyte formulation that increased lithium-ion battery capacity by 22% and extended cycle life by 40%, accelerating the adoption of renewable energy storage solutions.",
    },
  },
  {
    id: "water",
    name: "Water Treatment",
    icon: <Droplet className="h-8 w-8 text-blue-400" />,
    description: "Providing chemical solutions for water purification, treatment, and conservation across industries.",
    image: "/placeholder.svg?height=500&width=800",
    benefits: [
      "Advanced flocculants and coagulants for water purification",
      "Membrane technology chemicals for desalination",
      "Eco-friendly biocides for industrial water systems",
      "Wastewater recovery and recycling solutions",
    ],
    caseStudy: {
      title: "Sustainable Water Management for Textile Manufacturing",
      description:
        "We implemented a comprehensive water treatment system for a textile manufacturer that reduced water consumption by 65% and eliminated hazardous discharge, while saving the company over $1.2 million annually.",
    },
  },
  {
    id: "automotive",
    name: "Automotive",
    icon: <Car className="h-8 w-8 text-green-400" />,
    description:
      "Developing specialized chemicals for automotive manufacturing, maintenance, and performance enhancement.",
    image: "/placeholder.svg?height=500&width=800",
    benefits: [
      "Lightweight composite materials for vehicle construction",
      "High-performance lubricants and fluids",
      "Eco-friendly cleaning and maintenance products",
      "Advanced coatings for corrosion protection",
    ],
    caseStudy: {
      title: "Enhancing Electric Vehicle Battery Performance",
      description:
        "Our thermal management solution for EV batteries extended range by 18% in extreme temperature conditions and improved battery longevity by 25%, helping our automotive partner gain a competitive edge in the EV market.",
    },
  },
  {
    id: "research",
    name: "Research Institutions",
    icon: <Flask className="h-8 w-8 text-blue-400" />,
    description: "Supporting scientific advancement with high-quality reagents and custom chemical solutions.",
    image: "/placeholder.svg?height=500&width=800",
    benefits: [
      "Ultra-high purity research chemicals and reagents",
      "Custom synthesis of novel compounds",
      "Specialized materials for advanced research",
      "Technical consultation and collaboration",
    ],
    caseStudy: {
      title: "Accelerating Materials Science Research",
      description:
        "We partnered with a leading research university to develop specialized nanomaterials that enabled breakthrough discoveries in quantum computing, resulting in multiple high-impact publications and patent applications.",
    },
  },
]

export default function IndustriesPage() {
  const [activeTab, setActiveTab] = useState(industries[0].id)
  const [expandedFAQs, setExpandedFAQs] = useState<string[]>([])

  const toggleFAQ = (id: string) => {
    setExpandedFAQs((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const controls = useAnimation()

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    controls.start({
      opacity: [0, 1],
      y: [20, 0],
      transition: { duration: 0.5 },
    })
  }

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
              Industries We{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400">Serve</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Our chemical solutions power innovation across multiple sectors, driving progress and sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Overview Section */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
            {industries.slice(0, 8).map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`backdrop-blur-md bg-gray-900/40 border border-gray-800 hover:border-${
                  index % 2 === 0 ? "blue" : "green"
                }-500/50 rounded-xl p-6 transition-all duration-300 hover:transform hover:translate-y-[-5px] hover:shadow-[0_0_15px_rgba(0,${
                  index % 2 === 0 ? "136,255" : "255,170"
                },0.3)] cursor-pointer`}
                onClick={() => handleTabChange(industry.id)}
              >
                <div
                  className={`h-12 w-12 rounded-full bg-gradient-to-r from-${
                    index % 2 === 0 ? "blue" : "green"
                  }-600/30 to-${index % 2 === 0 ? "cyan" : "emerald"}-500/30 flex items-center justify-center mb-4`}
                >
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                <p className="text-gray-400 text-sm line-clamp-2">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Industry Tabs */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue={industries[0].id} value={activeTab} onValueChange={handleTabChange} className="w-full">
            <div className="mb-8 overflow-x-auto">
              <TabsList className="inline-flex min-w-full bg-gray-900 p-1">
                {industries.map((industry) => (
                  <TabsTrigger
                    key={industry.id}
                    value={industry.id}
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white whitespace-nowrap"
                  >
                    <span className="flex items-center">
                      <span className="mr-2">{industry.icon}</span>
                      <span>{industry.name}</span>
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {industries.map((industry) => (
              <TabsContent key={industry.id} value={industry.id}>
                <motion.div animate={controls} className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4">{industry.name}</h2>
                    <p className="text-gray-300 mb-6">{industry.description}</p>

                    <div className="space-y-4 mb-8">
                      <h3 className="text-lg font-semibold text-blue-400">Key Benefits</h3>
                      <ul className="space-y-3">
                        {industry.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <div className="mr-3 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-green-500 flex items-center justify-center">
                              <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="backdrop-blur-sm bg-gray-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">
                        Case Study: {industry.caseStudy.title}
                      </h3>
                      <p className="text-gray-400">{industry.caseStudy.description}</p>
                    </div>

                    <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">
                      Explore {industry.name} Solutions
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-lg blur-lg opacity-70"></div>
                    <div className="relative rounded-lg overflow-hidden">
                      <Image
                        src={industry.image || "/placeholder.svg"}
                        alt={industry.name}
                        width={800}
                        height={500}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-400">
              See how our chemical solutions have helped organizations across industries achieve their goals and
              overcome challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                industry: "Pharmaceuticals",
                company: "MediGen Therapeutics",
                title: "Accelerating Drug Development",
                description:
                  "Our custom catalysts helped reduce synthesis time by 60%, accelerating the development of a breakthrough cancer treatment.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                industry: "Agriculture",
                company: "GreenHarvest Farms",
                title: "Sustainable Crop Protection",
                description:
                  "Our biodegradable formulations increased crop yield by 28% while meeting all organic certification requirements.",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                industry: "Energy",
                company: "SolarTech Innovations",
                title: "Enhancing Solar Panel Efficiency",
                description:
                  "Our specialized coatings improved solar panel efficiency by 15%, significantly increasing energy output and ROI.",
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-md bg-gray-900/40 border border-gray-800 hover:border-blue-500/50 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <div className="text-xs text-blue-400 mb-1">{story.industry}</div>
                    <div className="text-sm text-white font-medium">{story.company}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{story.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{story.description}</p>
                  <Button variant="outline" className="w-full border-blue-500/50 text-blue-400 hover:bg-blue-950/30">
                    Read Full Case Study
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">
              Find answers to common questions about our industry-specific solutions and services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                id: "faq-1",
                question: "How do you ensure your chemical solutions meet industry-specific regulations?",
                answer:
                  "We maintain dedicated regulatory affairs teams for each industry we serve. These specialists stay current with all relevant regulations and ensure our products meet or exceed compliance requirements. We also participate in industry standards organizations and maintain certifications specific to each sector we serve.",
              },
              {
                id: "faq-2",
                question: "Can you develop custom solutions for unique industry challenges?",
                answer:
                  "Absolutely. Custom formulation is one of our core strengths. Our R&D team works closely with clients to understand their specific challenges and develop tailored solutions. We follow a structured process that includes needs assessment, prototype development, testing, and scale-up to ensure the final product meets your exact requirements.",
              },
              {
                id: "faq-3",
                question: "How do you balance performance and sustainability in your products?",
                answer:
                  "We believe performance and sustainability can go hand-in-hand. Our approach integrates green chemistry principles from the earliest stages of product development. We systematically evaluate environmental impact alongside performance metrics, and our innovation process prioritizes finding solutions that excel in both areas rather than compromising one for the other.",
              },
              {
                id: "faq-4",
                question: "What support do you provide after implementing your solutions?",
                answer:
                  "We offer comprehensive post-implementation support, including technical assistance, optimization services, and ongoing consultation. Our industry specialists remain available to address any questions or challenges that arise. For many clients, we establish regular review meetings to ensure our solutions continue to meet their evolving needs and to identify opportunities for further improvement.",
              },
              {
                id: "faq-5",
                question: "How quickly can you scale production for growing demand?",
                answer:
                  "Our manufacturing facilities are designed with flexibility and scalability in mind. For most products, we can increase production by 50-100% within 2-4 weeks. For larger scale-ups, we have established processes that typically allow us to triple or quadruple production within 2-3 months. We also maintain strategic partnerships with contract manufacturers to accommodate exceptional demand surges.",
              },
            ].map((faq) => (
              <div
                key={faq.id}
                className="backdrop-blur-md bg-gray-900/40 border border-gray-800 hover:border-blue-500/50 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="flex justify-between items-center w-full p-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-blue-400 transition-transform duration-300 ${
                      expandedFAQs.includes(faq.id) ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    expandedFAQs.includes(faq.id) ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </div>
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
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to transform your industry?</h2>
                <p className="text-gray-300">
                  Connect with our industry specialists to discover how our innovative chemical solutions can address
                  your specific challenges.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white">
                  Schedule a Consultation
                </Button>
                <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-950/30">
                  Download Industry Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

