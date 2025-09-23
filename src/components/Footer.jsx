
export function Footer(){
    return (
    <>
        <div className="flex flex-col justify-center items-center py-[60px] px-[80px] gap-[62px] ">
            <div className="w-full flex flex-row justify-between">
                <div className="flex flex-col gap-3">
                    <p className="text-[#9CA3AF] text-[16px] font-bold leading-[29px] ">Partenariats</p>
                    <div className="flex flex-col">
                        <p className="text-[#9CA3AF] text-[16px] leading-[29px] ">Affiliates</p>
                        <p className="text-[#9CA3AF] text-[16px] leading-[29px] ">Sponsors</p>

                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-[#9CA3AF] text-[16px] font-bold leading-[29px] ">A propos</p>
                    <div className="flex flex-col">
                        <p className="text-[#9CA3AF] text-[16px] leading-[29px] ">En savoir plus</p>
                        <p className="text-[#9CA3AF] text-[16px] leading-[29px] ">Pricing</p>
                        <p className="text-[#9CA3AF] text-[16px] leading-[29px] ">Blog</p>

                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-[#9CA3AF] text-[16px] font-bold leading-[29px]  ">S'abonner à notre newsletter</p>
                    <div className="flex flex-row h-10 gap-2">
                        <input className="w-[515px] h-full p-4 border border-[#4B5563] placeholder-[#BDC1CA] rounded-lg" type="text" placeholder="Entre votre mail" />
                        <button className="bg-[#efb034] rounded-lg h-10 px-4 cursor-pointer">S'abonner</button>
                    </div>
                </div>
            </div>
            <div className="flex w-full h-[53px] justify-center border-t border-[#374151]  items-end">
                <p className="text-[#9CA3AF] text-[14px] leading-[29px] ">
                    Copyright © 2025. Tous droits reservés.
                </p>
            </div>
        </div>
    </>
)
}