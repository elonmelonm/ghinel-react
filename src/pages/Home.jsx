import { About } from "../components/About";
import { Faq } from "../components/Faq";
import { Hero } from "../components/Hero";

export function Home(){
    return (
    <>
        <div className="min-h-screen">
            <Hero />
            <About />
            <Faq />
        </div>
    </>
)
}