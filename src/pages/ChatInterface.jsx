import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
    ArrowLeftIcon,
    PaperAirplaneIcon,
    UserIcon,
    ChatBubbleLeftRightIcon,
    SparklesIcon
} from "@heroicons/react/24/outline";

// Données des personnages historiques
const characters = {
    "behanzin": {
        name: "Béhanzin",
        title: "Roi du Dahomey",
        avatar: "👑",
        personality: "Sage et fier roi du Dahomey, défenseur de la culture Fon",
        greeting: "Salut, jeune ami ! Je suis Béhanzin, le dernier roi du Dahomey. Je suis ravi de partager avec toi l'histoire de mon royaume et de ma résistance contre les colonisateurs français. Que souhaites-tu savoir sur moi ou sur le Dahomey ?",
        color: "from-yellow-500 to-orange-500",
        specialties: ["Histoire du Dahomey", "Culture Fon", "Résistance coloniale", "Guerriers Amazones"]
    },
    "samori-toure": {
        name: "Samori Touré",
        title: "Almamy du Wassoulou",
        avatar: "⚔️",
        personality: "Stratège militaire et résistant africain",
        greeting: "Bonjour ! Je suis Samori Touré, l'Almamy du Wassoulou. J'ai mené une résistance farouche contre les colonisateurs français pendant plus de 20 ans. Que veux-tu apprendre sur mes stratégies militaires ou l'empire Wassoulou ?",
        color: "from-green-500 to-emerald-500",
        specialties: ["Résistance africaine", "Empire Wassoulou", "Stratégie militaire"]
    }
};

