
import { useId, useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/24/solid"

function AccordionItem({ index, isOpen, onToggle, question, answer }){
    const buttonId = useId()
    const panelId = `${buttonId}-panel`
    return (
        <div className="border-b border-white/10">
            <h3 className="">
                <button
                    id={buttonId}
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    onClick={() => onToggle(index)}
                    className="w-full md:h-[76px] flex items-center justify-between py-4 text-left text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                    <span className="pr-6 text-[18px] md:text-[20px] font-medium">{question}</span>
                    <ChevronDownIcon
                        className={`w-5 h-5 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
                        aria-hidden="true"
                    />
                </button>
            </h3>
            <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className="pb-4 text-white/80"
            >
                <p className="text-[14px] leading-7">{answer}</p>
            </div>
        </div>
    )
}

export function Faq() {
    const [openIndex, setOpenIndex] = useState(0)
    const faqs = [
        {
            q: "Qu’est-ce que Ghinel ?",
            a: "Ghinel est un projet dédié à la préservation et à la promotion du patrimoine littéraire africain. Nous offrons une vaste collection d'œuvres littéraires qui mettent en exergue la richesse culturelle de l'Afrique.",
        },
        {
            q: "Quelle est la mission de Ghinel ?",
            a: "Notre mission est de valoriser le patrimoine littéraire, historique et culturel de l’Afrique. Nous nous engageons à assurer la pérennité des œuvres littéraires africaines et à promouvoir les voix créatives émergentes du continent.",
        },
        {
            q: "Qui peut utiliser Ghinel ?",
            a: "Ghinel est ouvert à tous les passionnés de littérature africaine, partout dans le monde. Que vous soyez un lecteur avide, un étudiant, un chercheur ou un auteur, vous trouverez des ressources précieuses sur notre plateforme.",
        },
        {
            q: "Quels types de livres puis-je trouver sur Ghinel ?",
            a: "Vous pouvez trouver une grande variété de livres numériques couvrant divers genres et thèmes, tous axés sur la culture africaine.",
        },
        {
            q: "Y a-t-il des frais pour utiliser Ghinel ?",
            a: "Les détails spécifiques concernant les frais d'utilisation de Ghinel sont disponibles sur notre site web. ",
        },
        {
            q: "Comment les auteurs peuvent-ils bénéficier de Ghinel ?",
            a: "La monétisation des auteurs sera basé sur le nombre de lectures de leurs oeuvres, ce qui leur permet de toucher un public plus large et de recevoir des revenus pour leur travail. Nous soutenons ainsi la créativité et l'innovation littéraire africaine."
        },
        {
            q: "Quelle est la vision de Ghinel pour l'avenir ?",
            a: "Notre vision est de valoriser le patrimoine littéraire, historique et culturel de l’Afrique et de promouvoir l'accessibilité universelle de ces trésors littéraires. Nous aspirons à éliminer les frontières et permettre à chacun de découvrir la richesse de notre culture à travers des œuvres littéraires uniques.",
        },
    ]

    function handleToggle(nextIndex){
        setOpenIndex((current) => (current === nextIndex ? -1 : nextIndex))
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center px-4 sm:px-8 md:px-[100px] lg:px-[172px] xl:px-[272px] py-[48px] gap-[32px] md:gap-[50px] min-h-screen ">
                <p className="max-w-[829px] text-center text-white font-bold text-[28px] md:text-[48px] leading-[38px] md:leading-[48px] ">Tout ce que vous devez savoir sur Ghinel</p>
                <div className="w-full max-w-[829px] divide-y divide-white/10">
                    {faqs.map((item, idx) => (
                        <AccordionItem
                            key={idx}
                            index={idx}
                            isOpen={openIndex === idx}
                            onToggle={handleToggle}
                            question={item.q}
                            answer={item.a}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}