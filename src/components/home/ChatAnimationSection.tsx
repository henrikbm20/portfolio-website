import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section } from '@/components/ui/layout'

export function ChatAnimationSection() {
  // Chat animation state
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = []
    
    const runSequence = () => {
      setVisibleMessages([])
      
      timeouts.push(setTimeout(() => setVisibleMessages([1]), 1000))
      timeouts.push(setTimeout(() => setVisibleMessages([1, 2]), 2400))
      timeouts.push(setTimeout(() => setVisibleMessages([1, 2, 3]), 3800))
      timeouts.push(setTimeout(() => {
        setVisibleMessages([])
        timeouts.push(setTimeout(runSequence, 1000))
      }, 5200))
    }
    
    runSequence()
    
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout))
    }
  }, [])

  return (
    <Section className="relative bg-muted/30 py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Chat Animation */}
          <div className="order-1 lg:order-1">
            <div className="max-w-md">
              {/* Container with same styling as hero image */}
              <div className="relative w-full">
                {/* Floating elements for depth - aligned to grid */}
                <div className="absolute bg-primary/10 rounded-full blur-xl animate-pulse" style={{ top: '-25px', right: '-25px', width: '50px', height: '50px' }}></div>
                <div className="absolute bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000" style={{ bottom: '-25px', left: '-25px', width: '75px', height: '75px' }}></div>
                
                {/* Main container - matching hero image style */}
                <div className="relative bg-gradient-to-br from-primary/20 to-blue-500/20 backdrop-blur-sm border border-primary/20 shadow-2xl" style={{ borderRadius: '25px', padding: '25px' }}>
                  
                  {/* Chat Window */}
                  <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-border transform hover:scale-105 transition-all duration-500 hover:shadow-3xl">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-primary to-primary/80 p-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Dequ Customer Support</h3>
                    <p className="text-xs text-white/80">Always online</p>
                  </div>
                </div>
              </div>

          {/* Chat Messages Container */}
                        {/* Chat Messages Container */}
              <div className="p-4 bg-gradient-to-b from-blue-50 to-white overflow-hidden relative flex flex-col justify-end" style={{ height: '300px' }}>
            
            <div className="flex flex-col gap-3">
              
              {/* Message 1 */}
              <AnimatePresence>
                {visibleMessages.includes(1) && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    layout
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm">D</span>
                    </div>
                    <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm border max-w-xs">
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-300 w-32"></div>
                        <div className="h-2 bg-gray-300 w-20"></div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Message 2 */}
              <AnimatePresence>
                {visibleMessages.includes(2) && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    layout
                    className="flex items-start gap-3 justify-end"
                  >
                    <div className="bg-primary text-white rounded-lg rounded-tr-none p-3 shadow-sm max-w-xs">
                      <div className="space-y-2">
                        <div className="h-2 bg-white/40 w-24"></div>
                        <div className="h-2 bg-white/40 w-16"></div>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">You</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Message 3 */}
              <AnimatePresence>
                {visibleMessages.includes(3) && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    layout
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm">D</span>
                    </div>
                    <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm border max-w-xs">
                      <p className="text-sm text-gray-800 mb-3">Here is your finished CIM, let us know if you want any changes ❤️</p>
                      
                      {/* File Download Component */}
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 text-sm">Pied_Piper_CIM.pdf</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

          {/* Chat Input (Static) - Simple bottom section */}
          <div className="p-4 bg-white border-t flex justify-center">
            <div className="space-y-2" style={{width: '20rem'}}>
              <div className="h-2 bg-gray-300 w-full"></div>
              <div className="h-2 bg-gray-300 w-3/4"></div>
            </div>
          </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Text Content */}
          <div className="order-2 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Always Here to Help
            </h2>
            <p className="text-xl text-muted-foreground">
              From project start to launch and beyond, our dedicated support team ensures your success every step of the way.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}