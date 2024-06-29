"use client"
import Link from "next/link"
import Image from "next/image"
import One from '@/app/public/three.png'
import CIcon from "@coreui/icons-react"
import * as icon from '@coreui/icons';

export default function Hero() {
    return (
        <section className="grid lg:grid-cols-10 grid-cols-1 gap-4 justify-between lg:px-8 lg:py-16 px-4 py-8  border-black">

            <div className="col-span-6 flex flex-col gap-4 justify-center items-center ">
                <div className="flex flex-col gap-4 text-center w-full">
                    <h1 className="font-black text-6xl lg:text-8xl lg:leading-[80px] leading-[56px]">Just a Friendly Code Enthusiast</h1>
                    <p className="font-semibold lg:text-xl text-lg ">Creating Cool Stuff, One Line at a Time 🚀😊</p>
                </div>
                <div className="flex gap-4">
                    <a href="" className="leading-[20px] bg-yellow-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all font-bold text-xl rounded-md px-4 py-2 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] flex gap-2 items-center justify-center">Get Resume <CIcon icon={icon.cilFile} className="h-8 w-8" />
</a>
                    <Link href={'project'} className="leading-[20px] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all font-bold text-xl rounded-md px-4 py-2 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] flex gap-2 items-center justify-center">View Projects  <CIcon icon={icon.cilArrowRight} className="h-8 w-8" />
</Link>
                </div>

            </div>
            <div className="col-span-4 w-full flex items-center justify-center">
                <Image src={One} width={560} height={560} alt="Images"></Image>
            </div>
        </section>
    )
}