import { Component404 } from "../components/Component404";
import { LanguageIcon, EyeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { books, getLanguageName } from "../data/books.js";

export function Library(){
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    // Filtrer les livres selon le terme de recherche
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleBookClick = (bookId) => {
        navigate(`/book/${bookId}`);
    };

    return (
    <>
        <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-[100px] py-[40px] xl:py-[60px] gap-8">
            <div className="flex lg:flex-row flex-col justify-between items-center w-full h-full gap-8">
                <p className="w-full text-brand text-center lg:text-left text-3xl text-[28px] font-bold">Notre bibliothèque</p>
                <input 
                    className="min-w-[300px] h-full text-white p-4 border border-brand placeholder-placeholder rounded-full" 
                    type="text" 
                    placeholder="Rechercher par titre, auteur..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredBooks.map((book) => (
                    <div key={book.id} className="flex flex-col border-[2px] border-brand p-1.5 rounded-xl gap-4 hover:border-brand/80 transition-colors">
                        <div className="relative group">
                            <img src={book.cover} alt={book.title} className="w-full h-full rounded-lg object-cover" />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                                <button
                                    onClick={() => handleBookClick(book.id)}
                                    className="flex items-center gap-2 px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand/80 transition-colors"
                                >
                                    <EyeIcon className="w-4 h-4" />
                                    Voir les détails
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col border-b border-surface pb-5 gap-4">
                            <div className="flex flex-col gap-1">
                                <p className="w-full min-h-4 text-brand font-bold text-[18px]">{book.title}</p>
                                <p className="w-full min-h-4 text-white text-[14px]">par {book.author}</p>
                            </div>
                            
                            <p className="w-full min-h-4 text-white text-[12px]">
                                {book.description.length > 100 
                                    ? `${book.description.substring(0, 100)}...` 
                                    : book.description
                                }
                            </p>
                        </div>
                        <div className="flex flex-col text-white gap-4">
                            <div className="flex flex-row gap-2">
                                <LanguageIcon className="w-5 h-5" />
                                <p className="text-[13px]">Langues disponibles :</p>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                {Object.keys(book.languages).map((langCode) => (
                                    <button 
                                        key={langCode}
                                        className="px-2 h-10 border border-brand rounded-lg cursor-pointer text-[12px] hover:bg-brand/10 transition-colors"
                                        onClick={() => handleBookClick(book.id)}
                                    >
                                        {getLanguageName(langCode)}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full mt-12 border-b border-white"></div> 
        </div>
    </>
)
}