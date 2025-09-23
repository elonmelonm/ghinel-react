import { ArrowRightIcon,  } from "@heroicons/react/24/outline"
import Image from '../assets/ghinel_2.jpeg'
import { HeartIcon } from "@heroicons/react/24/solid"
export function Hero(){
    return (
        <>
            <div className="flex flex-col justify-center items-center px-4 sm:px-8 md:px-[100px] py-[40px] xl:py-[60px] gap-10 md:gap-20 lg:gap-24 min-h-screen ">
                <div className="flex flex-col items-center gap-8">
                    <div className="flex items-center text-brand bg-brand/10 text-[14px] sm:text-base text-center border border-brand rounded-full h-[30px] xl:m-6 px-4 gap-2">
                        <p>Made with</p>
                        <HeartIcon className="w-4 h-4 text-red-500" />
                        <p>by Ghinel Team</p>
                    </div>

                    <p className="text-white text-center text-3xl sm:text-4xl text-[40px] lg:text-[60px] font-bold">Explorez la richesse culturelle de <br className="hidden xl:block" /> l'Afrique en un clic.</p>
                    
                    <p className="text-muted text-center text-sm sm:text-base">
                        Bienvenu(e)s chez Ghinel, la plus grande bibliothèque numérique d'Afrique, où chaque page raconte une <br className="hidden lg:block" />     histoire, chaque mot résonne avec la voix de la jeunesse africaine. 
                        Nous sommes bien plus qu'une <br className="hidden lg:block" /> bibliothèque ; nous sommes les gardiens passionnés du patrimoine littéraire africain, dévoués à <br className="hidden lg:block" /> préserver, promouvoir et partager les trésors des plumes émergentes.

                    </p>
                    <button className="flex justify-center hover:bg-transparent hover:border-[2px] hover:border-white hover:text-white font-medium items-center w-[220px] sm:w-[245px] h-[44px] sm:h-[48px] text-base sm:text-[18px] gap-3 sm:gap-4 bg-white text-onBrand mt-5 px-4 py-2 rounded-full cursor-pointer">
                        <span>Découvrir Ghinel</span>
                        <ArrowRightIcon className="w-4 h-4" />
                    </button>
                </div>
                <img className="border-[2px] border-brand rounded-md w-full max-w-[900px]" src={Image} alt="" />
            </div>
        </>
    )
}