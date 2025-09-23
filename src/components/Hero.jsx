import { ArrowRightIcon, HeartIcon } from "@heroicons/react/24/outline"
import Image from '../assets/ghinel_2.jpeg'
export function Hero(){
    return (
        <>
            <div className="flex flex-col justify-center items-center px-[147px] py-[48px] gap-20 ">
                <div className="flex flex-col items-center gap-6">
                    <div className="flex items-center text-[#9CA3AF] text-center border border-[#374151] rounded-full h-[30px] px-4 gap-2">
                        <p>Made with</p>
                        <HeartIcon className="w-4 h-4 text-red-500" />
                        <p>by Ghinel Team</p>
                    </div>

                    <p className="text-white text-center text-[60px] font-bold">Explorez la richesse culturelle de <br /> l'Afrique en un clic.</p>
                    
                    <p className="text-[#9CA3AF] text-center">
                        Bienvenu(e)s chez Ghinel, la plus grande bibliothèque numérique d'Afrique, où chaque page raconte une <br />     histoire, chaque mot résonne avec la voix de la jeunesse africaine. 
                        Nous sommes bien plus qu'une <br /> bibliothèque ; nous sommes les gardiens passionnés du patrimoine littéraire africain, dévoués à <br /> préserver, promouvoir et partager les trésors des plumes émergentes.

                    </p>
                    <button className="flex justify-center font-medium items-center w-[245px] h-[48px] text-[18px] gap-2 bg-white text-black px-4 py-2 rounded-full">
                        <span>Découvrir Ghinel</span>
                        <ArrowRightIcon className="w-4 h-4" />
                    </button>
                </div>
                <img className="border border-[2px] border-yellow-500 rounded-md" src={Image} alt="" />
            </div>
        </>
    )
}