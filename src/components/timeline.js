"use client"
import One from "@/app/public/one.png"
import Link from "next/link"
import Image from "next/image"
import CIcon from "@coreui/icons-react"
import * as icon from '@coreui/icons';

export default function Timeline() {
    return (

        <section>
            <div className="grid lg:grid-cols-10 grid-cols-1 gap-6 lg:gap-0 py-16 px-4 ">

                <div className="col-span-4 flex justify-center items-center">
                    <h1 className="font-bold lg:text-8xl text-6xl">TimeLine</h1>
                </div>

                <div className='col-span-6 justify-center items-center gap-4 '>
                    <div class="resume m-10 w-full">
                        <div class="pill inline-block mb-10">
                            <h2 class="text-xs border border-gray-500 rounded-full py-1 px-2 ">RESUME</h2>
                        </div>

                        <div class="resume-head mb-10">
                            <h3 class="text-3xl font-bold">Education &amp; <span class="text-emerald-500">Experience</span></h3>
                        </div>

                        <div class="journey relative flex gap-5">
                            <div class="points flex flex-col justify-center items-center">
                                <div class="ball h-4 w-4 rounded-full bg-emerald-500"></div>
                                <div class="h-full bg-gray-500 w-1"></div>
                            </div>
                            <div class="all-dates flex flex-col gap-5 mb-20">
                                <div class="dates flex flex-col gap-2">
                                    <h4 class="text-base text-emerald-500">2020 - Present</h4>
                                    <h3 class="text-2xl font-bold">Framer Designer &amp; Developer <br /> <span class="text-sm text-gray-500">Brundee Agency</span></h3>
                                </div>
                                <div class="dates flex flex-col gap-5">
                                    <h3 class="text-2xl font-bold">Front-End Wordpress Developer <br /> <span class="text-sm text-gray-500">Envato Market</span></h3>
                                </div>

                            </div>


                        </div>

                        <div class="journey relative flex gap-5">
                            <div class="points flex flex-col justify-center items-center">
                                <div class="ball h-4 w-4 rounded-full bg-emerald-500"></div>
                                <div class="h-full bg-gray-500 w-1"></div>
                            </div>
                            <div class="all-dates flex flex-col gap-5 mb-20">
                                <div class="dates flex flex-col gap-2">
                                    <h4 class="text-base text-emerald-500">2013 - 2019</h4>
                                    <h3 class="text-2xl font-bold">Webflow Developer &amp; Co-Founder <br /> <span class="text-sm text-gray-500">Designing Studio</span></h3>
                                </div>
                                <div class="dates flex flex-col gap-5">
                                    <h3 class="text-2xl font-bold">Web Designer<br /> <span class="text-sm text-gray-500">Freelancer</span></h3>
                                </div>
                                <div class="dates flex flex-col gap-5">
                                    <h3 class="text-2xl font-bold">Leader Team of Marketing <br /> <span class="text-sm text-gray-500">AMA Marketing Agency</span></h3>
                                </div>

                            </div>

                        </div>

                        <div class="journey relative flex gap-5 mb-32">
                            <div class="points flex flex-col justify-center items-center">
                                <div class="ball h-4 w-4 rounded-full bg-emerald-500"></div>
                                <div class="h-full bg-gray-500 w-1"></div>
                            </div>
                            <div class="all-dates flex flex-col gap-5">
                                <div class="dates flex flex-col gap-2">
                                    <h4 class="text-base text-emerald-500">2020 - 2013</h4>
                                    <h3 class="text-2xl font-bold">Bachelor Degree of information Technology <br /> <span class="text-sm text-gray-500">US RMIT University</span></h3>
                                </div>

                            </div>

                        </div>



                    </div>
                </div>

            </div>

        </section>


    )
}