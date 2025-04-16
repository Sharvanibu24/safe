import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, MapPin, Phone, Bell, BookOpen } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-rose-500 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">SafeGuard</h1>
          <p className="text-xl md:text-2xl mb-8">Your personal safety companion</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="bg-white text-rose-500 hover:bg-gray-100">
                Sign Up
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Log In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Phone className="h-10 w-10 text-rose-500" />}
              title="Emergency Contacts"
              description="Add trusted contacts who will be notified in case of emergency."
            />
            <FeatureCard
              icon={<MapPin className="h-10 w-10 text-rose-500" />}
              title="Location Sharing"
              description="Share your real-time location with trusted contacts."
            />
            <FeatureCard
              icon={<Bell className="h-10 w-10 text-rose-500" />}
              title="SOS Alerts"
              description="Send immediate alerts with your location to emergency contacts."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-rose-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-rose-500 font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Create an Account</h3>
              <p className="text-gray-600">Sign up and set up your profile with emergency information.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-rose-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-rose-500 font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Add Trusted Contacts</h3>
              <p className="text-gray-600">Add friends and family who can be contacted in emergencies.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-rose-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-rose-500 font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Stay Protected</h3>
              <p className="text-gray-600">Use SOS features when you feel unsafe or need assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Safety Resources</h2>
          <div className="bg-rose-50 p-8 rounded-lg max-w-3xl mx-auto">
            <div className="flex items-start mb-6">
              <BookOpen className="h-6 w-6 text-rose-500 mr-3 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Safety Tips</h3>
                <p className="text-gray-700">Access a comprehensive library of safety tips and best practices.</p>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <Shield className="h-6 w-6 text-rose-500 mr-3 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Local Resources</h3>
                <p className="text-gray-700">Find safety resources and support services in your area.</p>
              </div>
            </div>
            <Link href="/resources">
              <Button className="w-full bg-rose-500 hover:bg-rose-600">View All Resources</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">SafeGuard</h3>
              <p className="text-gray-400 max-w-md">
                Empowering women with technology for personal safety and peace of mind.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-gray-400 hover:text-white">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/features" className="text-gray-400 hover:text-white">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources" className="text-gray-400 hover:text-white">
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-400 hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/privacy" className="text-gray-400 hover:text-white">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-gray-400 hover:text-white">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} SafeGuard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
