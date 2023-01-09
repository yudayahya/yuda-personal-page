import type { NextPage } from 'next'
import Navbar from '../Layouts/Navbar'
import AboutMe from './AboutMe'
import Hero from './Hero'
import Journey from './Journey'
import Projects from './Projects'
import Skills from './Skills'
import Tools from './Tools'

const Body: NextPage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutMe />
            <Skills />
            <Tools />
            <Journey />
            <Projects />
        </>
    )
}

export default Body
