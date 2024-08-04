"use client"

import CIcon from "@coreui/icons-react"
import * as icon from '@coreui/icons';
import Link from "next/link"
export default function Footer() {
    return (
        <footer className="bg-black w-full px-16 py-8 mt-16 text-white flex justify-between items-center">
            <h1 className="font-semibold text-lg">
                Built with Passion.
            </h1>
            <div>
                <Link href={'/'} className=""><CIcon className="h-12 w-12" icon={icon.cibGithub}/></Link>
            </div>
        </footer>
    )
}