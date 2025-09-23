import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeftIcon, LanguageIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import { getBook, getLanguageName } from "../data/books.js";
import { motion } from "framer-motion";

export function BookDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    useEffect(() => {
        const bookData = getBook(parseInt(id));
        if (bookData) {
            setBook(bookData);
            // Sélectionner la première langue disponible par défaut
            const firstLanguage = Object.keys(bookData.languages)[0];
            setSelectedLanguage(firstLanguage);
        }
    }, [id]);

    const handleLanguageSelect = (langCode) => {
        setSelectedLanguage(langCode);
    };

    const handleReadBook = () => {
        if (selectedLanguage && book) {
            navigate(`/reader/${book.id}?lang=${selectedLanguage}`);
        }
    };

    if (!book) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-white text-center">
                    <h2 className="text-2xl font-bold mb-4">Livre non trouvé</h2>
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


    return (
        <motion.div 
            className="min-h-screen bg-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Header avec bouton retour */}
            <motion.div 
                className="flex items-center justify-between p-4 sm:p-6 md:p-8"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <motion.button 
                    onClick={() => navigate('/library')}
                    className="flex items-center gap-2 text-brand hover:text-brand/80 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <ArrowLeftIcon className="w-5 h-5" />
                    <span>Retour à la bibliothèque</span>
                </motion.button>
            </motion.div>

            <motion.div 
                className="px-4 sm:px-6 md:px-8 pb-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Image de couverture */}
                        <motion.div 
                            className="flex justify-center lg:justify-start"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <motion.img 
                                src={book.cover} 
                                alt={book.title}
                                className="w-full max-w-md h-auto rounded-lg shadow-lg"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>

                        {/* Informations du livre */}
                        <div className="flex flex-col gap-6">
                            <div>
                                <h1 className="text-3xl lg:text-4xl font-bold text-brand mb-2">
                                    {book.title}
                                </h1>
                                <p className="text-xl text-white mb-4">
                                    par {book.author}
                                </p>
                            </div>

                            {/* Description */}
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
                                <p className="text-white leading-relaxed">
                                    {book.description}
                                </p>
                            </div>

                            {/* Langues disponibles */}
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <LanguageIcon className="w-5 h-5 text-brand" />
                                    <h3 className="text-lg font-semibold text-white">Langues disponibles</h3>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {Object.keys(book.languages).map((langCode) => (
                                        <button
                                            key={langCode}
                                            onClick={() => handleLanguageSelect(langCode)}
                                            className={`px-4 py-3 rounded-lg border-2 transition-all ${
                                                selectedLanguage === langCode
                                                    ? 'border-brand bg-brand/10 text-brand'
                                                    : 'border-surface text-white hover:border-brand hover:text-brand'
                                            }`}
                                        >
                                            {getLanguageName(langCode)}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Bouton de lecture */}
                            <div className="pt-4">
                                <button
                                    onClick={handleReadBook}
                                    disabled={!selectedLanguage}
                                    className="flex items-center gap-3 px-6 py-4 bg-brand text-white rounded-lg hover:bg-brand/80 disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors font-semibold text-lg"
                                >
                                    <BookOpenIcon className="w-6 h-6" />
                                    Lire le livre en ligne
                                </button>
                                <p className="text-sm text-gray-400 mt-2">
                                    Le livre s'ouvrira dans un lecteur intégré sur cette page
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
