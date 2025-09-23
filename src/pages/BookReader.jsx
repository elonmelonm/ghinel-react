import { useState, useEffect } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { XMarkIcon, BookOpenIcon, LanguageIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { ReactReader } from "react-reader";
import { getBook, getLanguageName } from "../data/books.js";
import { useMobileDetection } from "../hooks/useMobileDetection";
import { motion, AnimatePresence } from "framer-motion";

export function BookReader() {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const language = searchParams.get("lang") || "fr";
    const navigate = useNavigate();
    
    const [bookUrl, setBookUrl] = useState(null);
    const [location, setLocation] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showSidebar, setShowSidebar] = useState(false);
    const isMobile = useMobileDetection();

    const bookId = id ? parseInt(id) : 0;
    const book = getBook(bookId);

    useEffect(() => {
        if (!book) {
            navigate("/library");
            return;
        }
        
        if (book.languages[language]) {
            setBookUrl(book.languages[language]);
        } else {
            const firstLang = Object.keys(book.languages)[0];
            setBookUrl(book.languages[firstLang]);
        }
        setIsLoading(false);
    }, [book, language, navigate]);

    const handleLocationChange = (epubcifi) => {
        setLocation(epubcifi);
    };

    const handleLanguageChange = (newLang) => {
        setLocation(0);
        navigate(`/reader/${bookId}?lang=${newLang}`);
    };

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };


    if (!book) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Livre non trouvé</h2>
                    <button 
                        onClick={() => navigate('/library')}
                        className="px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand/80 transition-colors"
                    >
                        Retour à la bibliothèque
                    </button>
                </div>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand mx-auto mb-4"></div>
                    <p className="text-white">Chargement du livre...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="text-center max-w-md mx-auto p-6">
                    <div className="text-red-500 text-6xl mb-4">⚠️</div>
                    <h2 className="text-2xl font-bold text-white mb-4">Erreur de chargement</h2>
                    <p className="text-white mb-4">{error}</p>
                    <button
                        onClick={() => navigate('/library')}
                        className="px-6 py-3 bg-brand text-white rounded-lg hover:bg-brand/80 transition-colors"
                    >
                        Retour à la bibliothèque
                    </button>
                </div>
            </div>
        );
    }

    return (
        <motion.div 
            className="min-h-screen bg-background flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Header du lecteur */}
            <motion.div 
                className="flex items-center justify-between p-4 border-b border-surface bg-background/95 backdrop-blur-sm flex-shrink-0" 
                style={{ 
                    backdropFilter: 'blur(4px)',
                    WebkitBackdropFilter: 'blur(4px)',
                    // backgroundColor: 'rgba(0, 0, 0, 0.8)'
                }}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="flex items-center gap-4">
                    <motion.button
                        onClick={() => navigate('/library')}
                        className="flex items-center gap-2 text-brand hover:text-brand/80 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                    >
                        <XMarkIcon className="w-5 h-5" />
                        <span className={isMobile ? 'hidden' : ''}>Retour</span>
                    </motion.button>
                </div>
                
                <div className="flex items-center gap-4">
                    <h2 className="hidden lg:block text-lg font-semibold text-white truncate max-w-md">
                        {book.title}
                    </h2>
                    <h2 className="lg:hidden text-lg font-semibold text-white truncate max-w-md">
                        {book.title.substring(0, 25)}...
                    </h2>
                </div>

                <div className="flex items-center gap-2">
                    <motion.button
                        onClick={toggleSidebar}
                        className="flex items-center gap-2 px-4 py-2 border border-surface text-white rounded-lg hover:bg-surface/20 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                    >
                        <Bars3Icon className="w-4 h-4" />
                        <span className={isMobile ? 'hidden' : ''}>Informations</span>
                    </motion.button>
                </div>
            </motion.div>

            {/* Menu mobile overlay */}
            <AnimatePresence>
                {showSidebar && isMobile && (
                    <motion.div 
                        className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
                        onClick={toggleSidebar}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div 
                            className="fixed right-0 top-0 h-full w-80 bg-surface/95 backdrop-blur-sm p-6"
                            style={{ 
                                backdropFilter: 'blur(8px)',
                                WebkitBackdropFilter: 'blur(8px)',
                                backgroundColor: 'rgba(0, 0, 0, 0.9)'
                            }}
                            initial={{ x: 320, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 320, opacity: 0 }}
                            transition={{ duration: 0.4, type: "spring", damping: 25 }}
                        >
                            <motion.div 
                                className="space-y-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-bold text-white">Informations</h3>
                                    <motion.button 
                                        onClick={toggleSidebar} 
                                        className="text-white hover:text-gray-300"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <XMarkIcon className="w-6 h-6" />
                                    </motion.button>
                                </div>
                            <img 
                                src={book.cover} 
                                alt={book.title}
                                className="w-full h-48 object-cover rounded-lg shadow-lg"
                            />
                            <div>
                                <h4 className="text-lg font-bold text-white mb-2">{book.title}</h4>
                                <p className="text-gray-300 mb-4">par {book.author}</p>
                                
                                {/* Sélecteur de langue */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-white mb-2">
                                        Langue de lecture :
                                    </label>
                                    <select
                                        value={language}
                                        onChange={(e) => handleLanguageChange(e.target.value)}
                                        className="w-full p-2 bg-surface border border-surface rounded-lg text-white focus:border-brand focus:outline-none"
                                    >
                                        {Object.keys(book.languages).map((langCode) => (
                                            <option key={langCode} value={langCode}>
                                                {getLanguageName(langCode)}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                
                                <p className="text-sm text-gray-400 leading-relaxed">{book.description}</p>
                            </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Contenu principal */}
            <div className="flex-1 flex overflow-hidden">
                {/* Sidebar avec informations du livre - Masquée sur mobile/tablette */}
                <div 
                    className={`w-80 bg-surface/50 border-r border-surface p-6 transition-transform duration-300 ${showSidebar ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 hidden lg:block`}
                    style={{ 
                        backdropFilter: 'blur(4px)',
                        WebkitBackdropFilter: 'blur(4px)',
                        // backgroundColor: 'rgba(0, 0, 0, 0.7)'
                    }}
                >
                    <div className="space-y-4">
                        <img 
                            src={book.cover} 
                            alt={book.title}
                            className="w-full h-48 object-cover rounded-lg shadow-lg"
                        />
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">{book.title}</h3>
                            <p className="text-gray-300 mb-4">par {book.author}</p>
                            
                            {/* Sélecteur de langue */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-white mb-2">
                                    Langue de lecture :
                                </label>
                                <select
                                    value={language}
                                    onChange={(e) => handleLanguageChange(e.target.value)}
                                    className="w-full p-2 bg-surface border border-surface rounded-lg text-white focus:border-brand focus:outline-none"
                                >
                                    {Object.keys(book.languages).map((langCode) => (
                                        <option key={langCode} value={langCode}>
                                            {getLanguageName(langCode)}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            
                            <p className="text-sm text-gray-400 leading-relaxed">{book.description}</p>
                        </div>
                    </div>
                </div>

                {/* Zone de lecture - Pleine largeur sur mobile/tablette */}
                <div className="flex-1 flex flex-col w-full lg:w-auto">
                    <div className="flex-1 bg-white relative w-full">
                        {bookUrl ? (
                            <div className="h-full w-full">
                                <ReactReader
                                    url={bookUrl}
                                    location={location}
                                    locationChanged={handleLocationChange}
                                    showToc={!isMobile}
                                    epubOptions={{ 
                                        flow: "scrolled", 
                                        spread: "none",
                                        allowScriptedContent: true,
                                        allowPopups: false
                                    }}
                                    getRendition={(rendition) => {
                                        rendition.themes.default({
                                            body: { 
                                                background: "#f9f9f9",
                                                margin: "0",
                                                padding: isMobile ? "15px" : "20px",
                                                lineHeight: "1.6",
                                                fontSize: isMobile ? "16px" : "16px",
                                                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                                                maxWidth: "100%",
                                                width: "100%"
                                            },
                                            "a, a:link, a:visited": { 
                                                color: "#3b82f6",
                                                textDecoration: "none"
                                            },
                                            "a:hover": {
                                                textDecoration: "underline"
                                            },
                                            "p": { 
                                                marginBottom: "1em" 
                                            },
                                            "h1, h2, h3, h4, h5, h6": { 
                                                marginTop: "1.5em", 
                                                marginBottom: "0.5em",
                                                fontWeight: "bold"
                                            },
                                            "img": {
                                                maxWidth: "100%",
                                                height: "auto"
                                            },
                                            "table": {
                                                width: "100%",
                                                borderCollapse: "collapse",
                                                margin: "1rem 0"
                                            },
                                            "th, td": {
                                                border: "1px solid #ddd",
                                                padding: "0.5rem",
                                                textAlign: "left"
                                            },
                                            "th": {
                                                backgroundColor: "#f8f9fa",
                                                fontWeight: "bold"
                                            }
                                        });
                                        
                                        rendition.flow("scrolled");
                                        rendition.spread("none");
                                    }}
                                />
                            </div>
                        ) : (
                            <div className="flex items-center justify-center h-full">
                                <p className="text-gray-500">Aucune version disponible dans cette langue.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
