import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
    ChatBubbleLeftRightIcon, 
    SparklesIcon,
    UserIcon,
    ArrowRightIcon,
    ShieldCheckIcon,
    ChevronDownIcon
} from "@heroicons/react/24/outline";

export function ChatbotSection() {
    const navigate = useNavigate();

    const handleChatbotClick = () => {
        navigate('/chatbot');
    };

    const chatbots = [
        {
            name: "Béhanzin",
            title: "Roi du Dahomey",
            avatar: "👑",
            description: "Découvrez l'histoire fascinante du dernier roi du Dahomey",
            status: "active",
            color: "from-yellow-500 to-orange-500"
        },
        {
            name: "Samori Touré",
            title: "Almamy du Wassoulou", 
            avatar: "⚔️",
            description: "Explorez la vie du grand résistant africain",
            status: "coming-soon",
            color: "from-green-500 to-emerald-500"
        },
        {
            name: "Reine Nzinga",
            title: "Reine du Ndongo",
            avatar: "👸",
            description: "Rencontrez la légendaire reine guerrière",
            status: "coming-soon", 
            color: "from-purple-500 to-pink-500"
        }
    ];

    return (
        <motion.section 
            className="flex flex-col justify-center items-center px-4 sm:px-8 md:px-20 py-[48px] gap-[64px] md:gap-[80px] min-h-screen"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            {/* Header */}
            <motion.div 
                className="flex flex-col items-center gap-8 text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center gap-3">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                        <SparklesIcon className="w-8 h-8 text-brand" />
                    </motion.div>
                    <h2 className="text-white font-bold text-[28px] md:text-[48px] leading-[48px]">
                        Chatbots Historiques
                    </h2>
                </div>
                
                <p className="max-w-4xl leading-[29px] text-[16px] md:text-[18px] text-muted">
                    Plongez dans l'histoire africaine à travers des conversations interactives avec des personnages historiques légendaires. 
                    Chaque chatbot a été entraîné sur des sources historiques authentiques pour vous offrir une expérience éducative et immersive unique.
                </p>
            </motion.div>

            {/* Chatbots Grid */}
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
            >
                {chatbots.map((chatbot, index) => (
                    <motion.div
                        key={chatbot.name}
                        className={`flex flex-col p-6 rounded-xl border-2 border-brand/30 bg-surface/50 backdrop-blur-sm gap-4 hover:border-brand/60 transition-all duration-300 ${
                            chatbot.status === "active" 
                                ? "hover:shadow-lg hover:shadow-brand/20 cursor-pointer" 
                                : "opacity-75 cursor-not-allowed"
                        }`}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                        viewport={{ once: true }}
                        whileHover={chatbot.status === "active" ? { 
                            scale: 1.02,
                            y: -5
                        } : {}}
                        onClick={chatbot.status === "active" ? handleChatbotClick : undefined}
                    >
                        {/* Avatar et nom */}
                        <div className="flex items-center gap-4">
                            <motion.div 
                                className={`w-16 h-16 rounded-full bg-gradient-to-r ${chatbot.color} flex items-center justify-center text-3xl`}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                {chatbot.avatar}
                            </motion.div>
                            <div className="flex-1">
                                <h3 className="text-brand font-bold text-xl">{chatbot.name}</h3>
                                <p className="text-white/70 text-sm">{chatbot.title}</p>
                                {chatbot.status === "active" && (
                                    <div className="flex items-center gap-1 mt-1">
                                        <ShieldCheckIcon className="w-4 h-4 text-green-400" />
                                        <span className="text-xs text-green-400">Disponible</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-white/80 text-sm leading-relaxed">
                            {chatbot.description}
                        </p>

                        {/* Bouton d'action */}
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
                            <div className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-surface text-white/60 rounded-lg cursor-not-allowed font-medium">
                                {/* <ChevronDownIcon className="w-4 h-4" /> */}
                                Bientôt disponible
                            </div>
                        )}
                    </motion.div>
                ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div 
                className="flex flex-col items-center gap-6 text-center"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center gap-3">
                    <UserIcon className="w-6 h-6 text-brand" />
                    <h3 className="text-brand font-bold text-xl">Comment ça marche ?</h3>
                </div>
                
                <p className="max-w-2xl leading-relaxed text-white/80 text-sm">
                    Sélectionnez un chatbot historique pour commencer une conversation interactive. 
                    Chaque personnage a été entraîné sur des sources historiques authentiques pour vous offrir 
                    une expérience éducative et immersive unique.
                </p>

                <motion.button
                    onClick={handleChatbotClick}
                    className="flex items-center gap-3 px-6 py-3 bg-brand text-onBrand rounded-full hover:bg-brand/80 transition-all duration-300 font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span>Découvrir tous les chatbots</span>
                    <ArrowRightIcon className="w-4 h-4" />
                </motion.button>
            </motion.div>
        </motion.section>
    );
}
