import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Library } from "./pages/Library"
import { BookDetail } from "./pages/BookDetail"
import { BookReader } from "./pages/BookReader"
import { Blog } from "./pages/Blog"
import { Chatbot } from "./pages/ChatBot"
import { ChatInterface } from "./pages/ChatInterface"


function App() {
  const location = useLocation();
  
  // Routes où le footer ne doit pas s'afficher
  const hideFooterRoutes = ['/chat/'];

  const shouldShowFooter = !hideFooterRoutes.some(route => location.pathname.startsWith(route));

  return (
    <>
    <div className=" bg-bg w-[100%] overflow-x-clip ">
      {shouldShowFooter && <Header />}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/library" element={<Library />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/reader/:id" element={<BookReader />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/chat/:characterId" element={<ChatInterface />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {shouldShowFooter && <Footer />}
    </div>
      
    </>
  )
}

export default App
