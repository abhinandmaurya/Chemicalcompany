"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { ChevronRight, Recycle, Leaf, Droplet, Wind, Sun, TreePine } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function SustainabilityPage() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const sustainabilityGoals = [
    {
      title: "Carbon Neutrality",
      description: "Achieve carbon neutrality across all operations by 2030.",
      icon: <Wind className="h-8 w-8 text-green-400" />,
      progress: 65,
      initiatives: [
        "Transitioning to 100% renewable energy at all facilities",
        "Implementing energy efficiency measures across operations",
        "Investing in carbon offset projects for unavoidable emissions",
        "Redesigning processes to minimize carbon footprint",
      ],
    },
    {
      title: "Zero Waste",
      description: "Eliminate landfill waste from all manufacturing processes by 2025.",
      icon: <Recycle className="h-8 w-8 text-blue-400" />,
      progress: 78,
      initiatives: [
        "Implementing closed-loop manufacturing systems",
        "Developing biodegradable alternatives to traditional chemicals",
        "Establishing comprehensive recycling programs at all facilities",
        "Redesigning packaging to minimize waste",
      ],
    },
    {
      title: "Water Conservation",
      description: "Reduce water consumption by 50% compared to 2020 baseline.",
      icon: <Droplet className="h-8 w-8 text-blue-400" />,
      progress: 42,
      initiatives: [
        "Installing water recycling systems at manufacturing facilities",
        "Developing water-efficient chemical processes",
        "Implementing rainwater harvesting at all locations",
        "Conducting regular water audits to identify conservation opportunities",
      ],
    },
    {
      title: "Sustainable Sourcing",
      description: "Source 100% of raw materials from sustainable suppliers by 2028.",
      icon: <Leaf className="h-8 w-8 text-green-400" />,
      progress: 53,
      initiatives: [
        "Establishing rigorous supplier sustainability criteria",
        "Developing bio-based alternatives to petroleum-derived chemicals",
        "Creating transparency in our supply chain",
        "Partnering with suppliers on sustainability initiatives",
      ],
    },
  ]

  const safetyInitiatives = [
    {
      title: "Process Safety Management",
      description:
        "Comprehensive system to prevent and mitigate chemical incidents through rigorous risk assessment and control measures.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Employee Safety Training",
      description:
        "Ongoing education and certification programs ensuring all team members maintain the highest safety standards and practices.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Product Stewardship",
      description:
        "Taking responsibility for minimizing chemical products' environmental, health, and safety impacts throughout their lifecycle.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Emergency Response",
      description:
        "Advanced protocols and regular drills to ensure rapid, effective response to any potential safety incidents.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <main className="pt-20 bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/30 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,170,0.2),transparent_40%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(0,136,255,0.2),transparent_40%)]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-400">
                Sustainability
              </span>{" "}
              & Safety
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Our commitment to environmental stewardship and responsible operations for a better tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability Vision Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Our Sustainability Vision</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  At ChemTech, we believe that chemical innovation and environmental responsibility go hand in hand. Our
                  sustainability vision is built on the principle that we can create cutting-edge chemical solutions
                  while preserving our planet for future generations.
                </p>
                <p>
                  We're committed to transforming our industry through sustainable practices, from developing green
                  chemistry alternatives to implementing closed-loop manufacturing systems that minimize waste and
                  conserve resources.
                </p>
                <p>
                  Our approach integrates sustainability into every aspect of our business, from research and
                  development to manufacturing and distribution. We're not just reducing our environmental
                  footprint—we're developing innovative solutions that help our customers become more sustainable too.
                </p>
              </div>
              <div className="mt-8">
                <Button className="bg-gradient-to-r from-green-600 to-blue-500 hover:from-green-700 hover:to-blue-600 text-white">
                  Explore Our Initiatives
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg blur-lg opacity-70"></div>
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Sustainability Vision"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Goals Section */}
      <section ref={ref} className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Sustainability Goals</h2>
            <p className="text-gray-400">
              We've set ambitious targets to drive our sustainability journey and measure our progress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sustainabilityGoals.map((goal, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      delay: index * 0.2,
                    },
                  },
                }}
                initial="hidden"
                animate={controls}
                className="backdrop-blur-md bg-gray-900/40 border border-gray-800 hover:border-green-500/50 rounded-xl p-8 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-green-600/30 to-blue-500/30 flex items-center justify-center mr-4">
                    {goal.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{goal.title}</h3>
                    <p className="text-gray-400 text-sm">{goal.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Progress</span>
                    <span className="text-sm font-medium text-green-400">{goal.progress}%</span>
                  </div>
                  <Progress value={goal.progress} className="h-2 bg-gray-800">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </Progress>
                </div>

                <div>
                  <h4 className="text-md font-semibold text-blue-400 mb-3">Key Initiatives:</h4>
                  <ul className="space-y-2">
                    {goal.initiatives.map((initiative, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mr-3 mt-1 h-4 w-4 flex-shrink-0 rounded-full bg-gradient-to-r from-green-600 to-blue-500 flex items-center justify-center">
                          <svg className="h-2 w-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-300 text-sm">{initiative}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Environmental Impact</h2>
            <p className="text-gray-400">
              We're committed to transparency in our environmental performance and continuously working to reduce our
              footprint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                metric: "45%",
                title: "Reduction in Carbon Emissions",
                description:
                  "Since 2018, we've nearly halved our carbon emissions through renewable energy adoption and process optimization.",
                icon: <Wind className="h-6 w-6" />,
              },
              {
                metric: "78%",
                title: "Waste Diverted from Landfill",
                description:
                  "Our comprehensive recycling and reuse programs have dramatically reduced waste sent to landfills.",
                icon: <Recycle className="h-6 w-6" />,
              },
              {
                metric: "32%",
                title: "Water Use Reduction",
                description:
                  "Water recycling systems and process improvements have significantly decreased our freshwater consumption.",
                icon: <Droplet className="h-6 w-6" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-md bg-gray-900/40 border border-gray-800 hover:border-blue-500/50 rounded-xl p-8 transition-all duration-300 text-center"
              >
                <div className="inline-flex h-16 w-16 rounded-full bg-gradient-to-r from-green-600/30 to-blue-500/30 items-center justify-center mb-4 text-green-400">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{item.metric}</h3>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">{item.title}</h4>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="backdrop-blur-md bg-gray-900/40 border border-gray-800 rounded-xl p-8 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Sustainability Report</h3>
                <p className="text-gray-300 mb-6">
                  We publish an annual sustainability report that details our environmental performance, social
                  initiatives, and governance practices. The report provides transparent data on our progress toward
                  sustainability goals and identifies areas for improvement.
                </p>
                <Button className="bg-gradient-to-r from-green-600 to-blue-500 hover:from-green-700 hover:to-blue-600 text-white">
                  Download 2023 Report
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[2023, 2022, 2021, 2020].map((year) => (
                  <div
                    key={year}
                    className="backdrop-blur-sm bg-gray-900/20 border border-gray-800 hover:border-green-500/30 rounded-lg p-4 text-center transition-all duration-300"
                  >
                    <div className="text-lg font-bold text-white mb-1">{year}</div>
                    <div className="text-sm text-gray-400">Sustainability Report</div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-2 text-green-400 hover:text-green-300 hover:bg-green-950/30"
                    >
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Safety Excellence</h2>
            <p className="text-gray-400">
              Safety is our top priority. We maintain rigorous standards and practices to protect our employees,
              communities, and the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {safetyInitiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative backdrop-blur-md bg-gray-900/40 border border-gray-800 group-hover:border-blue-500/50 rounded-xl overflow-hidden transition-all duration-300 h-full">
                  <div className="h-40 relative overflow-hidden">
                    <Image
                      src={initiative.image || "/placeholder.svg"}
                      alt={initiative.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{initiative.title}</h3>
                    <p className="text-gray-400 text-sm">{initiative.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="backdrop-blur-md bg-gray-900/40 border border-gray-800 rounded-xl p-8 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-lg blur-lg opacity-70"></div>
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Safety Performance"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Safety Performance</h3>
                <p className="text-gray-300 mb-4">
                  Our commitment to safety has resulted in industry-leading performance metrics. We've achieved:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-green-500 flex items-center justify-center">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Zero lost-time incidents for 3 consecutive years</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-green-500 flex items-center justify-center">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">95% reduction in recordable incidents since 2015</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-green-500 flex items-center justify-center">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Multiple industry safety awards and recognitions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-green-500 flex items-center justify-center">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">100% compliance with all safety regulations globally</span>
                  </li>
                </ul>
                <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">
                  View Safety Certifications
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Innovation Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Sustainable Innovation</h2>
            <p className="text-gray-400">
              We're developing next-generation chemical solutions that address environmental challenges and create a
              more sustainable future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Bio-based Materials",
                description:
                  "Developing renewable alternatives to petroleum-based chemicals using sustainable biological feedstocks.",
                icon: <TreePine className="h-8 w-8 text-green-400" />,
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Green Chemistry",
                description:
                  "Redesigning chemical processes to reduce waste, eliminate hazardous substances, and conserve energy.",
                icon: <Leaf className="h-8 w-8 text-green-400" />,
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Renewable Energy Solutions",
                description:
                  "Creating advanced materials that enhance the efficiency and durability of solar panels and energy storage systems.",
                icon: <Sun className="h-8 w-8 text-green-400" />,
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((innovation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-md bg-gray-900/40 border border-gray-800 hover:border-green-500/50 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={innovation.image || "/placeholder.svg"}
                    alt={innovation.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute top-4 left-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-green-600/70 to-blue-500/70 backdrop-blur-sm flex items-center justify-center">
                      {innovation.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{innovation.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{innovation.description}</p>
                  <Button variant="outline" className="w-full border-green-500/50 text-green-400 hover:bg-green-950/30">
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-xl bg-green-950/20 border border-green-500/30 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-500/10"></div>
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Join Us in Creating a Sustainable Future
              </h2>
              <p className="text-gray-300 mb-8">
                Whether you're looking to partner on sustainability initiatives, learn about our green chemistry
                solutions, or explore how we can help make your operations more sustainable, we'd love to connect.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-green-600 to-blue-500 hover:from-green-700 hover:to-blue-600 text-white">
                  Contact Our Sustainability Team
                </Button>
                <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-950/30">
                  Download Sustainability Report
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

