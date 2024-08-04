"use client"
import Link from "next/link"
import Image from "next/image"
import One from '@/app/public/banner.jpg'
import CIcon from "@coreui/icons-react"
import * as icon from '@coreui/icons';

export default function Hero() {
    return (
        <section className="grid lg:grid-cols-10 grid-cols-1 gap-4 items-start justify-between lg:px-8 lg:py-16 px-4 py-8  border-black">

            <div className="col-span-6 flex flex-col lg:gap-4 gap-8 justify-start lg:p-4 ">
                <div className="lg:px-8 flex flex-col gap-6 text-center w-full">
                    <h1 className="lg:text-start lg:mxbas-10 font-black text-6xl lg:text-8xl lg:leading-[80px] leading-[56px]">Just a Friendly Code Enthusiast</h1>
                    <p className="font-semibold lg:text-xl text-lg lg:text-start text-center ">Creating Cool Stuff, One Line at a Time 🚀😊</p>
                </div>
                <div className="px-8 flex items-start gap-4">
                    <a href="" className="leading-[20px] bg-yellow-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all font-bold text-xl rounded-md px-4 py-2 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] flex gap-2 items-center justify-center">Get Resume <CIcon icon={icon.cilFile} className="h-8 w-8" />
                    </a>
                    <Link href={'project'} className="leading-[20px] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all font-bold text-xl rounded-md px-4 py-2 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] flex gap-2 items-center justify-center">View Projects  <CIcon icon={icon.cilArrowRight} className="h-8 w-8" />
                    </Link>

                </div>
                <div className=" lg:px-8 px-4 flex gap-12 lg:justify-start items-center mt-4">
                    <div className="flex flex-col">
                        <span className="lg:text-6xl text-4xl font-bold">5+</span>
                        <span className="lg:text-lg text-base font-bold leading-[20px] uppercase ">Years of <br />Experience</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="lg:text-6xl text-4xl font-bold">15+</span>
                        <span className="lg:text-lg text-base font-bold leading-[20px] uppercase">Projects <br />Completed</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="lg:text-6xl text-4xl font-bold">10+</span>
                        <span className="lg:text-lg text-base font-bold leading-[20px] uppercase">Clients <br />Worldwide</span>
                    </div>
                </div>

            </div>



            <div className="col-span-4 flex items-center justify-center">
                <Image src={One} width={500} height={500} alt="Images" className="m-auto"></Image>
            </div>



        </section>


    )
}