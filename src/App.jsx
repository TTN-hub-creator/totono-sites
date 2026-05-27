import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Nagi from './pages/Nagi'
import NestShimada from './pages/NestShimada'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f7f3ea] text-[#2f332f]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nagi" element={<Nagi />} />
          <Route path="/nest-shimada" element={<NestShimada />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
