import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
    ChatBubbleLeftRightIcon, 
    UserIcon, 
    SparklesIcon,
    CheckCircleIcon,
    ClockIcon
} from "@heroicons/react/24/outline";

// Données des chatbots disponibles
const chatbots = [
    {
        id: "behanzin",
        name: "Béhanzin",
        title: "Roi du Dahomey",
        description: "Découvrez l'histoire fascinante du dernier roi du Dahomey, Béhanzin, à travers des conversations interactives.",
        status: "active",
        avatar: "👑",
        specialties: ["Histoire du Dahomey", "Culture Fon", "Résistance coloniale"],
        color: "from-yellow-500 to-orange-500"
    },
    {
        id: "samori-toure",
        name: "Samori Touré",
        title: "Almamy du Wassoulou",
        description: "Explorez la vie et les conquêtes du grand résistant africain Samori Touré.",
        status: "coming-soon",
        avatar: "⚔️",
        specialties: ["Résistance africaine", "Empire Wassoulou", "Stratégie militaire"],
        color: "from-green-500 to-emerald-500"
    },
    {
        id: "queen-nzinga",
        name: "Reine Nzinga",
        title: "Reine du Ndongo et Matamba",
        description: "Rencontrez la légendaire reine guerrière qui a résisté aux Portugais pendant des décennies.",
        status: "coming-soon",
        avatar: "👸",
        specialties: ["Diplomatie", "Résistance féminine", "Royaumes Kongo"],
        color: "from-purple-500 to-pink-500"
    },
    {
        id: "sundiata-keita",
        name: "Sundiata Keïta",
        title: "Fondateur de l'Empire du Mali",
        description: "Découvrez l'épopée du fondateur de l'un des plus grands empires de l'Afrique de l'Ouest.",
        status: "coming-soon",
        avatar: "🦁",
        specialties: ["Empire du Mali", "Épopée mandingue", "Charte du Manden"],
        color: "from-blue-500 to-cyan-500"
    }
];

export function Chatbot(){
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    // Filtrer les chatbots selon le terme de recherche
    const filteredChatbots = chatbots.filter(chatbot => 
        chatbot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chatbot.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chatbot.specialties.some(specialty => 
            specialty.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const handleChatbotClick = (chatbotId) => {
        if (chatbotId === "behanzin") {
            // Navigation vers l'interface de chat pour Béhanzin
            navigate(`/chat/${chatbotId}`);
        } else {
            // Pour les autres chatbots, afficher un message ou rester sur la page
            alert("Ce chatbot sera bientôt disponible !");
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case "active":
                return <CheckCircleIcon className="w-5 h-5 text-green-400" />;
            case "coming-soon":
                return <ClockIcon className="w-5 h-5 text-yellow-400" />;
            default:
                return null;
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case "active":
                return "Disponible";
            case "coming-soon":
                return "Bientôt disponible";
            default:
                return "";
        }
    };

    return (
        <motion.div 
            className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-[100px] py-[40px] xl:py-[60px] gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="flex lg:flex-row flex-col justify-between items-center w-full h-full gap-8">
                <div className="flex flex-col gap-4">
                    <p className="w-full text-brand text-center lg:text-left text-3xl text-[28px] font-bold">
                        Nos Chatbots Historiques
                    </p>
                    <p className="text-white/80 text-center lg:text-left text-lg max-w-2xl">
                        Découvrez l'histoire africaine à travers des conversations interactives avec des personnages historiques légendaires.
                    </p>
                </div>
                <input 
                    className="min-w-[300px] h-full text-white p-4 border border-brand placeholder-placeholder rounded-full" 
                    type="text" 
                    placeholder="Rechercher un chatbot..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <AnimatePresence>
                    {filteredChatbots.map((chatbot, index) => (
                        <motion.div 
                            key={chatbot.id} 
                            className={`flex flex-col border-[2px] border-brand p-6 rounded-xl gap-4 hover:border-brand/80 transition-all duration-300 ${
                                chatbot.status === "active" 
                                    ? "hover:shadow-lg hover:shadow-brand/20 cursor-pointer" 
                                    : "opacity-75 cursor-not-allowed"
                            }`}
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -30, scale: 0.9 }}
                            transition={{ 
                                duration: 0.5, 
                                delay: index * 0.1,
                                type: "spring",
                                damping: 20
                            }}
                            whileHover={chatbot.status === "active" ? { 
                                scale: 1.02,
                                y: -5,
                                transition: { duration: 0.2 }
                            } : {}}
                            onClick={() => handleChatbotClick(chatbot.id)}
                        >
                            {/* Header avec avatar et statut */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <motion.div 
                                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${chatbot.color} flex items-center justify-center text-2xl`}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        {chatbot.avatar}
                                    </motion.div>
            <div>
                                        <h3 className="text-brand font-bold text-lg">{chatbot.name}</h3>
                                        <p className="text-white/70 text-sm">{chatbot.title}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    {getStatusIcon(chatbot.status)}
                                    <span className="text-xs text-white/60">
                                        {getStatusText(chatbot.status)}
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-white/80 text-sm leading-relaxed">
                                {chatbot.description}
                            </p>

                            {/* Spécialités */}
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <SparklesIcon className="w-4 h-4 text-brand" />
                                    <span className="text-xs text-white/60">Spécialités :</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {chatbot.specialties.map((specialty, specIndex) => (
                                        <motion.span 
                                            key={specialty}
                                            className="px-2 py-1 bg-surface rounded-lg text-xs text-white/80 border border-white/10"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ 
                                                duration: 0.3, 
                                                delay: (index * 0.1) + (specIndex * 0.05) + 0.5
                                            }}
                                        >
                                            {specialty}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            {/* Bouton d'action */}
                            <motion.div 
                                className="mt-4 pt-4 border-t border-white/10"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: (index * 0.1) + 0.8 }}
                            >
                                {chatbot.status === "active" ? (
                                    <motion.button
                                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-brand text-onBrand rounded-lg hover:bg-brand/80 transition-colors font-medium"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <ChatBubbleLeftRightIcon className="w-4 h-4" />
                                        Commencer la conversation
                                    </motion.button>
                                ) : (
                                    <motion.button
                                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-surface text-white/60 rounded-lg cursor-not-allowed font-medium"
                                        disabled
                                    >
                                        <ClockIcon className="w-4 h-4" />
                                        Bientôt disponible
                                    </motion.button>
                                )}
                            </motion.div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Message d'information */}
            <motion.div 
                className="w-full mt-12 p-6 bg-surface rounded-xl border border-brand/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
            >
                <div className="flex items-center gap-3 mb-3">
                    <UserIcon className="w-6 h-6 text-brand" />
                    <h3 className="text-brand font-bold text-lg">Comment ça marche ?</h3>
            </div>   
                <p className="text-white/80 text-sm leading-relaxed">
                    Sélectionnez un chatbot historique pour commencer une conversation interactive. 
                    Chaque personnage a été entraîné sur des sources historiques authentiques pour vous offrir 
                    une expérience éducative et immersive unique.
                </p>
            </motion.div>

            <motion.div 
                className="w-full mt-8 border-b border-white/20"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
            />
        </motion.div>
    );
}