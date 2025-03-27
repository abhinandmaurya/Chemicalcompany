"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ChevronRight,
  Search,
  MapPin,
  Briefcase,
  DollarSign,
  GraduationCap,
  Users,
  Heart,
  Zap,
  Leaf,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Job categories and data
const categories = [
  "All",
  "Research & Development",
  "Manufacturing",
  "Engineering",
  "Business Operations",
  "Sales & Marketing",
]

const jobs = [
  {
    id: 1,
    title: "Senior Research Chemist",
    department: "Research & Development",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    description:
      "Lead research initiatives to develop innovative chemical solutions with a focus on sustainability and performance.",
    requirements: [
      "Ph.D. in Chemistry or related field",
      "5+ years of experience in industrial chemical research",
      "Strong background in green chemistry principles",
      "Experience with analytical instrumentation and techniques",
      "Excellent problem-solving and communication skills",
    ],
    benefits: [
      "Competitive salary and bonus structure",
      "Comprehensive health, dental, and vision insurance",
      "401(k) matching program",
      "Flexible work arrangements",
      "Professional development opportunities",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "Process Engineer",
    department: "Engineering",
    location: "Houston, TX",
    type: "Full-time",
    salary: "$80,000 - $110,000",
    description:
      "Design, optimize, and troubleshoot chemical manufacturing processes to improve efficiency and sustainability.",
    requirements: [
      "B.S. or M.S. in Chemical Engineering",
      "3+ years of experience in chemical process engineering",
      "Knowledge of process simulation software",
      "Experience with process safety management",
      "Strong analytical and problem-solving skills",
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Comprehensive benefits package",
      "Relocation assistance",
      "Continuing education support",
      "Employee wellness program",
    ],
    featured: true,
  },
  {
    id: 3,
    title: "Quality Control Specialist",
    department: "Manufacturing",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$65,000 - $85,000",
    description:
      "Ensure product quality through testing, inspection, and implementation of quality control procedures.",
    requirements: [
      "B.S. in Chemistry, Chemical Engineering, or related field",
      "2+ years of experience in quality control in chemical manufacturing",
      "Familiarity with GMP and ISO quality standards",
      "Experience with analytical testing methods",
      "Attention to detail and strong documentation skills",
    ],
    benefits: [
      "Competitive salary",
      "Comprehensive benefits package",
      "Paid time off and holidays",
      "Professional development opportunities",
      "Employee discount program",
    ],
    featured: false,
  },
  {
    id: 4,
    title: "Sustainability Manager",
    department: "Business Operations",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$85,000 - $115,000",
    description:
      "Lead initiatives to improve environmental performance and implement sustainable practices across the organization.",
    requirements: [
      "B.S. or M.S. in Environmental Science, Sustainability, or related field",
      "5+ years of experience in sustainability management",
      "Knowledge of environmental regulations and standards",
      "Experience with sustainability reporting and metrics",
      "Strong project management and communication skills",
    ],
    benefits: [
      "Competitive salary and bonus structure",
      "Comprehensive benefits package",
      "Flexible work arrangements",
      "Professional development budget",
      "Volunteer time off program",
    ],
    featured: true,
  },
  {
    id: 5,
    title: "Technical Sales Representative",
    department: "Sales & Marketing",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$70,000 - $100,000 + Commission",
    description:
      "Develop and maintain client relationships, provide technical expertise, and drive sales growth in assigned territory.",
    requirements: [
      "B.S. in Chemistry, Chemical Engineering, or related field",
      "3+ years of experience in technical sales, preferably in the chemical industry",
      "Strong understanding of chemical applications and customer needs",
      "Excellent communication and relationship-building skills",
      "Willingness to travel (30-40%)",
    ],
    benefits: [
      "Competitive base salary plus commission",
      "Comprehensive benefits package",
      "Company car or car allowance",
      "Mobile phone and laptop",
      "Performance-based incentives",
    ],
    featured: false,
  },
  {
    id: 6,
    title: "Laboratory Technician",
    department: "Research & Development",
    location: "Raleigh, NC",
    type: "Full-time",
    salary: "$45,000 - $60,000",
    description:
      "Support research activities through sample preparation, testing, data collection, and equipment maintenance.",
    requirements: [
      "Associate's or Bachelor's degree in Chemistry or related field",
      "1+ years of laboratory experience",
      "Familiarity with common laboratory equipment and techniques",
      "Attention to detail and good record-keeping skills",
      "Ability to follow protocols and safety procedures",
    ],
    benefits: [
      "Competitive salary",
      "Comprehensive benefits package",
      "Paid time off and holidays",
      "Tuition assistance program",
      "Career advancement opportunities",
    ],
    featured: false,
  },
  {
    id: 7,
    title: "Environmental Health & Safety Specialist",
    department: "Business Operations",
    location: "Denver, CO",
    type: "Full-time",
    salary: "$70,000 - $90,000",
    description:
      "Develop and implement programs to ensure workplace safety and environmental compliance across all facilities.",
    requirements: [
      "B.S. in Environmental Health & Safety, Environmental Science, or related field",
      "3+ years of EHS experience in chemical manufacturing",
      "Knowledge of OSHA, EPA, and other regulatory requirements",
      "Experience with safety audits and incident investigations",
      "Strong communication and training skills",
    ],
    benefits: [
      "Competitive salary",
      "Comprehensive benefits package",
      "Flexible work arrangements",
      "Professional certification support",
      "Employee wellness program",
    ],
    featured: false,
  },
  {
    id: 8,
    title: "Production Supervisor",
    department: "Manufacturing",
    location: "Philadelphia, PA",
    type: "Full-time",
    salary: "$75,000 - $95,000",
    description:
      "Oversee daily manufacturing operations, ensuring safety, quality, efficiency, and compliance with all standards.",
    requirements: [
      "B.S. in Chemical Engineering, Chemistry, or related field",
      "5+ years of experience in chemical manufacturing",
      "Strong leadership and team management skills",
      "Knowledge of lean manufacturing principles",
      "Experience with production planning and scheduling",
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Comprehensive benefits package",
      "Retirement savings plan with company match",
      "Leadership development program",
      "Employee recognition program",
    ],
    featured: false,
  },
]

// Job Card Component
const JobCard = ({ job, onClick }: { job: (typeof jobs)[0]; onClick: () => void }) => {
  return (
    <div
      className={`relative backdrop-blur-md bg-gray-900/40 border border-gray-800 hover:border-blue-500/50 rounded-xl p-6 transition-all duration-300 cursor-pointer ${
        job.featured ? "ring-2 ring-blue-500/50 ring-offset-2 ring-offset-black" : ""
      }`}
      onClick={onClick}
    >
      {job.featured && (
        <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          Featured
        </div>
      )}
      <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
      <p className="text-blue-400 text-sm mb-4">{job.department}</p>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="flex items-center text-gray-400 text-sm">
          <MapPin className="h-4 w-4 mr-2 text-green-400" />
          {job.location}
        </div>
        <div className="flex items-center text-gray-400 text-sm">
          <Briefcase className="h-4 w-4 mr-2 text-green-400" />
          {job.type}
        </div>
        <div className="flex items-center text-gray-400 text-sm col-span-2">
          <DollarSign className="h-4 w-4 mr-2 text-green-400" />
          {job.salary}
        </div>
      </div>

      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{job.description}</p>

      <Button className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">
        View Details
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}

// Job Detail Modal
const JobDetail = ({ job, onClose }: { job: (typeof jobs)[0]; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-lg blur-lg opacity-70"></div>
        <div className="relative backdrop-blur-md bg-gray-900/90 border border-gray-800 rounded-xl p-6 md:p-8 max-h-[80vh] overflow-y-auto">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="mb-6">
            {job.featured && (
              <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-900/50 text-blue-400 mb-2">
                Featured Position
              </div>
            )}
            <h2 className="text-2xl font-bold text-white mb-2">{job.title}</h2>
            <p className="text-blue-400 mb-4">{job.department}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="backdrop-blur-sm bg-gray-900/20 border border-gray-800 rounded-lg p-3 flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-green-400" />
                <div>
                  <div className="text-xs text-gray-500 mb-1">Location</div>
                  <div className="text-gray-300">{job.location}</div>
                </div>
              </div>
              <div className="backdrop-blur-sm bg-gray-900/20 border border-gray-800 rounded-lg p-3 flex items-center">
                <Briefcase className="h-5 w-5 mr-3 text-green-400" />
                <div>
                  <div className="text-xs text-gray-500 mb-1">Employment Type</div>
                  <div className="text-gray-300">{job.type}</div>
                </div>
              </div>
              <div className="backdrop-blur-sm bg-gray-900/20 border border-gray-800 rounded-lg p-3 flex items-center">
                <DollarSign className="h-5 w-5 mr-3 text-green-400" />
                <div>
                  <div className="text-xs text-gray-500 mb-1">Salary Range</div>
                  <div className="text-gray-300">{job.salary}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Job Description</h3>
            <p className="text-gray-300 mb-4">{job.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Requirements</h3>
            <ul className="space-y-2">
              {job.requirements.map((requirement, i) => (
                <li key={i} className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-green-500 flex items-center justify-center">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-3">Benefits</h3>
            <ul className="space-y-2">
              {job.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start">
                  <div className="mr-3 mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-gradient-to-r from-green-600 to-blue-500 flex items-center justify-center">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-end">
            <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">
              Apply Now
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CareersPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedJob, setSelectedJob] = useState<(typeof jobs)[0] | null>(null)

  // Filter jobs based on active category and search query
  const filteredJobs = jobs.filter((job) => {
    const matchesCategory = activeCategory === "All" || job.department === activeCategory
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
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
              Join Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover exciting career opportunities where innovation meets purpose.
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-8 py-6 text-lg">
              View Open Positions
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Join ChemTech?</h2>
            <p className="text-gray-400">
              We offer more than just a job—we provide an opportunity to make a meaningful impact while growing your
              career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovative Environment",
                description:
                  "Work at the forefront of chemical innovation, developing solutions that address global challenges.",
                icon: <Zap className="h-8 w-8 text-blue-400" />,
              },
              {
                title: "Growth & Development",
                description:
                  "Access continuous learning opportunities, mentorship programs, and clear career advancement paths.",
                icon: <GraduationCap className="h-8 w-8 text-green-400" />,
              },
              {
                title: "Collaborative Culture",
                description:
                  "Join a diverse team of experts who collaborate across disciplines to achieve breakthrough results.",
                icon: <Users className="h-8 w-8 text-blue-400" />,
              },
              {
                title: "Work-Life Balance",
                description:
                  "Enjoy flexible work arrangements, generous time off, and programs that support your wellbeing.",
                icon: <Heart className="h-8 w-8 text-green-400" />,
              },
              {
                title: "Competitive Compensation",
                description:
                  "Receive a comprehensive benefits package including competitive salary, healthcare, retirement plans, and more.",
                icon: <DollarSign className="h-8 w-8 text-blue-400" />,
              },
              {
                title: "Purpose-Driven Work",
                description:
                  "Make a meaningful impact by developing sustainable solutions that address critical global challenges.",
                icon: <Leaf className="h-8 w-8 text-green-400" />,
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-md bg-gray-900/40 border border-gray-800 hover:border-blue-500/50 rounded-xl p-8 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600/30 to-green-500/30 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-gray-400">
              Explore our current job openings and find the perfect opportunity to advance your career.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search positions..."
                className="pl-10 bg-gray-900 border-gray-800 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">Filter by department:</span>
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

          {/* Jobs Grid */}
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <JobCard job={job} onClick={() => setSelectedJob(job)} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No positions found matching your criteria.</p>
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

      {/* Employee Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Employee Testimonials</h2>
            <p className="text-gray-400">Hear from our team members about their experiences working at ChemTech.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "Senior Research Chemist",
                years: "5 years at ChemTech",
                quote:
                  "Working at ChemTech has given me the opportunity to pursue cutting-edge research while making a real impact on sustainability. The collaborative environment and resources available have accelerated my professional growth beyond what I could have imagined.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Michael Rodriguez",
                role: "Process Engineer",
                years: "3 years at ChemTech",
                quote:
                  "What I appreciate most about ChemTech is the balance between innovation and practical application. We're encouraged to think creatively while developing solutions that address real-world challenges. The supportive culture and emphasis on continuous learning make this an ideal place to build a career.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Emma Williams",
                role: "Sustainability Manager",
                years: "4 years at ChemTech",
                quote:
                  "ChemTech truly lives its values when it comes to sustainability. I've been empowered to implement meaningful environmental initiatives that have transformed our operations. The leadership team genuinely cares about making a positive impact, both within the company and in the broader world.",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-md bg-gray-900/40 border border-gray-800 hover:border-blue-500/50 rounded-xl p-8 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                    <p className="text-blue-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.years}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship & Early Career Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-lg blur-lg opacity-70"></div>
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Early Career Programs"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Early Career Programs</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We're committed to developing the next generation of chemical innovators through our comprehensive
                  internship and early career programs. These opportunities provide hands-on experience, mentorship, and
                  a pathway to a rewarding career at ChemTech.
                </p>
                <p>
                  Our programs include summer internships for undergraduate students, co-op positions for those seeking
                  more extensive experience, and our two-year rotational program for recent graduates.
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
                    <h3 className="text-lg font-semibold text-white">Summer Internship Program</h3>
                    <p className="text-gray-400 text-sm">
                      10-12 week paid internships for undergraduate and graduate students.
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
                    <h3 className="text-lg font-semibold text-white">Co-op Program</h3>
                    <p className="text-gray-400 text-sm">
                      6-month positions integrated with academic programs at partner universities.
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
                    <h3 className="text-lg font-semibold text-white">Leadership Development Program</h3>
                    <p className="text-gray-400 text-sm">
                      Two-year rotational program for recent graduates, with exposure to multiple departments.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">
                  Learn About Early Career Opportunities
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Application Process</h2>
            <p className="text-gray-400">
              We've designed a straightforward application process to help you find the right opportunity at ChemTech.
            </p>
          </div>

          <div className="relative">
            {/* Process Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-green-500 opacity-30 hidden md:block"></div>

            {/* Process Steps */}
            <div className="space-y-12">
              {[
                {
                  title: "Apply Online",
                  description:
                    "Browse our open positions and submit your application through our careers portal. Be sure to include your resume and a cover letter explaining why you're interested in joining ChemTech.",
                  icon: <Briefcase className="h-6 w-6" />,
                },
                {
                  title: "Initial Screening",
                  description:
                    "Our recruiting team will review your application and reach out to qualified candidates for an initial phone or video screening to discuss your background and interest in the role.",
                  icon: <Users className="h-6 w-6" />,
                },
                {
                  title: "Technical Assessment",
                  description:
                    "Depending on the position, you may be asked to complete a technical assessment or case study to demonstrate your skills and problem-solving abilities.",
                  icon: <GraduationCap className="h-6 w-6" />,
                },
                {
                  title: "Interview Process",
                  description:
                    "Qualified candidates will be invited for a series of interviews with the hiring manager, team members, and other stakeholders. These may be conducted virtually or in person.",
                  icon: <Users className="h-6 w-6" />,
                },
                {
                  title: "Offer & Onboarding",
                  description:
                    "Successful candidates will receive a job offer, and once accepted, our HR team will guide you through the onboarding process to ensure a smooth transition to ChemTech.",
                  icon: <Heart className="h-6 w-6" />,
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Process Content */}
                  <div className="md:w-1/2 px-4 md:px-8">
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="backdrop-blur-md bg-gray-900/40 border border-gray-800 hover:border-blue-500/50 rounded-xl p-6 transition-all duration-300"
                    >
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </motion.div>
                  </div>

                  {/* Process Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-green-500 z-10 flex items-center justify-center hidden md:flex">
                    {step.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-xl bg-blue-950/20 border border-blue-500/30 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-500/10"></div>
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Join Our Team?</h2>
              <p className="text-gray-300 mb-8">
                Explore our open positions and take the first step toward a rewarding career at ChemTech.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">
                  View All Positions
                </Button>
                <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-950/30">
                  Join Talent Network
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Detail Modal */}
      {selectedJob && <JobDetail job={selectedJob} onClose={() => setSelectedJob(null)} />}
    </main>
  )
}

