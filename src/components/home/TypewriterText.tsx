import { useState, useEffect } from 'react'

export function TypewriterText() {
  const words = ['convert', 'perform', 'succeed', 'grow', 'impress', 'deliver']
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < word.length) {
          setCurrentText(word.slice(0, currentText.length + 1))
        } else {
          // Start deleting after a pause
          setTimeout(() => setIsDeleting(true), 1000)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1))
        } else {
          // Move to next word
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? 50 : 80)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words])

  return (
    <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent relative z-10 inline-block text-left">
      {currentText}
      <span className="animate-pulse text-primary opacity-100 ml-1 font-thin">│</span>
    </span>
  )
}