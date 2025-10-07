import { About } from "../components/About";
import { Faq } from "../components/Faq";
import { Hero } from "../components/Hero";
import { ChatbotSection } from "../components/ChatbotSection";

export function Home(){
    return (
    <>
        <div className="min-h-screen">
            <Hero />
            <About />
            <ChatbotSection />
            <Faq />
        </div>
    </>
)
}