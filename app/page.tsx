import Link from "next/link"
import { ChevronRight } from "lucide-react"
import MoleculeAnimation from "@/components/molecule-animation"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <MoleculeAnimation />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400">
                Innovating Chemistry
              </span>
              <br />
              for a Better Tomorrow
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Pioneering sustainable chemical solutions with cutting-edge technology and research to shape the future of
              industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-none">
                Explore Our Products
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-950/30">
                Learn About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-green-400">Featured</span> Products
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover our innovative chemical solutions designed for efficiency, sustainability, and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="relative group rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="backdrop-blur-md bg-gray-900/60 border border-gray-800 group-hover:border-blue-500/50 rounded-xl p-6 transition-all duration-300 h-full flex flex-col">
                  <div className="h-48 bg-gradient-to-r from-blue-900/30 to-green-900/30 rounded-lg mb-6 overflow-hidden flex items-center justify-center">
                    <div className="text-blue-400 text-6xl font-bold opacity-30">C₈H₁₀N₄O₂</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Advanced Polymer {item}</h3>
                  <p className="text-gray-400 mb-4 flex-grow">
                    High-performance polymer designed for industrial applications requiring durability and chemical
                    resistance.
                  </p>
                  <Link
                    href="/products"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We <span className="text-blue-400">Serve</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our chemical solutions power innovation across multiple sectors, driving progress and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Pharmaceuticals", "Agriculture", "Manufacturing", "Energy"].map((industry) => (
              <div
                key={industry}
                className="backdrop-blur-md bg-gray-900/40 border border-gray-800 hover:border-green-500/50 rounded-xl p-6 transition-all duration-300 hover:transform hover:translate-y-[-5px] hover:shadow-[0_0_15px_rgba(0,255,170,0.3)]"
              >
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600/30 to-green-500/30 flex items-center justify-center mb-4">
                  <span className="text-green-400 text-xl">⚗️</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{industry}</h3>
                <p className="text-gray-400">
                  Specialized chemical solutions tailored for the unique challenges of {industry.toLowerCase()}.
                </p>
              </div>
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
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to transform your chemical processes?
                </h2>
                <p className="text-gray-300">
                  Connect with our experts to discover how our innovative solutions can enhance your operations.
                </p>
              </div>
              <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white min-w-[150px]">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

