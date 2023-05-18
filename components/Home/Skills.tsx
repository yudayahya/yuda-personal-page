import type { NextPage } from 'next'
import { FaLaravel } from 'react-icons/fa'
import { RiVuejsFill, RiFlutterFill } from 'react-icons/ri'
import { GrMysql } from 'react-icons/gr'
import { SiCodeigniter, SiDjango, SiExpress, SiNestjs, SiNuxtdotjs, SiNextdotjs, SiReact, SiPostgresql, SiMongodb, SiGooglecloud, SiAmazonaws, SiDigitalocean, SiSvelte } from 'react-icons/si'

const Skills: NextPage = () => {
    return (
        <>
            <section className='pt-20 px-6 w-full' id='skills'>
                <p className='text-center text-white text-2xl tracking-tighter font-bold'>My Skills</p>
                <p className='text-center text-custom-black-300 text-lg mb-6'>What I&apos;m <span className='text-blue-400'>good</span> at</p>
                <div className='w-full flex justify-center items-center py-3'>
                    <div className='text-custom-black-300 hover:text-white mx-2 sm:mx-4 cursor-pointer group relative flex justify-center items-center'>
                        <GrMysql className='w-8 h-8 sm:w-10 sm:h-10' />
                        <div className='absolute -bottom-12 bg-custom-black-900 px-6 py-2 z-10 mx-auto rounded-lg border text-sm border-white border-opacity-30 hidden group-hover:block'>
                            MySQL
                        </div>
                    </div>
                    <div className='text-custom-black-300 hover:text-white mx-2 sm:mx-4 cursor-pointer group relative flex justify-center items-center'>
                        <SiPostgresql className='w-8 h-8 sm:w-10 sm:h-10' />
                        <div className='absolute -bottom-12 bg-custom-black-900 px-6 py-2 z-10 mx-auto rounded-lg border text-sm border-white border-opacity-30 hidden group-hover:block'>
                            PostgreSQL
                        </div>
                    </div>
                    <div className='text-custom-black-300 hover:text-white mx-2 sm:mx-4 cursor-pointer group relative flex justify-center items-center'>
                        <SiMongodb className='w-8 h-8 sm:w-10 sm:h-10' />
                        <div className='absolute -bottom-12 bg-custom-black-900 px-6 py-2 z-10 mx-auto rounded-lg border text-sm border-white border-opacity-30 hidden group-hover:block'>
                            MongoDB
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center py-3'>
                    <div className='text-custom-black-300 hover:text-white mx-2 sm:mx-4 cursor-pointer group relative flex justify-center items-center'>
                        <FaLaravel className='w-8 h-8 sm:w-10 sm:h-10' />
                        <div className='absolute -bottom-12 bg-custom-black-900 px-6 py-2 z-10 mx-auto rounded-lg border text-sm border-white border-opacity-30 hidden group-hover:block'>
                            Laravel
                        </div>
                    </div>
                    <div className='text-custom-black-300 hover:text-white mx-2 sm:mx-4 cursor-pointer group relative flex justify-center items-center'>
                        <SiCodeigniter className='w-8 h-8 sm:w-10 sm:h-10' />
                        <div className='absolute -bottom-12 bg-custom-black-900 px-6 py-2 z-10 mx-auto rounded-lg border text-sm border-white border-opacity-30 hidden group-hover:block'>
                            Codeigniter
                        </div>
                    </div>
                    <div className='text-custom-black-300 hover:text-white mx-2 sm:mx-4 cursor-pointer group relative flex justify-center items-center'>
                        <SiDjango className='w-8 h-8 sm:w-10 sm:h-10' />
                        <div className='absolute -bottom-12 bg-custom-black-900 px-6 py-2 z-10 mx-auto rounded-lg border text-sm border-white border-opacity-30 hidden group-hover:block'>
                            Django
                        </div>
                    </div>
                    <div className='text-custom-black-300 hover:text-white mx-2 sm:mx-4 cursor-pointer group relative flex justify-center items-center'>
                        <SiExpress className='w-8 h-8 sm:w-10 sm:h-10' />
                        <div className='absolute -bottom-12 bg-custom-black-900 px-6 py-2 z-10 mx-auto rounded-lg border text-sm border-white border-opacity-30 hidden group-hover:block'>
                            Express.js
                        </div>
                    </div>
                    <div className='text-custom-black-300 hover:text-white mx-2 sm:mx-4 cursor-pointer group relative flex justify-center items-center'>
                        <SiNestjs className='w-8 h-8 sm:w-10 sm:h-10' />
                        <div className='absolute -bottom-12 bg-custom-black-900 px-6 py-2 z-10 mx-auto rounded-lg border text-sm border-white border-opacity-30 hidden group-hover:block'>
                            Nest.js
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center py-3'>
                    <div className='text-custom-black-300 hover:text-white mx-2 sm:mx-4 cursor-pointer group relative flex justify-center items-center'>
                        <SiNuxtdotjs className='w-8 h-8 sm:w-10 sm:h-10' />
                        <div className='absolute -bottom-12 bg-custom-black-900 px-6 py-2 z-10 mx-auto rounded-lg border text-sm border-white border-opacity-30 hidden group-hover:block'>
                            Nuxt.js
                        </div>
                    </div>
                    <div className='text-custom-black-300 hover:text-white mx-2 sm:mx-4 cursor-pointer group relative flex justify-center items-center'>
                        <SiNextdotjs className='w-8 h-8 sm:w-10 sm:h-10' />
                        <div className='absolute -bottom-12 bg-custom-black-900 px-6 py-2 z-10 mx-auto rounded-lg border text-sm border-white border-opacity-30 hidden group-hover:block'>
                            Next.js
                        </div>
                    </div>
                    <div className='text-custom-black-300 hover:text-white mx-2 sm:mx-4 cursor-pointer group relative flex justify-center items-center'>
                        <RiVuejsFill className='w-8 h-8 sm:w-10 sm:h-10' />
                        <div className='absolute -bottom-12 bg-custom-black-900 px-6 py-2 z-10 mx-auto rounded-lg border text-sm border-white border-opacity-30 hidden group-hover:block'>
                            Vue.js
                        </div>
                    </div>
                    <div className='text-custom-black-300 hover:text-white mx-2 sm:mx-4 cursor-pointer group relative flex justify-center items-center'>
                        <SiReact className='w-8 h-8 sm:w-10 sm:h-10' />
                        <div className='absolute -bottom-12 bg-custom-black-900 px-6 py-2 z-10 mx-auto rounded-lg border text-sm border-white border-opacity-30 hidden group-hover:block'>
                            React.js
                        </div>
                    </div>
                    <div className='text-custom-black-300 hover:text-white mx-2 sm:mx-4 cursor-pointer group relative flex justify-center items-center'>
                        <SiSvelte className='w-8 h-8 sm:w-10 sm:h-10' />
                        <div className='absolute -bottom-12 bg-custom-black-900 px-6 py-2 z-10 mx-auto rounded-lg border text-sm border-white border-opacity-30 hidden group-hover:block'>
                            Svelte.js
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center py-3'>
                    <div className='text-custom-black-300 hover:text-white mx-2 sm:mx-4 cursor-pointer group relative flex justify-center items-center'>
                        <RiFlutterFill className='w-8 h-8 sm:w-10 sm:h-10' />
                        <div className='absolute -bottom-12 bg-custom-black-900 px-6 py-2 z-10 mx-auto rounded-lg border text-sm border-white border-opacity-30 hidden group-hover:block'>
                            Flutter
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center py-3'>
                    <div className='text-custom-black-300 hover:text-white mx-2 sm:mx-4 cursor-pointer group relative flex justify-center items-center'>
                        <SiAmazonaws className='w-8 h-8 sm:w-10 sm:h-10' />
                        <div className='absolute -bottom-12 bg-custom-black-900 px-6 py-2 z-10 mx-auto rounded-lg border text-sm border-white border-opacity-30 hidden group-hover:block'>
                            AWS
                        </div>
                    </div>
                    <div className='text-custom-black-300 hover:text-white mx-2 sm:mx-4 cursor-pointer group relative flex justify-center items-center'>
                        <SiGooglecloud className='w-8 h-8 sm:w-10 sm:h-10' />
                        <div className='absolute -bottom-12 bg-custom-black-900 px-6 py-2 z-10 mx-auto rounded-lg border text-sm border-white border-opacity-30 hidden group-hover:block'>
                            GoogleCloud
                        </div>
                    </div>
                    <div className='text-custom-black-300 hover:text-white mx-2 sm:mx-4 cursor-pointer group relative flex justify-center items-center'>
                        <SiDigitalocean className='w-8 h-8 sm:w-10 sm:h-10' />
                        <div className='absolute -bottom-12 bg-custom-black-900 px-6 py-2 z-10 mx-auto rounded-lg border text-sm border-white border-opacity-30 hidden group-hover:block'>
                            DigitalOcean
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Skills