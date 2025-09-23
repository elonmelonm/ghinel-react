import { Link, NavLink } from "react-router-dom"
import { ArrowRightStartOnRectangleIcon, BookOpenIcon, HomeIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { UserIcon } from "@heroicons/react/24/solid"
import { Bars3Icon } from "@heroicons/react/24/solid"
import { useState } from "react";
 
export function Header(){
    const [menuOpen, setMenuOpen] = useState(false);
    return (
    <>
        <nav className="sticky top-0 z-50 w-full h-[88px] border-b border-white/10 rounded-b-3xl px-4 sm:px-8 md:px-16 flex justify-center glass glass--soft">
            <div className="w-full max-w-[1280px] mx-auto flex flex-row justify-between items-center text-white">
                {/* logo */}
                <div className="flex flex-row items-center gap-2">
                    <BookOpenIcon className="w-6 h-6" />
                    GHINEL
                </div>
                <div className="hidden lg:flex flex-row items-center gap-4 md:gap-7 text-sm md:text-base">
                    <NavLink
                        to="/"
                        className={({ isActive }) => `flex items-center gap-1 hover:text-brand ${isActive ? 'text-brand' : ''}`}
                    >
                        <HomeIcon className="w-5 h-5" /> Home
                    </NavLink>
                    {" | "}
                    <NavLink
                        to="/library"
                        className={({ isActive }) => `hover:text-brand ${isActive ? 'text-brand' : ''}`}
                    >
                        Bibliothèque
                    </NavLink>
                    {" | "}
                    <NavLink
                        to="/about"
                        className={({ isActive }) => `hover:text-brand ${isActive ? 'text-brand' : ''}`}
                    >
                        About
                    </NavLink>
                    {" | "}
                    <NavLink
                        to="/blog"
                        className={({ isActive }) => `hover:text-brand ${isActive ? 'text-brand' : ''}`}
                    >
                        Blog
                    </NavLink>
                </div>
                <div className="flex flex-row items-center gap-2 sm:gap-4">
                    <button className="flex items-center px-4 py-2 hover:border rounded-full gap-1 cursor-pointer"><UserIcon className="w-5 h-5" /> Sign in</button>
                    <button className="hidden lg:flex items-center bg-brand hover:bg-transparent hover:text-white text-onBrand px-4 py-2 border rounded-full gap-1 cursor-pointer">
                        Sign up
                        <ArrowRightStartOnRectangleIcon className="pt-1 w-5 h-5" />
                    </button>
                    <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden flex items-center bg-white text-onBrand px-1 py-1 border rounded-lg gap-1">
                        { !menuOpen && (
                            <Bars3Icon className="text- pt-1 w-6 h-6" />
                        )}
                        { menuOpen && (
                            <XMarkIcon className="text- pt-1 w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>
            
            {/* Mobile menu dropdown */}
            {menuOpen && (
                <div className="lg:hidden absolute top-[88px] bg-bg left-0 w-full h-screen rounded-t-lg z-10 border-[#FFFFFF29] animate-slideDown">
                    <div className="flex flex-col gap-9 px-4 justify-center bg- rounded-2xl items-center pt-2 text-white">
                        <div className="flex flex-col justify-center items-center gap-7">
                        <NavLink
                            to="/"
                            onClick={() => setMenuOpen(!menuOpen)}
                            className={({ isActive }) => `flex items-center gap-1 hover:text-brand ${isActive ? 'text-brand' : ''}`}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/library"
                            onClick={() => setMenuOpen(!menuOpen)}
                            className={({ isActive }) => `hover:text-brand ${isActive ? 'text-brand' : ''}`}
                        >
                            Bibliothèque
                        </NavLink>
                        <NavLink
                            to="/about"
                            onClick={() => setMenuOpen(!menuOpen)}
                            className={({ isActive }) => `hover:text-brand ${isActive ? 'text-brand' : ''}`}
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/blog"
                            onClick={() => setMenuOpen(!menuOpen)}
                            className={({ isActive }) => `hover:text-brand ${isActive ? 'text-brand' : ''}`}
                        >
                            Blog
                        </NavLink>
                        </div>
                        <button className='flex flex-row h-11 items-center text-black rounded-[57px] bg-white px-6 gap-2.5'>
                            Sign up
                            <ArrowRightStartOnRectangleIcon className="pt-1 w-5 h-5" />
                        </button>
                    </div>
                </div>
            )}
        </nav>
        
    </>
)
}