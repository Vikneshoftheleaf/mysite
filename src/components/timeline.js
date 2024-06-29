"use client"
import One from "@/app/public/one.png"
import Link from "next/link"
import Image from "next/image"
import CIcon from "@coreui/icons-react"
import * as icon from '@coreui/icons';

export default function Timeline() {
    return (
        <div className="lg:p-16 p-8 ">
            <div className="flex flex-col lg:flex-row  justify-between items-center">
                <h1 className="font-bold text-6xl mb-8">My Projects</h1>
                <Link href={'/'} className="flex gap-2 items-center justify-center text-center bg-yellow-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all font-bold text-xl rounded-full px-6 py-4 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                        Check More Projects <CIcon icon={icon.cilArrowRight} className="h-8 w-8" />
                    </Link>

            </div>

            <div className="grid lg:grid-cols-3 grid-col-1 gap-12 mt-6 lg:m-0 ">

                <div className="flex flex-col gap-2 border-2 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] rounded-md p-4">
                    <Image src={One} height={200} width={200} className="w-full border-2 border-black rounded-md" alt="Image"></Image>
                    <h1 className="text-2xl font-bold">BobuKids</h1>
                    <p className="text-lg font-semibold">June 2, 2022 - September 4, 2022</p>
                    <Link href={'/'} className="flex gap-2 items-center justify-center text-center bg-yellow-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all font-bold text-xl rounded-md px-4 py-2 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                        Visit <CIcon icon={icon.cilArrowRight} className="h-8 w-8" />
                    </Link>
                </div>
                <div className="flex flex-col gap-2 border-2 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] rounded-md p-4">
                    <Image src={One} height={200} width={200} className="w-full border-2 border-black rounded-md" alt="Image"></Image>
                    <h1 className="text-2xl font-bold">BobuKids</h1>
                    <p className="text-lg font-semibold">June 2, 2022 - September 4, 2022</p>
                    <Link href={'/'} className="flex gap-2 items-center justify-center text-center bg-yellow-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all font-bold text-xl rounded-md px-4 py-2 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                        Visit <CIcon icon={icon.cilArrowRight} className="h-8 w-8" />
                    </Link>
                </div>
                <div className="flex flex-col gap-2 border-2 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] rounded-md p-4">
                    <Image src={One} height={200} width={200} className="w-full border-2 border-black rounded-md" alt="Image"></Image>
                    <h1 className="text-2xl font-bold">BobuKids</h1>
                    <p className="text-lg font-semibold">June 2, 2022 - September 4, 2022</p>
                    <Link href={'/'} className="flex gap-2 items-center justify-center text-center bg-yellow-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all font-bold text-xl rounded-md px-4 py-2 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                        Visit <CIcon icon={icon.cilArrowRight} className="h-8 w-8" />
                    </Link>
                </div>

            </div>

        </div>

    )
}