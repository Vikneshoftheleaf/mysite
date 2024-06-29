"use client"
import Link from "next/link"
import CIcon from "@coreui/icons-react"
import * as icon from '@coreui/icons';

export default function NavBar()
{
    return(
        <nav className="flex p-4 justify-between items-center border-b-2 border-black">

            <div className="rounded-md bg-yellow-200 flex justify-center items-center text-4xl font-black h-12 w-12 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                <Link href={'home'} >V</Link>
            </div>
            <div className="lg:flex hidden items-center gap-4 text-xl font-bold">
                <Link href={'home'} className="hover:underline decoration-8 decoration-yellow-500 underline-offset-4 transition-all">Home</Link>
                <Link href={'about'} className="hover:underline decoration-8 decoration-yellow-500 underline-offset-4 transition-all">About</Link>
                <Link href={'experience'} className="hover:underline decoration-8 decoration-yellow-500 underline-offset-4 transition-all">Experience</Link>
                <Link href={'projects'} className="hover:underline decoration-8 decoration-yellow-500 underline-offset-4 transition-all">Projects</Link>
            </div>
            <button className="bg-yellow-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all font-bold text-xl rounded-md px-4 py-2 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hidden lg:flex gap-2 items-center justify-center">
                Let's Talk   <CIcon icon={icon.cilSpeech} className="h-8 w-8" />

            </button>
        </nav>
    )
}