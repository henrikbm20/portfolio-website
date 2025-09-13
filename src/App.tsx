import { Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './components/layout'
import { 
  Home, 
  Work, 
  ProjectDetail, 
  Pricing, 
  Quote, 
  About, 
  Contact, 
  NotFound 
} from './pages'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App