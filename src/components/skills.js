"use client"
import CIcon from "@coreui/icons-react"
import * as icon from '@coreui/icons';
export default function Skills() {
    return (
        <div className="grid lg:grid-cols-10 grid-cols-1 gap-6 lg:gap-0 py-16 px-4">
            <div className="col-span-4 flex justify-center items-center">
                <h1 className="font-bold lg:text-8xl text-6xl">My Skills</h1>
            </div>
            <div className='col-span-6 grid grid-cols-3 justify-center items-center gap-4 '>

                <div className="border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded-md p-4 flex justify-center items-center flex-col gap-2">
                    <CIcon icon={icon.cibNextJs} className="h-12 w-12" />
                    <span className="font-semibold text-md">Next Js</span>
                </div>

                <div className="border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded-md p-4 flex justify-center items-center flex-col gap-2">
                    <CIcon icon={icon.cibFirebase} className="h-12 w-12" />
                    <span className="font-semibold text-md">Firebase</span>
                </div>

                <div className="border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded-md p-4 flex justify-center items-center flex-col gap-2">
                    <CIcon icon={icon.cibReact} className="h-12 w-12" />
                    <span className="font-semibold text-md">React Js</span>
                </div>
                <div className="border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded-md p-4 flex justify-center items-center flex-col gap-2">
                    <CIcon icon={icon.cibElectron} className="h-12 w-12" />
                    <span className="font-semibold text-md">Electron Js</span>
                </div>

                <div className="border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded-md p-4 flex justify-center items-center flex-col gap-2">
                    <CIcon icon={icon.cibIonic} className="h-12 w-12" />
                    <span className="font-semibold text-md">Ionic</span>
                </div>

                <div className="border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded-md p-4 flex justify-center items-center flex-col gap-2">
                    <CIcon icon={icon.cibNodeJs} className="h-12 w-12" />
                    <span className="font-semibold text-md">Node Js</span>
                </div>
                <div className="border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded-md p-4 flex justify-center items-center flex-col gap-2">
                    <CIcon icon={icon.cibPhp} className="h-12 w-12" />
                    <span className="font-semibold text-md">PHP</span>
                </div>

                <div className="border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded-md p-4 flex justify-center items-center flex-col gap-2">
                    <CIcon icon={icon.cibMysql} className="h-12 w-12" />
                    <span className="font-semibold text-md">Mysql</span>
                </div>

                <div className="border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded-md p-4 flex justify-center items-center flex-col gap-2">
                    <CIcon icon={icon.cibWordpress} className="h-12 w-12" />
                    <span className="font-semibold text-md">Wordpress</span>
                </div>
                <div className="border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded-md p-4 flex justify-center items-center flex-col gap-2">
                    <CIcon icon={icon.cibPython} className="h-12 w-12" />
                    <span className="font-semibold text-md">Python</span>
                </div>

                <div className="border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded-md p-4 flex justify-center items-center flex-col gap-2">
                    <CIcon icon={icon.cibFigma} className="h-12 w-12" />
                    <span className="font-semibold text-md">Figma</span>
                </div>

                <div className="border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded-md p-4 flex justify-center items-center flex-col gap-2">
                    <CIcon icon={icon.cibAdobePhotoshop} className="h-12 w-12" />
                    <span className="font-semibold text-md">Photoshop</span>
                </div>
            </div>
        </div>
    )
}