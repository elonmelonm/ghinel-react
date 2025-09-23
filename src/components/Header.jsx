import { Link, NavLink } from "react-router-dom"
import { ArrowRightStartOnRectangleIcon, BookOpenIcon, HomeIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { UserIcon } from "@heroicons/react/24/solid"
import { Bars3Icon } from "@heroicons/react/24/solid"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
 
export function Header(){
    const [menuOpen, setMenuOpen] = useState(false);
    return (
    <>
        <motion.nav 
            className="sticky top-0 z-50 w-full h-[88px] border-b border-white/10 rounded-b-3xl px-4 sm:px-8 md:px-16 flex justify-center glass"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", damping: 20 }}
        >
            <div className="w-full max-w-[1280px] mx-auto flex flex-row justify-between items-center text-white">
                {/* logo */}
                <motion.div 
                    className="flex flex-row items-center gap-2"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                    >
                        <BookOpenIcon className="w-6 h-6" />
                    </motion.div>
                    <span>GHINEL</span>
                </motion.div>
                <motion.div 
                    className="hidden lg:flex flex-row items-center gap-4 md:gap-7 text-sm md:text-base"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <NavLink
                            to="/"
                            className={({ isActive }) => `flex items-center gap-1 hover:text-brand ${isActive ? 'text-brand' : ''}`}
                        >
                            <HomeIcon className="w-5 h-5" /> Home
                        </NavLink>
                    </motion.div>
                    {" | "}
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <NavLink
                            to="/library"
                            className={({ isActive }) => `hover:text-brand ${isActive ? 'text-brand' : ''}`}
                        >
                            Bibliothèque
                        </NavLink>
                    </motion.div>
                    {" | "}
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <NavLink
                            to="/chatbot"
                            className={({ isActive }) => `hover:text-brand ${isActive ? 'text-brand' : ''}`}
                        >
                            ChatBot
                        </NavLink>
                    </motion.div>
                    {" | "}
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => `hover:text-brand ${isActive ? 'text-brand' : ''}`}
                        >
                            About
                        </NavLink>
                    </motion.div>
                    {" | "}
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <NavLink
                            to="/blog"
                            className={({ isActive }) => `hover:text-brand ${isActive ? 'text-brand' : ''}`}
                        >
                            Blog
                        </NavLink>
                    </motion.div>
                </motion.div>
                <motion.div 
                    className="flex flex-row items-center gap-2 sm:gap-4"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <motion.button 
                        className="flex items-center px-4 py-2 hover:border rounded-full gap-1 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <UserIcon className="w-5 h-5" /> Sign in
                    </motion.button>
                    <motion.button 
                        className="hidden lg:flex items-center bg-brand hover:bg-transparent hover:text-white text-onBrand px-4 py-2 border rounded-full gap-1 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Sign up
                        <ArrowRightStartOnRectangleIcon className="pt-1 w-5 h-5" />
                    </motion.button>
                    <motion.button 
                        onClick={() => setMenuOpen(!menuOpen)} 
                        className="lg:hidden flex items-center bg-white text-onBrand px-1 py-1 border rounded-lg gap-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <AnimatePresence mode="wait">
                            {!menuOpen && (
                                <motion.div
                                    key="bars"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Bars3Icon className="text- pt-1 w-6 h-6" />
                                </motion.div>
                            )}
                            {menuOpen && (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <XMarkIcon className="text- pt-1 w-6 h-6" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </motion.div>
            </div>
            
            {/* Mobile menu dropdown */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div 
                        className="lg:hidden absolute top-[88px] bg-bg left-0 w-full h-screen rounded-t-lg z-10 border-[#FFFFFF29]"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.3, type: "spring", damping: 25 }}
                    >
                        <motion.div 
                            className="flex flex-col gap-9 px-4 justify-center bg- rounded-2xl items-center pt-2 text-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
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
                                    to="/chatbot"
                                    onClick={() => setMenuOpen(!menuOpen)}
                                    className={({ isActive }) => `hover:text-brand ${isActive ? 'text-brand' : ''}`}
                                >
                                    ChatBot
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
                            <motion.button 
                                className='flex flex-row h-11 items-center text-black rounded-[57px] bg-white px-6 gap-2.5'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Sign up
                                <ArrowRightStartOnRectangleIcon className="pt-1 w-5 h-5" />
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
        
    </>
)
}