export function ChatInterface() {
    const { characterId } = useParams();
    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const character = characters[characterId];

    // Vérifier si le personnage existe
    if (!character) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-brand mb-4">Personnage non trouvé</h1>
                    <button 
                        onClick={() => navigate("/chatbot")}
                        className="px-4 py-2 bg-brand text-onBrand rounded-lg hover:bg-brand/80 transition-colors"
                    >
                        Retour aux chatbots
                    </button>
                </div>
            </div>
        );
    }

    // Initialiser la conversation avec le message de bienvenue
    useEffect(() => {
        if (messages.length === 0) {
            setMessages([{
                id: 1,
                type: "character",
                content: character.greeting,
                timestamp: new Date()
            }]);
        }
    }, [character, messages.length]);

    // Auto-scroll vers le bas
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    // Focus sur l'input au chargement
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputMessage.trim() || isTyping) return;

        const userMessage = {
            id: Date.now(),
            type: "user",
            content: inputMessage.trim(),
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputMessage("");
        setIsTyping(true);

        try {
            // Appel à l'API de Béhanzin avec POST et JSON
            const question = inputMessage.trim();
            
            // console.log('Envoi de la question à l\'API:', question);
            
            // Délai minimum pour une meilleure UX (simulation de réflexion)
            const minDelay = new Promise(resolve => setTimeout(resolve, 1000));
            
            const apiCall = fetch('https://behanzin-kvsy.onrender.com/ask/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    question: question
                })
            });

            // Attendre le délai minimum ET l'appel API
            const [, response] = await Promise.all([minDelay, apiCall]);

            // console.log('Réponse API reçue:', response.status);

            if (!response.ok) {
                throw new Error(`Erreur API: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();
            // console.log('Données API:', data);
            
            // Vérifier que la réponse contient bien du contenu
            const responseText = data.answer;
            
            if (!responseText || responseText.trim() === '') {
                throw new Error('Réponse vide de l\'API');
            }
            
            // console.log('Réponse finale:', responseText);
            
            // Créer un message temporaire pour l'effet de streaming
            const messageId = Date.now() + 1;
            const tempMessage = {
                id: messageId,
                type: "character",
                content: "",
                timestamp: new Date(),
                isStreaming: true
            };
            
            // Ajouter le message temporaire
            setMessages(prev => [...prev, tempMessage]);
            
            // Effet de streaming
            await streamResponse(responseText, messageId);
        } catch (error) {
            // console.error('Erreur lors de l\'appel API:', error);
            
            // Fallback vers les réponses locales en cas d'erreur
            const fallbackResponse = generateCharacterResponse(inputMessage.trim(), character);
            
            // Créer un message temporaire pour l'effet de streaming
            const messageId = Date.now() + 1;
            const tempMessage = {
                id: messageId,
                type: "character",
                content: "",
                timestamp: new Date(),
                isStreaming: true
            };
            
            // Ajouter le message temporaire
            setMessages(prev => [...prev, tempMessage]);
            
            // Effet de streaming pour le fallback aussi
            await streamResponse(fallbackResponse, messageId);
        } finally {
            setIsTyping(false);
        }
    };

    const generateCharacterResponse = (userMessage, character) => {
        const responses = {
            "behanzin": [
                "Ah, excellente question ! Laisse-moi te raconter...",
                "Mon jeune ami, tu touches là à un point crucial de notre histoire...",
                "C'est une question que beaucoup me posent. Voici ce que je peux te dire...",
                "L'histoire du Dahomey est riche et complexe. Permets-moi de t'expliquer...",
                "Tu montres une vraie curiosité pour notre culture. Je vais te partager...",
                "C'est un aspect de notre résistance que je connais bien. Écoute...",
                "Je suis fier que tu t'intéresses à notre héritage. Laisse-moi te raconter...",
                "Excellente question ! Cela me rappelle des moments importants de notre histoire..."
            ],
            "samori-toure": [
                "Stratégie et résistance, voilà des sujets que je maîtrise bien...",
                "Tu poses une question pertinente sur nos méthodes de combat...",
                "L'art de la guerre et de la résistance, c'est mon domaine...",
                "Excellente question ! Laisse-moi te partager mon expérience...",
                "La résistance demande stratégie et courage. Voici ce que je peux te dire...",
                "Tu touches là à l'essence même de notre lutte. Écoute bien...",
                "C'est une question que j'ai souvent entendue. Permets-moi de t'expliquer...",
                "La guerre et la diplomatie, voilà ce qui a guidé mes actions..."
            ]
        };

        const randomResponse = responses[characterId]?.[Math.floor(Math.random() * responses[characterId].length)] || 
                              "C'est une question intéressante. Laisse-moi te partager ce que je sais...";

        return randomResponse + " " + generateDetailedResponse(userMessage, character);
    };

    const generateDetailedResponse = (userMessage, character) => {
        const lowerMessage = userMessage.toLowerCase();
        
        if (lowerMessage.includes("histoire") || lowerMessage.includes("passé")) {
            return "Notre histoire est riche de traditions millénaires. Le Dahomey était un royaume puissant avec une culture unique, notamment nos célèbres guerrières Amazones qui défendaient notre territoire avec une bravoure sans égale.";
        }
        
        if (lowerMessage.includes("culture") || lowerMessage.includes("tradition")) {
            return "Notre culture Fon est d'une richesse inestimable. Nos danses, nos chants, nos rituels et nos croyances constituent l'âme de notre peuple. Chaque geste, chaque parole porte en elle des siècles de sagesse.";
        }
        
        if (lowerMessage.includes("résistance") || lowerMessage.includes("combat")) {
            return "La résistance n'était pas seulement militaire, elle était aussi culturelle et spirituelle. Nous avons lutté pour préserver notre identité face à ceux qui voulaient nous assimiler. Chaque bataille était un combat pour notre liberté.";
        }
        
        if (lowerMessage.includes("famille") || lowerMessage.includes("enfants")) {
            return "La famille est au cœur de notre société. Chaque enfant est une bénédiction et reçoit l'éducation nécessaire pour devenir un membre honorable de notre communauté. L'éducation traditionnelle est essentielle.";
        }
        
        return "C'est un sujet qui me tient à cœur. Notre peuple a toujours su s'adapter et résister aux défis. Chaque génération a sa part de responsabilité dans la préservation de notre héritage.";
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('fr-FR', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    };

    // Fonction pour simuler l'effet de streaming
    const streamResponse = async (text, messageId) => {
        const words = text.split(' ');
        let currentText = '';
        
        for (let i = 0; i < words.length; i++) {
            currentText += (i > 0 ? ' ' : '') + words[i];
            
            // Mettre à jour le message avec le texte actuel
            setMessages(prev => prev.map(msg => 
                msg.id === messageId 
                    ? { ...msg, content: currentText }
                    : msg
            ));
            
            // Délai variable pour un effet plus naturel
            const delay = Math.random() * 100 + 50; // Entre 50ms et 150ms
            await new Promise(resolve => setTimeout(resolve, delay));
        }
        
        // Marquer le streaming comme terminé
        setMessages(prev => prev.map(msg => 
            msg.id === messageId 
                ? { ...msg, isStreaming: false }
                : msg
        ));
    };

    return (
        <motion.div 
            className="min-h-screen bg-bg flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Header */}
            <motion.div 
                className="sticky top-0 z-10 bg-bg/95 backdrop-blur-sm border-b border-white/10 px-4 sm:px-8 py-4"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <motion.button
                            onClick={() => navigate("/chatbot")}
                            className="p-2 hover:bg-surface rounded-lg transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ArrowLeftIcon className="w-5 h-5 text-white" />
                        </motion.button>
                        
                        <div className="flex items-center gap-3">
                            <motion.div 
                                className={`w-12 h-12 rounded-full bg-gradient-to-r ${character.color} flex items-center justify-center text-2xl`}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                {character.avatar}
                            </motion.div>
                            <div>
                                <h1 className="text-brand font-bold text-lg">{character.name}</h1>
                                <p className="text-white/70 text-sm">{character.title}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-white/60">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                            <SparklesIcon className="w-4 h-4" />
                        </motion.div>
                        <span>IA Béhanzin Active</span>
                    </div>
                </div>
            </motion.div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6">
                <div className="max-w-4xl mx-auto space-y-4">
                    <AnimatePresence>
                        {messages.map((message, index) => (
                            <motion.div
                                key={message.id}
                                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ 
                                    duration: 0.4, 
                                    delay: index * 0.1,
                                    type: "spring",
                                    damping: 20
                                }}
                            >
                                <div className={`flex gap-3 max-w-[80%] ${message.type === "user" ? "flex-row-reverse" : "flex-row"}`}>
                                    {message.type === "character" && (
                                        <motion.div 
                                            className={`w-8 h-8 rounded-full bg-gradient-to-r ${character.color} flex items-center justify-center text-sm flex-shrink-0`}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: index * 0.1 + 0.2 }}
                                        >
                                            {character.avatar}
                                        </motion.div>
                                    )}
                                    
                                    <div className={`flex flex-col ${message.type === "user" ? "items-end" : "items-start"}`}>
                                        <motion.div 
                                            className={`px-4 py-3 rounded-2xl ${
                                                message.type === "user" 
                                                    ? "bg-brand text-onBrand" 
                                                    : "bg-surface text-white border border-white/10"
                                            }`}
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <p className="text-sm leading-relaxed whitespace-pre-wrap">
                                                {message.content}
                                                {message.isStreaming && (
                                                    <motion.span 
                                                        className="inline-block w-2 h-4 bg-brand ml-1"
                                                        animate={{ opacity: [0, 1, 0] }}
                                                        transition={{ 
                                                            duration: 0.8, 
                                                            repeat: Infinity,
                                                            ease: "easeInOut"
                                                        }}
                                                    />
                                                )}
                                            </p>
                                        </motion.div>
                                        
                                        <span className="text-xs text-white/50 mt-1">
                                            {formatTime(message.timestamp)}
                                        </span>
                                    </div>
                                    
                                    {message.type === "user" && (
                                        <motion.div 
                                            className="w-8 h-8 rounded-full bg-brand/20 flex items-center justify-center text-sm flex-shrink-0"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: index * 0.1 + 0.2 }}
                                        >
                                            <UserIcon className="w-4 h-4 text-brand" />
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* Typing indicator */}
                    {isTyping && (
                        <motion.div
                            className="flex justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <div className="flex gap-3">
                                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${character.color} flex items-center justify-center text-sm`}>
                                    {character.avatar}
                                </div>
                                <div className="bg-surface text-white border border-white/10 px-4 py-3 rounded-2xl">
                                    <div className="flex gap-1">
                                        <motion.div 
                                            className="w-2 h-2 bg-white/60 rounded-full"
                                            animate={{ opacity: [0.4, 1, 0.4] }}
                                            transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                                        />
                                        <motion.div 
                                            className="w-2 h-2 bg-white/60 rounded-full"
                                            animate={{ opacity: [0.4, 1, 0.4] }}
                                            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                                        />
                                        <motion.div 
                                            className="w-2 h-2 bg-white/60 rounded-full"
                                            animate={{ opacity: [0.4, 1, 0.4] }}
                                            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                    
                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* Input */}
            <motion.div 
                className="sticky bottom-0 bg-bg/95 backdrop-blur-sm border-t border-white/10 px-4 sm:px-8 py-4"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <div className="max-w-4xl mx-auto">
                    <form onSubmit={handleSendMessage} className="flex gap-3">
                        <div className="flex-1 relative">
                            <input
                                ref={inputRef}
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                placeholder={`Posez une question à ${character.name}...`}
                                className="w-full px-4 py-3 bg-surface border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                                disabled={isTyping}
                            />
                        </div>
                        
                        <motion.button
                            type="submit"
                            disabled={!inputMessage.trim() || isTyping}
                            className="px-4 py-3 bg-brand text-onBrand rounded-full hover:bg-brand/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <PaperAirplaneIcon className="w-4 h-4" />
                            <span className="hidden sm:inline">Envoyer</span>
                        </motion.button>
                    </form>
                    
                    <p className="text-xs text-white/50 mt-2 text-center">
                        {character.name} répondra à vos questions sur {character.specialties.join(", ").toLowerCase()}
                        <br />
                        <span className="text-brand">Powered by AI - API Béhanzin</span>
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}
