"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    department: "",
  })

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, department: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success")
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: "",
          department: "",
        })
        setFormStatus("idle")
      }, 3000)
    }, 1500)
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
              Get in{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We'd love to hear from you. Reach out with questions, partnership opportunities, or to learn more about
              our solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: "Visit Us",
                description: "123 Innovation Drive, Chemical Park, CA 94103, USA",
                icon: <MapPin className="h-8 w-8 text-blue-400" />,
              },
              {
                title: "Call Us",
                description: "+1 (555) 123-4567",
                icon: <Phone className="h-8 w-8 text-green-400" />,
              },
              {
                title: "Email Us",
                description: "info@chemtech.example.com",
                icon: <Mail className="h-8 w-8 text-blue-400" />,
              },
              {
                title: "Business Hours",
                description: "Monday - Friday: 9:00 AM - 5:00 PM",
                icon: <Clock className="h-8 w-8 text-green-400" />,
              },
            ].map((item, index) => (
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
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-300 mb-8">
                Fill out the form below and our team will get back to you as soon as possible. We're here to answer any
                questions you may have about our products, services, or company.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-gray-900 border-gray-800 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-gray-900 border-gray-800 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="bg-gray-900 border-gray-800 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="bg-gray-900 border-gray-800 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-300 mb-1">
                    Department *
                  </label>
                  <Select value={formData.department} onValueChange={handleSelectChange} required>
                    <SelectTrigger className="bg-gray-900 border-gray-800 focus:border-blue-500">
                      <SelectValue placeholder="Select a department" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-gray-800">
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="business">Business Development</SelectItem>
                      <SelectItem value="careers">Careers</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className="bg-gray-900 border-gray-800 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please provide details about your inquiry..."
                    required
                    className="bg-gray-900 border-gray-800 focus:border-blue-500 min-h-[150px]"
                  />
                </div>

                <div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white"
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "submitting" ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : formStatus === "success" ? (
                      <span className="flex items-center">
                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Message Sent!
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </div>

            <div>
              <div className="relative h-[400px] md:h-[600px] rounded-xl overflow-hidden mb-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-lg blur-lg opacity-70"></div>
                <div className="relative h-full w-full rounded-xl overflow-hidden">
                  {/* This would be replaced with an actual map component in production */}
                  <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                    <div className="text-center">
                      <Globe className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                      <p className="text-gray-400">Interactive Map</p>
                      <p className="text-sm text-gray-500">123 Innovation Drive, Chemical Park, CA 94103</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-md bg-gray-900/40 border border-gray-800 rounded-xl p-6 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">Contact Departments Directly</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 h-8 w-8 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-600/30 to-green-500/30 flex items-center justify-center">
                      <MessageSquare className="h-4 w-4 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Customer Support</h4>
                      <p className="text-gray-400 text-sm">support@chemtech.example.com</p>
                      <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 h-8 w-8 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-600/30 to-green-500/30 flex items-center justify-center">
                      <MessageSquare className="h-4 w-4 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Sales Inquiries</h4>
                      <p className="text-gray-400 text-sm">sales@chemtech.example.com</p>
                      <p className="text-gray-400 text-sm">+1 (555) 987-6543</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 mt-1 h-8 w-8 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-600/30 to-green-500/30 flex items-center justify-center">
                      <MessageSquare className="h-4 w-4 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Media Relations</h4>
                      <p className="text-gray-400 text-sm">media@chemtech.example.com</p>
                      <p className="text-gray-400 text-sm">+1 (555) 456-7890</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Locations Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Global Locations</h2>
            <p className="text-gray-400">
              With offices and facilities around the world, we're always close to our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                region: "North America",
                locations: [
                  { city: "San Francisco, CA", address: "123 Innovation Drive, Chemical Park, CA 94103" },
                  { city: "Boston, MA", address: "456 Research Boulevard, MA 02110" },
                  { city: "Houston, TX", address: "789 Industrial Parkway, TX 77002" },
                ],
              },
              {
                region: "Europe",
                locations: [
                  { city: "London, UK", address: "10 Chemistry Lane, London, EC1V 9BX" },
                  { city: "Frankfurt, Germany", address: "Wissenschaftsstraße 15, 60486 Frankfurt" },
                  { city: "Lyon, France", address: "25 Rue de l'Innovation, 69002 Lyon" },
                ],
              },
              {
                region: "Asia Pacific",
                locations: [
                  { city: "Singapore", address: "88 Science Park Drive, Singapore 118261" },
                  { city: "Shanghai, China", address: "200 Century Avenue, Pudong, Shanghai" },
                  { city: "Tokyo, Japan", address: "3-2-1 Marunouchi, Chiyoda-ku, Tokyo" },
                ],
              },
            ].map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-md bg-gray-900/40 border border-gray-800 hover:border-blue-500/50 rounded-xl p-8 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{region.region}</h3>
                <div className="space-y-4">
                  {region.locations.map((location, i) => (
                    <div key={i} className="border-t border-gray-800 pt-4 first:border-0 first:pt-0">
                      <h4 className="text-lg font-semibold text-blue-400 mb-1">{location.city}</h4>
                      <p className="text-gray-400 text-sm">{location.address}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">Find answers to common questions about contacting and working with us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "What information should I include in my inquiry?",
                answer:
                  "To help us respond to your inquiry most effectively, please include details about your specific needs, industry, timeline, and any relevant technical requirements. The more information you provide, the better we can assist you.",
              },
              {
                question: "How quickly can I expect a response?",
                answer:
                  "We strive to respond to all inquiries within 24 business hours. Complex technical inquiries may take slightly longer as we consult with our specialists to provide you with the most accurate information.",
              },
              {
                question: "Can I schedule a product demonstration?",
                answer:
                  "Yes! We offer both virtual and in-person product demonstrations. Please contact our sales team through the form above or email sales@chemtech.example.com to schedule a demonstration tailored to your specific interests.",
              },
              {
                question: "Do you offer technical support for your products?",
                answer:
                  "Absolutely. We provide comprehensive technical support for all our products. Existing customers can reach our support team at support@chemtech.example.com or through our customer portal for immediate assistance.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-md bg-gray-900/40 border border-gray-800 hover:border-blue-500/50 rounded-xl p-6 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-400 text-sm">{faq.answer}</p>
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
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Connect With Us Today</h2>
              <p className="text-gray-300 mb-8">
                Whether you have a question about our products, need technical support, or want to explore partnership
                opportunities, we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">
                  Contact Sales Team
                </Button>
                <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-950/30">
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

