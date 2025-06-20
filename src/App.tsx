import React, { useState, useEffect } from 'react'
import { Sparkles, Code, Palette, Zap } from 'lucide-react'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentFeature, setCurrentFeature] = useState(0)

  const features = [
    { icon: Code, text: "Full Stack Development", color: "text-blue-400" },
    { icon: Palette, text: "Beautiful UI/UX Design", color: "text-pink-400" },
    { icon: Zap, text: "Lightning Fast Performance", color: "text-yellow-400" },
    { icon: Sparkles, text: "AI-Powered Solutions", color: "text-purple-400" }
  ]

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 100)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => window.clearInterval(interval)
  }, [features.length])

  return (
    <div className="min-h-screen bg-neutral-900 text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Logo/Brand */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 shadow-2xl">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Hello, World!
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-300 mb-2">
              Welcome to WebSparks AI
            </p>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Your expert AI-powered full stack software engineer, ready to create exceptional applications with cutting-edge technology and beautiful design.
            </p>
          </div>

          {/* Animated Features */}
          <div className="mb-12">
            <div className="h-16 flex items-center justify-center">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className={`absolute transition-all duration-500 transform ${
                      currentFeature === index 
                        ? 'translate-y-0 opacity-100 scale-100' 
                        : 'translate-y-4 opacity-0 scale-95'
                    }`}
                  >
                    <div className="flex items-center space-x-3 bg-neutral-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-neutral-700">
                      <Icon className={`w-6 h-6 ${feature.color}`} />
                      <span className="text-neutral-200 font-medium">{feature.text}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10">Start Building</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="px-8 py-4 border border-neutral-600 rounded-xl font-semibold text-neutral-300 hover:text-white hover:border-neutral-500 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
              <div className="text-center p-4 bg-neutral-800/30 backdrop-blur-sm rounded-xl border border-neutral-700">
                <div className="text-2xl font-bold text-purple-400 mb-1">20+</div>
                <div className="text-sm text-neutral-400">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-neutral-800/30 backdrop-blur-sm rounded-xl border border-neutral-700">
                <div className="text-2xl font-bold text-blue-400 mb-1">100%</div>
                <div className="text-sm text-neutral-400">Production Ready</div>
              </div>
              <div className="text-center p-4 bg-neutral-800/30 backdrop-blur-sm rounded-xl border border-neutral-700">
                <div className="text-2xl font-bold text-pink-400 mb-1">∞</div>
                <div className="text-sm text-neutral-400">Possibilities</div>
              </div>
            </div>
          </div>
        </div>

        {/* Powered by WebSparks AI */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-2 text-neutral-500 text-sm">
            <Sparkles className="w-4 h-4" />
            <span>Powered by WebSparks AI</span>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-1000"></div>
      <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-2000"></div>
      <div className="absolute bottom-20 right-10 w-1 h-1 bg-yellow-400 rounded-full animate-ping delay-3000"></div>
    </div>
  )
}

export default App
