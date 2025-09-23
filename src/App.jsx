import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Routes, Route, Navigate } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Library } from "./pages/Library"


function App() {
  // const location = useLocation();

  return (
    <>
    <div className="bg-[#0f172a] ">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/library" element={<Library />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
      
    </>
  )
}

export default App
