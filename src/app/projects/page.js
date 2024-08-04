export const metadata = {
    "title": "Projects",
    "description": "These are my project works"
}
import Image from 'next/image'
import Kiwi from '@/app/public/kiwi.webp'
import Bobu from '@/app/public/bobukids.png'
import Kichata from '@/app/public/kichata.jpg'
import Sarah from '@/app/public/sarah.jpg'
import Circle from '@/app/public/circle.png'
import Chill from '@/app/public/chillfeast.png'
import Flame from '@/app/public/flamono.jpg'
import Qr from '@/app/public/freeqr.png'
import Dark from '@/app/public/dark.png'
import Volt from '@/app/public/volt.png'


import Link from 'next/link'

export default function Projects() {
    return (

        <div className="lg:p-16 p-8">
            <h1 className="text-6xl font-black uppercase">Projects</h1>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 mt-8">

                <div className="border-2 border-black rounded-md shadow-[4px_4px_0px_rgba(0,0,0,1)] p-6 flex flex-col gap-2">
                    <Image src={Kiwi} height={100} width={100} alt='Bobukids' className='w-[250px] h-[250px]  object-contain rounded-md '></Image>
                    <div className='flex justify-between items-center'>
                        <h2 className="text-4xl font-bold">Kiwihomepros</h2>
                        <a href='https://kiwihomepros.com'>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>

                        </a>

                    </div>

                    <div className=''>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsam doloribus itaque similique, nisi labore rerum. Rerum et officiis animi tempora? Libero minus dolor rerum minima facilis maxime adipisci ut?</p>
                    </div>

                    <div className='flex gap-2 items-center mt-2'>
                        <h2 className=" inline-block font-bold rounded-full border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">Wordpress</h2>
                        <h2 className=" inline-block font-bold rounded-full border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">SEO</h2>
                        <h2 className=" inline-block font-bold rounded-full border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">Plugins</h2>
                    </div>

                </div>

                <div className="border-2 border-black rounded-md shadow-[4px_4px_0px_rgba(0,0,0,1)] p-6 flex flex-col gap-2">
                    <Image src={Bobu} height={100} width={100} alt='Bobukids' className='w-[250px] h-[250px]  object-contain rounded-md '></Image>
                    <div className='flex justify-between items-center'>
                        <h2 className="text-4xl font-bold">BobuKids</h2>
                        <a href='https://bobukids.in'>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>

                        </a>

                    </div>

                    <div className=''>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsam doloribus itaque similique, nisi labore rerum. Rerum et officiis animi tempora? Libero minus dolor rerum minima facilis maxime adipisci ut?</p>
                    </div>

                    <div className='flex gap-2 items-center mt-2'>
                        <h2 className=" inline-block font-bold rounded-full border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">Wordpress</h2>
                        <h2 className=" inline-block font-bold rounded-full border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">SEO</h2>
                        <h2 className=" inline-block font-bold rounded-full border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">Plugins</h2>
                    </div>

                </div>

                <div className="border-2 border-black rounded-md shadow-[4px_4px_0px_rgba(0,0,0,1)] p-6 flex flex-col gap-2">
                    <Image src={Kichata} height={100} width={100} alt='Bobukids' className='w-[250px] h-[250px]  object-contain rounded-md '></Image>
                    <div className='flex justify-between items-center'>
                        <h2 className="text-4xl font-bold">Kichata Research</h2>
                        <a href='https://kichataresearch.com'>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>

                        </a>

                    </div>

                    <div className=''>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsam doloribus itaque similique, nisi labore rerum. Rerum et officiis animi tempora? Libero minus dolor rerum minima facilis maxime adipisci ut?</p>
                    </div>

                    <div className='flex gap-2 items-center mt-2'>
                        <h2 className=" inline-block font-bold rounded-full border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">Wordpress</h2>
                        <h2 className=" inline-block font-bold rounded-full border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">SEO</h2>
                        <h2 className=" inline-block font-bold rounded-full border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">Plugins</h2>
                    </div>

                </div>

                <div className="border-2 border-black rounded-md shadow-[4px_4px_0px_rgba(0,0,0,1)] p-6 flex flex-col gap-2">
                    <Image src={Sarah} height={100} width={100} alt='Bobukids' className='w-[250px] h-[250px]  object-contain rounded-md '></Image>
                    <div className='flex justify-between items-center'>
                        <h2 className="text-4xl font-bold">Sarahthuo</h2>
                        <a href='https://sarahthuo.com'>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>

                        </a>

                    </div>

                    <div className=''>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsam doloribus itaque similique, nisi labore rerum. Rerum et officiis animi tempora? Libero minus dolor rerum minima facilis maxime adipisci ut?</p>
                    </div>

                    <div className='flex gap-2 items-center mt-2'>
                        <h2 className=" inline-block font-bold rounded-full border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">Wordpress</h2>
                        <h2 className=" inline-block font-bold rounded-full border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">SEO</h2>
                        <h2 className=" inline-block font-bold rounded-full border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">Plugins</h2>
                    </div>

                </div>

                <div className="border-2 border-black rounded-md shadow-[4px_4px_0px_rgba(0,0,0,1)] p-6 flex flex-col gap-2">
                    <Image src={Circle} height={100} width={100} alt='Bobukids' className='w-[250px] h-[250px]  object-contain rounded-md '></Image>
                    <div className='flex justify-between items-center'>
                        <h2 className="text-4xl font-bold">Circle</h2>
                        <a href='https://circle.vercel.app'>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>

                        </a>

                    </div>

                    <div className=''>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsam doloribus itaque similique, nisi labore rerum. Rerum et officiis animi tempora? Libero minus dolor rerum minima facilis maxime adipisci ut?</p>
                    </div>

                    <div className='flex gap-2 items-center mt-2'>
                        <h2 className=" inline-block font-bold rounded-full border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">Wordpress</h2>
                        <h2 className=" inline-block font-bold rounded-full border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">SEO</h2>
                        <h2 className=" inline-block font-bold rounded-full border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">Plugins</h2>
                    </div>

                </div>

                <div className="border-2 border-black rounded-md shadow-[4px_4px_0px_rgba(0,0,0,1)] p-6 flex flex-col gap-2">
                    <Image src={Flame} height={100} width={100} alt='Bobukids' className='w-[250px] h-[250px]  object-contain rounded-md '></Image>
                    <div className='flex justify-between items-center'>
                        <h2 className="text-4xl font-bold">Flamono</h2>
                        <a href='https://flamono.glitch.me'>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>

                        </a>

                    </div>

                    <div className=''>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsam doloribus itaque similique, nisi labore rerum. Rerum et officiis animi tempora? Libero minus dolor rerum minima facilis maxime adipisci ut?</p>
                    </div>

                    <div className='flex gap-2 items-center mt-2'>
                        <h2 className=" inline-block font-bold rounded-full border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">Wordpress</h2>
                        <h2 className=" inline-block font-bold rounded-full border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">SEO</h2>
                        <h2 className=" inline-block font-bold rounded-full border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">Plugins</h2>
                    </div>

                </div>

                <div className="border-2 border-black rounded-md shadow-[4px_4px_0px_rgba(0,0,0,1)] p-6 flex flex-col gap-2">
                    <Image src={Chill} height={100} width={100} alt='Bobukids' className='w-[250px] h-[250px]  object-contain rounded-md '></Image>
                    <div className='flex justify-between items-center'>
                        <h2 className="text-4xl font-bold">Chillfeast</h2>
                        <a href='https://chillfeast.vercel.app'>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>

                        </a>

                    </div>

                    <div className=''>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsam doloribus itaque similique, nisi labore rerum. Rerum et officiis animi tempora? Libero minus dolor rerum minima facilis maxime adipisci ut?</p>
                    </div>

                    <div className='flex gap-2 items-center mt-2'>
                        <h2 className=" inline-block font-bold rounded-full border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">Wordpress</h2>
                        <h2 className=" inline-block font-bold rounded-full border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">SEO</h2>
                        <h2 className=" inline-block font-bold rounded-full border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">Plugins</h2>
                    </div>

                </div>

                <div className="border-2 border-black rounded-md shadow-[4px_4px_0px_rgba(0,0,0,1)] p-6 flex flex-col gap-2">
                    <Image src={Qr} height={100} width={100} alt='Bobukids' className='w-[250px] h-[250px]  object-contain rounded-md '></Image>
                    <div className='flex justify-between items-center'>
                        <h2 className="text-4xl font-bold">FreeQr</h2>
                        <a href='https://freeqr.glitch.me'>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>

                        </a>

                    </div>

                    <div className=''>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsam doloribus itaque similique, nisi labore rerum. Rerum et officiis animi tempora? Libero minus dolor rerum minima facilis maxime adipisci ut?</p>
                    </div>

                    <div className='flex gap-2 items-center mt-2'>
                        <h2 className=" inline-block font-bold rounded-full border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">Wordpress</h2>
                        <h2 className=" inline-block font-bold rounded-full border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">SEO</h2>
                        <h2 className=" inline-block font-bold rounded-full border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">Plugins</h2>
                    </div>

                </div>

                <div className="border-2 border-black rounded-md shadow-[4px_4px_0px_rgba(0,0,0,1)] p-6 flex flex-col gap-2">
                    <Image src={Dark} height={100} width={100} alt='Bobukids' className='w-[250px] h-[250px]  object-contain rounded-md '></Image>
                    <div className='flex justify-between items-center'>
                        <h2 className="text-4xl font-bold">DarkBox</h2>
                        <a href='https://darkbox.free.nf'>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>

                        </a>

                    </div>

                    <div className=''>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsam doloribus itaque similique, nisi labore rerum. Rerum et officiis animi tempora? Libero minus dolor rerum minima facilis maxime adipisci ut?</p>
                    </div>

                    <div className='flex gap-2 items-center mt-2'>
                        <h2 className=" inline-block font-bold rounded-full border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">Wordpress</h2>
                        <h2 className=" inline-block font-bold rounded-full border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">SEO</h2>
                        <h2 className=" inline-block font-bold rounded-full border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">Plugins</h2>
                    </div>

                </div>

                <div className="border-2 border-black rounded-md shadow-[4px_4px_0px_rgba(0,0,0,1)] p-6 flex flex-col gap-2">
                    <Image src={Volt} height={100} width={100} alt='Bobukids' className='w-[250px] h-[250px]  object-contain rounded-md '></Image>
                    <div className='flex justify-between items-center'>
                        <h2 className="text-4xl font-bold">Volt</h2>
                        <a href='https://volt.free.nf'>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>

                        </a>

                    </div>

                    <div className=''>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsam doloribus itaque similique, nisi labore rerum. Rerum et officiis animi tempora? Libero minus dolor rerum minima facilis maxime adipisci ut?</p>
                    </div>

                    <div className='flex gap-2 items-center mt-2'>
                        <h2 className=" inline-block font-bold rounded-full border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">Wordpress</h2>
                        <h2 className=" inline-block font-bold rounded-full border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">SEO</h2>
                        <h2 className=" inline-block font-bold rounded-full border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)]">Plugins</h2>
                    </div>

                </div>

            </div>
        </div>
    )
}