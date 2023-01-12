import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import LineSection from '../LineSection'

const Journey: NextPage = () => {
    const [maxWidth, setMaxWidth] = useState({ maxWidth: 'max-content' })

    const resizeWidth = () => {
        const screenWidth = window?.innerWidth
        setMaxWidth({ maxWidth: Math.round(screenWidth / 3) + 'px' })
    }

    useEffect(() => {
        if (typeof window === 'undefined') return

        window.addEventListener('resize', resizeWidth)
        resizeWidth()

        return () => window.removeEventListener('resize', resizeWidth)
    }, [])

    return (
        <>
            <section className='pt-20 px-6 w-full' id='my-journey'>
                <p className='text-center text-white text-xs uppercase tracking-widest font-bold'>i have a story</p>
                <LineSection gradientClass='gradient-second' sectionNumber='2' sectionName='My Journey' />
                <p className='text-center text-white text-6xl tracking-tighter font-bold'>Let Me Tell You About My Journey</p>
                <p className='text-center text-custom-black-300 text-lg py-6'>
                    I was born in Madiun, Indonesia. <br />
                    After <span className='text-custom-pink-600'>graduated</span> from high school, I decided to <span className='text-custom-pink-600'>study</span> in Yogyakarta, Indonesia. <br />
                    I majored in <span className='text-custom-pink-600'>informatics engineering</span>, from here my journey begins...
                </p>
                <div className='w-full flex justify-center items-center cursor-default'>
                    <div className='w-full grid grid-cols-1 py-8'>
                        <div className='line-with-gradient mx-auto relative'>
                            <div className='h-28 border-l border-custom-black-300'>
                                <div className='absolute top-24 left-6 overflow-x-scroll scrollbar-hide' style={maxWidth}>
                                    <div className='w-max'>
                                        <p className='text-white text-2xl tracking-tighter font-bold'>2015</p>
                                        <p className='text-custom-black-300 text-lg'>Start my journey to learn <span className='text-custom-pink-600'>Programming</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='h-3 w-3 rounded-full mx-auto border-2 border-custom-black-300'></div>
                        <div className='h-44 border-l border-dashed border-custom-black-300 mx-auto relative'>
                            <div className='absolute top-40 right-6 overflow-x-scroll scrollbar-hide scroll-reverse-direction' style={maxWidth}>
                                <div className='w-max'>
                                    <p className='text-white text-2xl tracking-tighter font-bold text-right'>2018</p>
                                    <p className='text-custom-black-300 text-lg text-right'>Start working as a <span className='text-custom-pink-600'>Freelancer</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='h-3 w-3 rounded-full mx-auto border-2 border-custom-black-300'></div>
                        <div className='h-44 border-l border-dashed border-custom-black-300 mx-auto relative'>
                            <div className='absolute top-40 left-6 overflow-x-scroll scrollbar-hide' style={maxWidth}>
                                <div className='w-max'>
                                    <p className='text-white text-2xl tracking-tighter font-bold'>2021</p>
                                    <p className='text-custom-black-300 text-lg'>Graduated as Bachelor of <span className='text-custom-pink-600'>Computer Science</span></p>
                                    <p className='text-custom-black-300 text-lg'>Working at <span className='text-custom-pink-600'>amalan International</span> as a <span className='text-custom-pink-600'>Backend Engineer</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='h-3 w-3 rounded-full mx-auto border-2 border-custom-black-300'></div>
                        <div className='h-44 border-l border-dashed border-custom-black-300 mx-auto relative'>
                            <div className='absolute top-40 right-6 overflow-x-scroll scrollbar-hide scroll-reverse-direction' style={maxWidth}>
                                <div className='w-max'>
                                    <p className='text-white text-2xl tracking-tighter font-bold text-right'>2022</p>
                                    <p className='text-custom-black-300 text-lg text-right'>Working at <span className='text-custom-pink-600'>amalan International</span> as a <span className='text-custom-pink-600'>Fullstack Engineer</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='h-3 w-3 rounded-full mx-auto border-2 border-custom-black-300'></div>
                        <div className='line-project-gradient mx-auto' id='projects'>
                            <div className='w-px h-64 gradient-third'></div>
                        </div>
                        <div className='flex justify-center items-center text-lg font-semibold text-custom-black-900 h-10 w-10 rounded-full mx-auto gradient-third'>3</div>
                        <p className='text-center text-3xl font-bold bg-clip-text text-transparent mt-6 tracking-tighter gradient-third'>Projects</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Journey
