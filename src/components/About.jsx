import { ArrowRightIcon, ArrowTrendingUpIcon, CheckIcon, HeartIcon, LockClosedIcon, RocketLaunchIcon, UsersIcon, BookOpenIcon } from "@heroicons/react/24/outline"
import { useNavigate } from "react-router-dom"
import Image from '../assets/ghinel_2.jpeg'
import ImageLecteur from '../assets/lecteurs.jpeg'
import GhinelHead from '../assets/GHinel_head.jpg'

export function About(){
    const navigate = useNavigate();

    const goToLibrary = () => {
        navigate('/library');
    };
    return (
        <>
            <div id="about-section" className="flex flex-col justify-center items-center px-4 sm:px-8 md:px-20 py-[48px] gap-[64px] md:gap-[124px] min-h-screen ">
                <div className="flex flex-col items-center gap-8">
                    <p className="text-white font-bold text-[28px] md:text-[48px] leading-[48px] ">Qu'est ce que Ghinel ?</p>
                    <p className=" leading-[29px] text-[16px] md:text-[18px] text-muted text-center">
                        Dans un monde en constante évolution, la disparition progressive des trésors littéraires est un constat alarmant. 
                        Des œuvres précieuses comme Doguicimi de Paul Hazoumé ou L'esclave de Félix Couchoro se perdent dans l'ombre du temps. 
                        Ces livres ne sont pas seulement des pages reliées entre elles, mais des porteurs d'histoires, de valeurs et de cultures. 
                        Chaque livre qui disparaît est un morceau de notre héritage qui s'évapore. Cependant, au milieu de ce défi, une lueur d'espoir émerge, Ghinel. 
                        Nous croyons en la préservation de notre histoire à travers les mots et c'est pourquoi nous entendons grâce au pouvoir du numérique, préserver les œuvres littéraires pour les générations futures. 
                        Chez Ghinel, nous nous engageons à promouvoir les livres, gardiens précieux de notre histoire.
                    </p>
                </div>
                <div className="flex flex-col items-center gap-6">
                    <div className="flex flex-col lg:flex-row gap-[24px] md:gap-[48px] items-center">
                        <div className="flex flex-col gap-[33px] ">
                            <div className="flex flex-col gap-[29px]">
                                <p className="text-white font-bold text-[28px] md:text-[48px] leading-[48px] ">A chacun ses goûts !</p>
                                <p className="max-w-[554px] leading-[29px] text-[16px] md:text-[18px] text-muted">
                                    Que vous soyez fans des romans, poèmes, nouvelles ; Ou encore, vous aimez la romance, l'humour ou le drame ; Vous trouverez un livre qui correspond à vos préférences.
                                </p>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-row gap-6">
                                    <LockClosedIcon className="mt-1 w-5 h-5 text-brand" />
                                    <div className="flex flex-col gap-1">
                                        <p className="text-white font-bold text-[16px] md:text-[18px] ">Accès Illimité</p>
                                        <p className="max-w-[554px] leading-[29px] text-[14px] md:text-[16px] text-muted">
                                        Abonnez-vous pour explorer une bibliothèque riche et diversifiée.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-6">
                                    <CheckIcon className="mt-1 w-5 h-5 text-brand" />
                                    <div className="flex flex-col gap-1">
                                        <p className="text-white font-bold text-[16px] md:text-[18px] ">Découverte Culturelle</p>
                                        <p className="max-w-[554px] leading-[29px] text-[14px] md:text-[16px] text-muted">
                                            Plongez dans des contenus mettant en valeur la culture africaine.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-6">
                                    <ArrowTrendingUpIcon className="mt-1 w-5 h-5 text-brand" />
                                    <div className="flex flex-col gap-1">
                                        <p className="text-white font-bold text-[16px] md:text-[18px] ">Accès Illimité</p>
                                        <p className="max-w-[554px] leading-[29px] text-[14px] md:text-[16px] text-muted">
                                            Profitez de réductions exclusives sur les abonnements.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" p-1.5 w-full md:w-[554px] h-full border border-brand rounded-lg ">
                            <img src={ImageLecteur} alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-6">
                    <div className="flex flex-col-reverse lg:flex-row gap-[24px] md:gap-[173px] items-center">
                        <div className=" p-1.5 w-full md:w-[554px] h-full border border-yellow-500 rounded-lg ">
                            <img src={GhinelHead} alt="" />
                        </div>
                        <div className="flex flex-col gap-[33px] ">
                            <div className="flex max-w-[560px] flex-col gap-[29px]">
                                <p className="text-white font-bold text-[28px] md:text-[48px] leading-[48px] ">Publier son livre, c'est facile</p>
                                <p className="leading-[29px] text-[14px] md:text-[18px] text-muted">
                                    Vous voulez vous faire connaître en tant qu'auteur ? Ghinel vous aide à le faire gratuitement!!! A vos marques, prêts, attaquez vos plumes...
                                </p>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-row gap-6">
                                    <RocketLaunchIcon className="mt-1 w-5 h-5 text-brand" />
                                    <div className="flex flex-col gap-1">
                                        <p className="text-white font-bold text-[16px] md:text-[18px] ">Publiez Gratuitement</p>
                                        <p className="max-w-[554px] leading-[29px] text-[14px] md:text-[16px] text-muted">
                                            Diffusez vos œuvres sans frais.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-6">
                                    <ArrowTrendingUpIcon className="mt-1 w-5 h-5 text-brand" />
                                    <div className="flex flex-col gap-1">
                                        <p className="text-white py-0 font-bold text-[16px] md:text-[18px]">Monétisez Vos Œuvres</p>
                                        <p className="max-w-[554px] leading-[29px] text-[14px] md:text-[16px] text-muted">
                                            Recevez des rémunérations pour vos publications.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-6">
                                    <UsersIcon className="mt-1 w-5 h-5 text-brand" />
                                    <div className="flex flex-col gap-1">
                                        <p className="text-white font-bold text-[16px] md:text-[18px] ">Rejoignez une Communauté</p>
                                        <p className="max-w-[554px] leading-[29px] text-[14px] md:text-[16px] text-muted">
                                            Connectez-vous avec d'autres écrivains passionnés.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action - Bibliothèque */}
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="flex items-center gap-3">
                        <BookOpenIcon className="w-6 h-6 text-brand" />
                        <h3 className="text-brand font-bold text-xl">Découvrez notre bibliothèque</h3>
                    </div>
                    
                    <p className="max-w-2xl leading-relaxed text-white/80 text-sm">
                        Explorez notre collection de livres africains et découvrez des œuvres littéraires qui racontent l'histoire de notre continent.
                    </p>

                    <button
                        onClick={goToLibrary}
                        className="flex items-center gap-3 px-6 py-3 bg-brand text-onBrand rounded-full hover:bg-brand/80 transition-all duration-300 font-medium"
                    >
                        <span>Explorer la bibliothèque</span>
                        <ArrowRightIcon className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </>
    )
}