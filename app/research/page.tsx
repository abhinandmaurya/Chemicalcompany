"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { ChevronRight, Beaker, Microscope, FlaskRoundIcon as Flask, Atom } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResearchPage() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const researchAreas = [
    {
      title: "Sustainable Materials",
      description: "Developing biodegradable and renewable materials to reduce environmental impact.",
      icon: <Beaker className="h-8 w-8 text-green-400" />,
      image: "/placeholder.svg?height=400&width=600",
      achievements: [
        "Created a fully biodegradable polymer with industrial-grade strength",
        "Reduced carbon footprint of production processes by 45%",
        "Developed plant-based alternatives to petroleum-derived chemicals",
      ],
    },
    {
      title: "Catalysis Innovation",
      description: "Researching novel catalysts to improve reaction efficiency and reduce waste.",
      icon: <Microscope className="h-8 w-8 text-blue-400" />,
      image: "/placeholder.svg?height=400&width=600",
      achievements: [
        "Discovered a catalyst that reduces reaction time by 60%",
        "Developed a recyclable catalyst system with 95% recovery rate",
        "Created a low-temperature catalyst that reduces energy consumption",
      ],
    },
    {
      title: "Green Chemistry",
      description: "Pioneering chemical processes that minimize environmental impact and maximize efficiency.",
      icon: <Flask className="h-8 w-8 text-green-400" />,
      image: "/placeholder.svg?height=400&width=600",
      achievements: [
        "Eliminated toxic solvents from key manufacturing processes",
        "Developed water-based alternatives to solvent-intensive processes",
        "Created closed-loop systems that reduce waste by 80%",
      ],
    },
    {
      title: "Molecular Engineering",
      description: "Designing molecules with precise properties for specialized applications.",
      icon: <Atom className="h-8 w-8 text-blue-400" />,
      image: "/placeholder.svg?height=400&width=600",
      achievements: [
        "Engineered a molecule that selectively binds to environmental pollutants",
        "Created a self-assembling nanostructure for drug delivery",
        "Developed a molecular switch responsive to multiple stimuli",
      ],
    },
  ]

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
              Research &{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400">
                Development
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Pushing the boundaries of chemical innovation to create a more sustainable and efficient future.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Research Focus</h2>
            <p className="text-gray-400">
              Explore the cutting-edge areas where our scientists are making breakthroughs and driving innovation.
            </p>
          </div>

          <Tabs defaultValue={researchAreas[0].title} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-gray-900 p-1 mb-8">
              {researchAreas.map((area) => (
                <TabsTrigger
                  key={area.title}
                  value={area.title}
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  <div className="flex flex-col items-center">
                    <span className="hidden md:block">{area.icon}</span>
                    <span>{area.title}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {researchAreas.map((area) => (
              <TabsContent key={area.title} value={area.title}>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <h3 className="text-2xl font-bold text-white mb-4">{area.title}</h3>
                    <p className="text-gray-300 mb-6">{area.description}</p>

                    <div className="space-y-4 mb-8">
                      <h4 className="text-lg font-semibold text-blue-400">Key Achievements</h4>
                      <ul className="space-y-3">
                        {area.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <div className="mr-3 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-green-500 flex items-center justify-center">
                              <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">
                      Learn More
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  <div className="order-1 md:order-2 relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-lg blur-lg opacity-70"></div>
                    <div className="relative rounded-lg overflow-hidden">
                      <Image
                        src={area.image || "/placeholder.svg"}
                        alt={area.title}
                        width={600}
                        height={400}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Lab Simulation Section */}
      <section ref={ref} className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Virtual Lab Experience</h2>
            <p className="text-gray-400">
              Explore our interactive simulations to see our research in action and understand the science behind our
              innovations.
            </p>
          </div>

          <div className="backdrop-blur-md bg-gray-900/40 border border-gray-800 rounded-xl p-8 transition-all duration-300">
            <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-400 mb-4">Interactive 3D Lab Simulation</p>
                <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">
                  Launch Simulation
                </Button>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Catalyst Testing",
                  description:
                    "See how we test and optimize catalysts for maximum efficiency and minimal environmental impact.",
                },
                {
                  title: "Polymer Synthesis",
                  description: "Explore the process of creating sustainable polymers from renewable resources.",
                },
                {
                  title: "Molecular Analysis",
                  description: "Discover the advanced techniques we use to analyze and characterize new compounds.",
                },
              ].map((sim, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.4,
                        delay: index * 0.1,
                      },
                    },
                  }}
                  initial="hidden"
                  animate={controls}
                  className="backdrop-blur-sm bg-gray-900/20 border border-gray-800 hover:border-blue-500/50 rounded-lg p-4 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-white mb-2">{sim.title}</h3>
                  <p className="text-gray-400 text-sm">{sim.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Recent Publications</h2>
            <p className="text-gray-400">
              Our research team regularly publishes their findings in leading scientific journals, contributing to the
              advancement of chemical science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Novel Catalytic Systems for Sustainable Chemical Processes",
                journal: "Journal of Sustainable Chemistry",
                authors: "Chen, S., Rodriguez, M., et al.",
                year: "2023",
                abstract:
                  "This paper presents a breakthrough in catalytic systems that significantly reduces energy consumption and waste production in chemical manufacturing processes.",
              },
              {
                title: "Biodegradable Polymers with Enhanced Mechanical Properties",
                journal: "Advanced Materials Research",
                authors: "Williams, E., Park, J., et al.",
                year: "2023",
                abstract:
                  "We report the development of a new class of biodegradable polymers that match the performance of conventional plastics while offering complete biodegradability.",
              },
              {
                title: "Green Solvents for Pharmaceutical Manufacturing",
                journal: "Chemical Engineering Journal",
                authors: "Park, J., Chen, S., et al.",
                year: "2022",
                abstract:
                  "This study introduces a range of environmentally friendly solvents that can replace toxic alternatives in pharmaceutical production without compromising quality.",
              },
              {
                title: "Molecular Engineering for Enhanced Catalytic Selectivity",
                journal: "Nature Chemistry",
                authors: "Rodriguez, M., Williams, E., et al.",
                year: "2022",
                abstract:
                  "Our research demonstrates a novel approach to designing catalyst molecules with unprecedented selectivity, enabling more efficient and cleaner chemical reactions.",
              },
            ].map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-md bg-gray-900/40 border border-gray-800 hover:border-green-500/50 rounded-xl p-6 transition-all duration-300"
              >
                <div className="text-xs text-green-400 mb-2">
                  {pub.journal} • {pub.year}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{pub.title}</h3>
                <p className="text-blue-400 text-sm mb-4">{pub.authors}</p>
                <p className="text-gray-400 text-sm mb-4">{pub.abstract}</p>
                <Button variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-950/30">
                  Read Full Paper
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Research Partnerships</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We believe in the power of collaboration to accelerate innovation and solve complex challenges. Our
                  research team works closely with academic institutions, industry partners, and government agencies
                  around the world.
                </p>
                <p>
                  Through these partnerships, we gain access to diverse perspectives, complementary expertise, and
                  advanced facilities that enhance our research capabilities and drive breakthrough discoveries.
                </p>
              </div>
              <div className="mt-8">
                <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">
                  Explore Partnership Opportunities
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="backdrop-blur-sm bg-gray-900/20 border border-gray-800 rounded-lg p-6 flex items-center justify-center"
                >
                  <Image
                    src="/placeholder-logo.svg"
                    alt={`Partner ${i}`}
                    width={120}
                    height={60}
                    className="max-w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-xl bg-blue-950/20 border border-blue-500/30 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-500/10"></div>
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Interested in Our Research?</h2>
              <p className="text-gray-300 mb-8">
                Whether you're looking to collaborate on a research project, learn more about our innovations, or
                explore career opportunities in our R&D team, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white">
                  Contact Our Research Team
                </Button>
                <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-950/30">
                  View Research Opportunities
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

