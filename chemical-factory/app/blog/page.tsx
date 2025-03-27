"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Search, Calendar, User, ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

// Blog categories and data
const categories = ["All", "Innovation", "Sustainability", "Industry Insights", "Research", "Company News"]

const blogPosts = [
  {
    id: 1,
    title: "Breakthrough in Sustainable Polymer Development",
    excerpt:
      "Our research team has developed a new biodegradable polymer with industrial-grade strength, potentially revolutionizing packaging materials.",
    category: "Innovation",
    author: "Dr. Sarah Chen",
    date: "June 15, 2023",
    readTime: "5 min read",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
  {
    id: 2,
    title: "The Future of Green Chemistry in Manufacturing",
    excerpt:
      "Exploring how green chemistry principles are transforming industrial manufacturing processes and reducing environmental impact.",
    category: "Sustainability",
    author: "Michael Rodriguez",
    date: "May 28, 2023",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
  },
  {
    id: 3,
    title: "Chemical Industry Trends to Watch in 2023",
    excerpt:
      "From digital transformation to circular economy initiatives, these are the top trends shaping the chemical industry this year.",
    category: "Industry Insights",
    author: "Emma Williams",
    date: "April 12, 2023",
    readTime: "6 min read",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: 4,
    title: "ChemTech Expands Research Facilities in Boston",
    excerpt:
      "We're excited to announce the opening of our new state-of-the-art research center focused on sustainable chemical innovation.",
    category: "Company News",
    author: "James Park",
    date: "March 30, 2023",
    readTime: "4 min read",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: 5,
    title: "Advances in Catalysis for Pharmaceutical Manufacturing",
    excerpt:
      "New catalyst technologies are significantly improving efficiency and reducing waste in pharmaceutical production processes.",
    category: "Research",
    author: "Dr. Sarah Chen",
    date: "March 15, 2023",
    readTime: "7 min read",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: 6,
    title: "Reducing Carbon Footprint in Chemical Production",
    excerpt:
      "Innovative approaches to minimize carbon emissions while maintaining productivity in chemical manufacturing operations.",
    category: "Sustainability",
    author: "Michael Rodriguez",
    date: "February 22, 2023",
    readTime: "6 min read",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: 7,
    title: "The Role of AI in Chemical Research and Development",
    excerpt:
      "How artificial intelligence and machine learning are accelerating discovery and optimization in chemical R&D.",
    category: "Innovation",
    author: "Emma Williams",
    date: "February 10, 2023",
    readTime: "9 min read",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
  {
    id: 8,
    title: "ChemTech Partners with Leading Universities on Green Chemistry Initiative",
    excerpt:
      "New collaborative research program aims to develop next-generation sustainable chemical processes and materials.",
    category: "Company News",
    author: "James Park",
    date: "January 25, 2023",
    readTime: "5 min read",
    image: "/placeholder.svg?height=400&width=600",
    featured: false,
  },
]

// Featured Post Component
const FeaturedPost = ({ post }: { post: (typeof blogPosts)[0] }) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-lg blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative backdrop-blur-md bg-gray-900/40 border border-gray-800 group-hover:border-blue-500/50 rounded-xl overflow-hidden transition-all duration-300">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative h-64 md:h-full overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6 flex flex-col">
            <div className="mb-2">
              <Badge variant="outline" className="bg-blue-900/30 text-blue-400 border-blue-500/50">
                {post.category}
              </Badge>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-400 mb-4 flex-grow">{post.excerpt}</p>
            <div className="flex items-center text-gray-500 text-sm mb-4">
              <div className="flex items-center mr-4">
                <User className="h-4 w-4 mr-1" />
                {post.author}
              </div>
              <div className="flex items-center mr-4">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
            </div>
            <Link href={`/blog/${post.id}`}>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">
                Read Article
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// Blog Card Component
const BlogCard = ({ post }: { post: (typeof blogPosts)[0] }) => {
  return (
    <div className="group">
      <div className="relative backdrop-blur-md bg-gray-900/40 border border-gray-800 group-hover:border-blue-500/50 rounded-xl overflow-hidden transition-all duration-300 h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-2 left-2">
            <Badge variant="outline" className="bg-blue-900/30 text-blue-400 border-blue-500/50">
              {post.category}
            </Badge>
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 flex-grow">{post.excerpt}</p>
          <div className="flex items-center text-gray-500 text-xs mb-4">
            <div className="flex items-center mr-3">
              <User className="h-3 w-3 mr-1" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              {post.date}
            </div>
          </div>
          <Link
            href={`/blog/${post.id}`}
            className="text-blue-400 hover:text-blue-300 flex items-center text-sm font-medium"
          >
            Read More
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter posts based on active category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Get featured posts
  const featuredPosts = blogPosts.filter(post => post.featured)

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
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Insights, innovations, and industry perspectives from the ChemTech team.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <FeaturedPost post={post} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <h2 className="text-2xl font-bold text-white">Latest Articles</h2>
            
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 items-center w-full md:w-auto">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 bg-gray-900 border-gray-800 focus:border-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2 overflow-x-auto w-full\

