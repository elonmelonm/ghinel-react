import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Routes, Route, Navigate } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Library } from "./pages/Library"
import { BookDetail } from "./pages/BookDetail"
import { BookReader } from "./pages/BookReader"
import { Blog } from "./pages/Blog"
import { Chatbot } from "./pages/ChatBot"


function App() {
  // const location = useLocation();

  return (
    <>
    <div className=" bg-bg w-[100%] overflow-x-clip ">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/library" element={<Library />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/reader/:id" element={<BookReader />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
      
    </>
  )
}

export default App
