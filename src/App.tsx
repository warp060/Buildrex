import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'
import Home from './pages/Home'
import About from './pages/About'
import Divisions from './pages/Divisions'
import DivisionDetail from './pages/DivisionDetail'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-navy-500/20 selection:text-navy-950">
      <CursorGlow />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/divisions" element={<Divisions />} />
          <Route path="/divisions/:slug" element={<DivisionDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
