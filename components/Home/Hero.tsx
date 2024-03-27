import type { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react';
import HeroBackground from './HeroBackground'

const Hero: NextPage = () => {
    const gradientPosition = useRef({
        hide: { color: '#FFFFFF' },
        show: { color: 'transparent' }
    })

    const boxShadow = useRef({
        first: '0px 0px 69px 14px rgba(92,124,255, 0.3)',
        second: '0px 0px 69px 14px rgba(237,92,255, 0.3)',
        third: '0px 0px 69px 14px rgba(255,185,92, 0.3)'
    })

    const opacity = useRef({
        none: 'opacity-0',
        full: 'opacity-100'
    })

    const [gradientFor, setGradientFor] = useState(2)
    const [firstTagLineClass, setFirstTagLineClass] = useState(gradientPosition.current.show)
    const [secondTagLineClass, setSecondTagLineClass] = useState(gradientPosition.current.hide)
    const [thirdTagLineClass, setThirdTagLineClass] = useState(gradientPosition.current.hide)
    const [buttonFirstGradient, setButtonFirstGradient] = useState(opacity.current.full)
    const [buttonSecondGradient, setButtonSecondGradient] = useState(opacity.current.none)
    const [buttonThirdGradient, setButtonThirdGradient] = useState(opacity.current.none)
    const [buttonBoxShadow, setButtonBoxShadow] = useState({ boxShadow: boxShadow.current.first })

    useEffect(() => {
        const intervalId = setInterval(() => {
            switch (gradientFor) {
                case 1:
                    setFirstTagLineClass(gradientPosition.current.show)
                    setSecondTagLineClass(gradientPosition.current.hide)
                    setThirdTagLineClass(gradientPosition.current.hide)
                    setButtonFirstGradient(opacity.current.full)
                    setButtonSecondGradient(opacity.current.none)
                    setButtonThirdGradient(opacity.current.none)
                    setButtonBoxShadow({ boxShadow: boxShadow.current.first })
                    setGradientFor(2)
                    break;

                case 2:
                    setFirstTagLineClass(gradientPosition.current.hide)
                    setSecondTagLineClass(gradientPosition.current.show)
                    setThirdTagLineClass(gradientPosition.current.hide)
                    setButtonFirstGradient(opacity.current.none)
                    setButtonSecondGradient(opacity.current.full)
                    setButtonThirdGradient(opacity.current.none)
                    setButtonBoxShadow({ boxShadow: boxShadow.current.second })
                    setGradientFor(3)
                    break;

                default:
                    setFirstTagLineClass(gradientPosition.current.hide)
                    setSecondTagLineClass(gradientPosition.current.hide)
                    setThirdTagLineClass(gradientPosition.current.show)
                    setButtonFirstGradient(opacity.current.none)
                    setButtonSecondGradient(opacity.current.none)
                    setButtonThirdGradient(opacity.current.full)
                    setButtonBoxShadow({ boxShadow: boxShadow.current.third })
                    setGradientFor(1)
                    break;
            }
        }, 2500);
        
        return () => clearInterval(intervalId);
    }, [gradientFor]);

    return (
        <>
            <div className='py-36 h-[1050px] sm:h-[950px] relative'>
                <div className='absolute top-16 mx-auto inset-x-0 flex justify-center z-0'>
                    <HeroBackground />
                </div>
                <div className='absolute z-10 mx-auto inset-x-0'>
                    <p className='text-center text-8xl sm:text-[140px] font-black tracking-tighter cursor-default select-none'>
                        <span className='transition-colors duration-[1500ms] ease-in-out bg-clip-text gradient-first' style={firstTagLineClass}>Aziiza.</span>
                    </p>
                    <p className='text-center text-8xl sm:text-[140px] font-black tracking-tighter cursor-default select-none my-2'>
                        <span className='transition-colors duration-[1500ms] ease-in-out bg-clip-text gradient-second' style={secondTagLineClass}>Yuda.</span>
                    </p>
                    <p className='text-center text-8xl sm:text-[140px] font-black tracking-tighter cursor-default select-none'>
                        <span className='transition-colors duration-[1500ms] ease-in-out bg-clip-text gradient-third' style={thirdTagLineClass}>Yahya.</span>
                    </p>
                    <div className='hidden sm:block'>
                        <div className='flex justify-center items-center mt-14 font-medium'>
                            <a href="#about-me" className='w-48 p-px mx-4 rounded-md bg-white group'>
                                <div className='rounded-md h-11 flex justify-center items-center bg-white text-custom-black-900 group-hover:bg-custom-black-900 group-hover:text-white transition-all ease-in-out duration-500'>Get Started</div>
                            </a>
                            <a className='w-48 h-[46px] mx-4 rounded-md group relative transition-shadow duration-[1500ms] ease-in-out' style={buttonBoxShadow} href="https://drive.google.com/file/d/1FUgE7iNEDBq2QEtbMR7ykyZh4puLCRMn/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <div className={'w-full h-[46px] rounded-md absolute transition-opacity duration-[1500ms] ease-in-out bg-gradient-to-br from-blue-800 to-cyan-400 ' + buttonFirstGradient}></div>
                                <div className={'w-full h-[46px] rounded-md absolute transition-opacity duration-[1500ms] ease-in-out bg-gradient-to-tr from-purple-700 to-pink-500 ' + buttonSecondGradient}></div>
                                <div className={'w-full h-[46px] rounded-md absolute transition-opacity duration-[1500ms] ease-in-out bg-gradient-to-r from-orange-700 to-yellow-400 ' + buttonThirdGradient}></div>
                                <div className={'w-[190px] h-11 rounded-md absolute top-px left-px flex justify-center items-center transition-opacity duration-[1500ms] ease-in-out bg-gradient-to-br from-blue-800 to-cyan-400 ' + buttonFirstGradient}>See My Resume</div>
                                <div className={'w-[190px] h-11 rounded-md absolute top-px left-px flex justify-center items-center transition-opacity duration-[1500ms] ease-in-out bg-gradient-to-tr from-purple-700 to-pink-500 ' + buttonSecondGradient}>See My Resume</div>
                                <div className={'w-[190px] h-11 rounded-md absolute top-px left-px flex justify-center items-center transition-opacity duration-[1500ms] ease-in-out bg-gradient-to-r from-orange-700 to-yellow-400 ' + buttonThirdGradient}>See My Resume</div>
                                <div className='w-[190px] h-11 rounded-md absolute top-px left-px flex justify-center items-center bg-custom-black-900 text-white opacity-100 group-hover:opacity-0 transition-all ease-in-out duration-500'>See My Resume</div>
                            </a>
                        </div>
                    </div>
                    <div className='block sm:hidden'>
                        <div className='flex justify-center'>
                            <div className='mt-10 font-medium text-sm w-11/12'>
                                <a href="#about-me" className='block max-w-sm p-px my-5 rounded-md bg-white mx-auto'>
                                    <div className='rounded-md h-[36px] flex justify-center items-center bg-white text-custom-black-900'>Get Started</div>
                                </a>
                                <a className='block max-w-sm h-[38px] mt-5 rounded-md relative mx-auto transition-shadow duration-[1500ms] ease-in-out' style={buttonBoxShadow} href="https://drive.google.com/file/d/1QJ04NSzYA7r2apNPhElk1nZrm-5X_Xyn/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    <div className={'w-full h-[38px] rounded-md absolute flex justify-center items-center transition-opacity duration-[1500ms] ease-in-out bg-gradient-to-br from-blue-800 to-cyan-400 ' + buttonFirstGradient}>See My Resume</div>
                                    <div className={'w-full h-[38px] rounded-md absolute flex justify-center items-center transition-opacity duration-[1500ms] ease-in-out bg-gradient-to-tr from-purple-700 to-pink-500 ' + buttonSecondGradient}>See My Resume</div>
                                    <div className={'w-full h-[38px] rounded-md absolute flex justify-center items-center transition-opacity duration-[1500ms] ease-in-out bg-gradient-to-r from-orange-700 to-yellow-400 ' + buttonThirdGradient}>See My Resume</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-20 mt-16 px-6'>
                        <p className='text-center text-custom-black-300 text-xl'>
                            Hi there!👋🏻 <br />
                            I&apos;m Aziiza Yuda Yahya, Bachelor of Computer Science, Software Engineer at amalan International Indonesia. <br />
                            🧑‍💻 I&apos;m currently working on development web and mobile apps, Full-stack. <br /> 
                            📖 I&apos;m currently learning Laravel, Codeigniter, Django, Express.js, Nest.js, Nuxt.js, Next.js, Vue.js, React.js, Svelte.js and Flutter. <br />
                            🤙🏼 I&apos;m looking to collaborate for build some huge mobile or web apps.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
