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

                <div className="col-span-4 flex lg:justify-center lg:items-center justify-start">
                    <h1 className="font-bold lg:text-8xl text-6xl">TimeLine</h1>
                </div>

                <div className='col-span-6 justify-center items-center gap-4 '>
                    <div class="resume m-10 w-full">

                    <div class="journey relative flex gap-5">
                            <div class="points flex flex-col justify-center items-center">
                                <div class="ball h-4 w-4 rounded-full bg-emerald-500"></div>
                                <div class="h-full bg-gray-500 w-1"></div>
                            </div>
                            <div class="all-dates flex flex-col gap-5 mb-20">
                                <div class="dates flex flex-col gap-2">
                                    <h4 class="text-base text-emerald-500">2024 - Present</h4>
                                    <h3 class="text-2xl font-bold">Master Degree in Computer Science<br /> <span class="text-sm text-gray-500">Bharathiar University</span></h3>
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
                                    <h4 class="text-base text-emerald-500">2024 - Present</h4>
                                    <h3 class="text-2xl font-bold">Kiwihomepros<br /> <span class="text-sm text-gray-500">USA</span></h3>
                                </div>
                                <div class="dates flex flex-col gap-5">
                                    <h3 class="text-2xl font-bold">Web Developer<br /> <span class="text-sm text-gray-500">Freelancer</span></h3>
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
                                    <h4 class="text-base text-emerald-500">2024</h4>
                                    <h3 class="text-2xl font-bold">Kiwihomepros<br /> <span class="text-sm text-gray-500">USA</span></h3>
                                </div>
                                <div class="dates flex flex-col gap-5">
                                    <h3 class="text-2xl font-bold">Web Developer<br /> <span class="text-sm text-gray-500">Freelancer</span></h3>
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
                                    <h4 class="text-base text-emerald-500">2024</h4>
                                    <h3 class="text-2xl font-bold">Kichata Research Ltd<br /> <span class="text-sm text-gray-500">Kenya</span> </h3>
                                </div>
                                <div class="dates flex flex-col gap-5">
                                    <h3 class="text-2xl font-bold">Web Developer<br /> <span class="text-sm text-gray-500">Freelancer</span></h3>
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
                                    <h4 class="text-base text-emerald-500">2023</h4>
                                    <h3 class="text-2xl font-bold">Bobukids<br /> <span class="text-sm text-gray-500">India</span> </h3>
                                </div>
                                <div class="dates flex flex-col gap-5">
                                    <h3 class="text-2xl font-bold">Web Developer<br /> <span class="text-sm text-gray-500">Freelancer</span></h3>
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
                                    <h4 class="text-base text-emerald-500">2020 - 2024</h4>
                                    <h3 class="text-2xl font-bold">Bachelor Degree in Computer Science <br /> <span class="text-sm text-gray-500">Govt Arts & Science College, Kangeyam</span></h3>
                                </div>

                            </div>

                        </div>



                    </div>
                </div>

            </div>

        </section>


    )
}