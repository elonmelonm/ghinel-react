import { ArrowRightIcon, ArrowTrendingUpIcon, CheckIcon, HeartIcon, LockClosedIcon, RocketLaunchIcon, UsersIcon } from "@heroicons/react/24/outline"
import Image from '../assets/ghinel_2.jpeg'
import ImageLecteur from '../assets/lecteurs.jpeg'
import GhinelHead from '../assets/GHinel_head.jpg'

export function About(){
    return (
        <>
            <div className="flex flex-col justify-center items-center px-20 py-[48px] gap-[124px] ">
                <div className="flex flex-col items-center gap-8">
                    <p className="text-white font-bold text-[48px] leading-[48px] ">Qu'est ce que Ghinel ?</p>
                    <p className="max-w-[896px] leading-[29px] text-[18px] text-[#9CA3AF] text-center">
                        Dans un monde en constante évolution, la disparition progressive des trésors littéraires est un constat alarmant. 
                        Des œuvres précieuses comme Doguicimi de Paul Hazoumé ou L'esclave de Félix Couchoro se perdent dans l'ombre du temps. 
                        Ces livres ne sont pas seulement des pages reliées entre elles, mais des porteurs d'histoires, de valeurs et de cultures. 
                        Chaque livre qui disparaît est un morceau de notre héritage qui s'évapore. Cependant, au milieu de ce défi, une lueur d'espoir émerge, Ghinel. 
                        Nous croyons en la préservation de notre histoire à travers les mots et c'est pourquoi nous entendons grâce au pouvoir du numérique, préserver les œuvres littéraires pour les générations futures. 
                        Chez Ghinel, nous nous engageons à promouvoir les livres, gardiens précieux de notre histoire.
                    </p>
                </div>
                <div className="flex flex-col items-center gap-6">
                    <div className="flex flex-row gap-[48px] items-center">
                        <div className="flex flex-col gap-[33px] ">
                            <div className="flex flex-col gap-[29px]">
                                <p className="text-white font-bold text-[48px] leading-[48px] ">A chacun ses goûts !</p>
                                <p className="max-w-[554px] leading-[29px] text-[18px] text-[#9CA3AF]">
                                    Que vous soyez fans des romans, poèmes, nouvelles ; Ou encore, vous aimez la romance, l'humour ou le drame ; Vous trouverez un livre qui correspond à vos préférences.
                                </p>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-row gap-6">
                                    <span className="w-[36px] h-[36px] bg-[#1F2937] flex justify-center items-center rounded-full">
                                        <LockClosedIcon className="w-5 h-5 text-[#FB923C]" />
                                    </span>
                                    <div className="flex flex-col">
                                        <p className="text-white font-bold text-[18px] leading-[48px] ">Accès Illimité</p>
                                        <p className="max-w-[554px] leading-[29px] text-[16px] text-[#9CA3AF]">
                                        Abonnez-vous pour explorer une bibliothèque riche et diversifiée.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-6">
                                    <span className="w-[36px] h-[36px] bg-[#1F2937] flex justify-center items-center rounded-full">
                                        <CheckIcon className="w-5 h-5 text-[#FB923C]" />
                                    </span>
                                    <div className="flex flex-col">
                                        <p className="text-white font-bold text-[18px] leading-[48px] ">Découverte Culturelle</p>
                                        <p className="max-w-[554px] leading-[29px] text-[16px] text-[#9CA3AF]">
                                            Plongez dans des contenus mettant en valeur la culture africaine.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-6">
                                    <span className="w-[36px] h-[36px] bg-[#1F2937] flex justify-center items-center rounded-full">
                                        <ArrowTrendingUpIcon className="w-5 h-5 text-[#FB923C]" />
                                    </span>
                                    <div className="flex flex-col">
                                        <p className="text-white font-bold text-[18px] leading-[48px] ">Accès Illimité</p>
                                        <p className="max-w-[554px] leading-[29px] text-[16px] text-[#9CA3AF]">
                                            Profitez de réductions exclusives sur les abonnements.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" p-1.5 w-[554px] h-full border border-yellow-500 rounded-lg ">
                            <img src={ImageLecteur} alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-6">
                    <div className="flex flex-row gap-[173px] items-center">
                        <div className=" p-1.5 w-[554px] h-full border border-yellow-500 rounded-lg ">
                            <img src={GhinelHead} alt="" />
                        </div>
                        <div className="flex flex-col gap-[33px] ">
                            <div className="flex max-w-[560px] flex-col gap-[29px]">
                                <p className="text-white font-bold text-[48px] leading-[48px] ">Publier son livre, c'est facile</p>
                                <p className="leading-[29px] text-[18px] text-[#9CA3AF]">
                                    Vous voulez vous faire connaître en tant qu'auteur ? Ghinel vous aide à le faire gratuitement!!! A vos marques, prêts, attaquez vos plumes...
                                </p>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-row gap-6">
                                    <span className="w-[36px] h-[36px] bg-[#1F2937] flex justify-center items-center rounded-full">
                                        <RocketLaunchIcon className="w-5 h-5 text-[#FB923C]" />
                                    </span>
                                    <div className="flex flex-col">
                                        <p className="text-white font-bold text-[18px] leading-[48px] ">Publiez Gratuitement</p>
                                        <p className="max-w-[554px] leading-[29px] text-[16px] text-[#9CA3AF]">
                                            Diffusez vos œuvres sans frais.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-6">
                                    <span className="w-[36px] h-[36px] bg-[#1F2937] flex justify-center items-center rounded-full">
                                        <ArrowTrendingUpIcon className="w-5 h-5 text-[#FB923C]" />
                                    </span>
                                    <div className="flex flex-col">
                                        <p className="text-white font-bold text-[18px] leading-[48px] ">Monétisez Vos Œuvres</p>
                                        <p className="max-w-[554px] leading-[29px] text-[16px] text-[#9CA3AF]">
                                            Recevez des rémunérations pour vos publications.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-6">
                                    <span className="w-[36px] h-[36px] bg-[#1F2937] flex justify-center items-center rounded-full">
                                        <UsersIcon className="w-5 h-5 text-[#FB923C]" />
                                    </span>
                                    <div className="flex flex-col">
                                        <p className="text-white font-bold text-[18px] leading-[48px] ">Rejoignez une Communauté</p>
                                        <p className="max-w-[554px] leading-[29px] text-[16px] text-[#9CA3AF]">
                                            Connectez-vous avec d'autres écrivains passionnés.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}