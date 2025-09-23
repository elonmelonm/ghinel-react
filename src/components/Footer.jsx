
import { NavLink } from "react-router-dom"

export function Footer(){
    return (
    <>
        <div className="flex flex-col justify-center items-center py-[60px] px-4 sm:px-8 md:px-[80px] gap-[40px] md:gap-[62px] ">
            <div className="w-full flex flex-col xl:flex-row justify-betwee gap-8 md:gap-8">
                <div className="flex-1 grid grid-cols-2 lg:grid-cols- gap-3">
                    <div className="flex flex-col gap-3">
                        <p className="text-muted text-[16px] font-bold leading-[29px] ">Partenariats</p>
                        <div className="flex flex-col">
                            <NavLink to="/affiliates" className={({isActive})=>`text-[16px] leading-[29px] ${isActive ? 'text-brand' : 'text-muted'}`}>Affiliates</NavLink>
                            <NavLink to="/sponsors" className={({isActive})=>`text-[16px] leading-[29px] ${isActive ? 'text-brand' : 'text-muted'}`}>Sponsors</NavLink>

                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-muted text-[16px] font-bold leading-[29px] ">A propos</p>
                        <div className="flex flex-col">
                            <NavLink to="/about" className={({isActive})=>`text-[16px] leading-[29px] ${isActive ? 'text-brand' : 'text-muted'}`}>En savoir plus</NavLink>
                            <NavLink to="/pricing" className={({isActive})=>`text-[16px] leading-[29px] ${isActive ? 'text-brand' : 'text-muted'}`}>Pricing</NavLink>
                            <NavLink to="/blog" className={({isActive})=>`text-[16px] leading-[29px] ${isActive ? 'text-brand' : 'text-muted'}`}>Blog</NavLink>

                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col gap-3">
                    <p className="text-muted text-[16px] font-bold leading-[29px]  ">S'abonner à notre newsletter</p>
                    <div className="flex flex-row h-10 gap-2">
                        <input className="w-full lg:min-w-[515px] h-full text-white p-4 border border-[var(--color-border-muted)] placeholder-[var(--color-placeholder)] rounded-full" type="text" placeholder="Entre votre mail" />
                        <button className="bg-brand rounded-full hover:border hover:border-brand hover:bg-transparent hover:text-brand h-10 px-4 cursor-pointer">S'abonner</button>
                    </div>
                </div>
            </div>
            <div className="flex w-full h-[53px] justify-center border-t border-[var(--color-border-strong)]  items-end">
                <p className="text-muted text-[14px] leading-[29px] ">
                    Copyright © 2025. Tous droits reservés.
                </p>
            </div>
        </div>
    </>
)
}