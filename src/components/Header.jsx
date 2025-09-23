import { Link } from "react-router-dom"
import { ArrowRightStartOnRectangleIcon, BookOpenIcon, HomeIcon } from "@heroicons/react/24/outline"
import { UserIcon } from "@heroicons/react/24/solid"

export function Header(){
    return (
    <>
        <nav className="h-[88px] border-b border-white/10 px-16 flex justify-center">
            <div className="w-full max-w-[1280px] mx-auto flex flex-row justify-between items-center text-white">
                <div className="flex flex-row items-center gap-2">
                    <BookOpenIcon className="w-6 h-6" />
                    GHINEL
                </div>
                <div className="flex flex-row items-center gap-7">
                    <Link to="/" className="flex items-center gap-1"><HomeIcon className="w-5 h-5" /> Home</Link>
                    {" | "}
                    <Link to="/library">Bibliothèque</Link>
                    {" | "}
                    <Link to="/about">About</Link>
                    {" | "}
                    <Link to="/about">Blog</Link>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <button className="flex items-center px-4 py-2 hover:border rounded-full gap-1 cursor-pointer"><UserIcon className="w-5 h-5" /> Login</button>
                    <button className="flex items-center bg-white hover:bg-transparent hover:text-white text-[#171a1f] px-4 py-2 border rounded-full gap-1 cursor-pointer">
                        Signup
                        <ArrowRightStartOnRectangleIcon className="pt-1 w-5 h-5" />
                    </button>
                </div>
            </div>
            
        </nav>
    </>
)
}