"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const timelineItems = [
    {
      year: "1985",
      title: "Company Founded",
      description:
        "ChemTech was established with a vision to revolutionize the chemical industry through innovation and sustainability.",
    },
    {
      year: "1995",
      title: "Research Expansion",
      description:
        "Opened our first dedicated research facility, focusing on developing eco-friendly chemical solutions.",
    },
    {
      year: "2005",
      title: "Global Expansion",
      description:
        "Expanded operations to international markets, establishing manufacturing facilities across three continents.",
    },
    {
      year: "2015",
      title: "Sustainability Initiative",
      description: "Launched our comprehensive sustainability program, committing to carbon neutrality by 2030.",
    },
    {
      year: "2023",
      title: "Innovation Center",
      description:
        "Opened our state-of-the-art Innovation Center, dedicated to developing next-generation chemical technologies.",
    },
  ]

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      bio: "With over 20 years of experience in chemical engineering and business leadership, Dr. Chen drives our vision for sustainable innovation.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Chief Research Officer",
      bio: "Leading our R&D initiatives, Dr. Rodriguez has pioneered several breakthrough technologies in sustainable chemistry.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emma Williams",
      role: "Chief Operations Officer",
      bio: "Emma ensures our global operations maintain the highest standards of efficiency, safety, and environmental responsibility.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. James Park",
      role: "Chief Sustainability Officer",
      bio: "Dr. Park leads our sustainability initiatives, ensuring our products and processes contribute to a healthier planet.",
      image: "/placeholder.svg?height=300&width=300",
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
              About{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400">
                ChemTech
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Pioneering the future of chemistry through innovation, sustainability, and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded in 1985, ChemTech began with a simple mission: to develop chemical solutions that drive
                  progress while respecting our planet. What started as a small research lab has grown into a global
                  leader in sustainable chemical innovation.
                </p>
                <p>
                  Throughout our journey, we've remained committed to our core values of innovation, sustainability, and
                  excellence. These principles guide every aspect of our operations, from research and development to
                  manufacturing and distribution.
                </p>
                <p>
                  Today, ChemTech operates in over 30 countries, serving diverse industries with cutting-edge chemical
                  solutions. Our team of world-class scientists and engineers continues to push the boundaries of what's
                  possible, developing technologies that address the most pressing challenges of our time.
                </p>
              </div>
              <div className="mt-8">
                <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">
                  Learn More About Our Mission
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-lg blur-lg opacity-70"></div>
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="ChemTech Laboratory"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={ref} className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-400">
              From our humble beginnings to becoming a global leader in chemical innovation, explore the key milestones
              that have shaped our company.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-green-500 opacity-30"></div>

            {/* Timeline Items */}
            <div className="space-y-20">
              {timelineItems.map((item, index) => (
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
                  className={`relative flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
                >
                  {/* Timeline Content */}
                  <div className="w-1/2 px-8">
                    <div
                      className={`backdrop-blur-md bg-gray-900/40 border border-gray-800 hover:border-${
                        index % 2 === 0 ? "blue" : "green"
                      }-500/50 rounded-xl p-6 transition-all duration-300`}
                    >
                      <div className={`text-${index % 2 === 0 ? "blue" : "green"}-400 text-xl font-bold mb-2`}>
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-green-500 z-10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-black"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-400">
              Meet the visionaries driving our mission to revolutionize the chemical industry through innovation and
              sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover aspect-square transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-blue-400 mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-400">The principles that guide our work and define our culture.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "We constantly push the boundaries of what's possible, developing breakthrough solutions to complex challenges.",
                icon: "🔬",
              },
              {
                title: "Sustainability",
                description:
                  "We're committed to developing products and processes that protect our planet and preserve resources for future generations.",
                icon: "🌱",
              },
              {
                title: "Excellence",
                description:
                  "We maintain the highest standards in everything we do, from research and development to customer service.",
                icon: "⭐",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-md bg-gray-900/40 border border-gray-800 hover:border-blue-500/50 rounded-xl p-8 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
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
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Join Us in Shaping the Future of Chemistry
              </h2>
              <p className="text-gray-300 mb-8">
                Whether you're looking to partner with us, join our team, or learn more about our innovative solutions,
                we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white">
                  Explore Careers
                </Button>
                <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-950/30">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

