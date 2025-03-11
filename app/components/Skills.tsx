import { FaLaravel } from 'react-icons/fa';
import { RiVuejsFill, RiFlutterFill } from 'react-icons/ri';
import { GrMysql } from 'react-icons/gr';
import {
    SiCodeigniter,
    SiDjango,
    SiExpress,
    SiNestjs,
    SiNuxtdotjs,
    SiNextdotjs,
    SiReact,
    SiPostgresql,
    SiMongodb,
    SiGooglecloud,
    SiDigitalocean,
    SiSvelte,
    SiExpo,
    SiCloudflare,
    SiTauri,
    SiElectron,
    SiNodedotjs,
    SiLumen,
    SiActix,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const skills = [
    // database
    [
        {
            name: 'MySQL',
            icon: () => <GrMysql className="w-8 h-8 sm:w-10 sm:h-10" />,
        },
        {
            name: 'MongoDB',
            icon: () => <SiMongodb className="w-8 h-8 sm:w-10 sm:h-10" />,
        },
        {
            name: 'PostgreSQL',
            icon: () => <SiPostgresql className="w-8 h-8 sm:w-10 sm:h-10" />,
        },
    ],

    // fullstack framework
    [
        {
            name: 'Laravel',
            icon: () => <FaLaravel className="w-8 h-8 sm:w-10 sm:h-10" />,
        },
        {
            name: 'CodeIgniter',
            icon: () => <SiCodeigniter className="w-8 h-8 sm:w-10 sm:h-10" />,
        },
        {
            name: 'Django',
            icon: () => <SiDjango className="w-8 h-8 sm:w-10 sm:h-10" />,
        },
        {
            name: 'Nest.js',
            icon: () => <SiNestjs className="w-8 h-8 sm:w-10 sm:h-10" />,
        },
        {
            name: 'Nuxt.js',
            icon: () => <SiNuxtdotjs className="w-8 h-8 sm:w-10 sm:h-10" />,
        },
        {
            name: 'Next.js',
            icon: () => <SiNextdotjs className="w-8 h-8 sm:w-10 sm:h-10" />,
        },
        {
            name: 'Sveltekit',
            icon: () => <SiSvelte className="w-8 h-8 sm:w-10 sm:h-10" />,
        },
    ],

    // backend framework
    [
        {
            name: 'Node.js',
            icon: () => <SiNodedotjs className="w-8 h-8 sm:w-10 sm:h-10" />,
        },
        {
            name: 'Laravel Lumen',
            icon: () => <SiLumen className="w-8 h-8 sm:w-10 sm:h-10" />,
        },
        {
            name: 'Express.js',
            icon: () => <SiExpress className="w-8 h-8 sm:w-10 sm:h-10" />,
        },
        {
            name: 'Actix',
            icon: () => <SiActix className="w-8 h-8 sm:w-10 sm:h-10" />,
        },
    ],

    // frontend framework
    [
        {
            name: 'Vue.js',
            icon: () => <RiVuejsFill className="w-8 h-8 sm:w-10 sm:h-10" />,
        },
        {
            name: 'React.js',
            icon: () => <SiReact className="w-8 h-8 sm:w-10 sm:h-10" />,
        },
        {
            name: 'Svelte',
            icon: () => <SiSvelte className="w-8 h-8 sm:w-10 sm:h-10" />,
        },
    ],

    // multiplatform framework
    [
        {
            name: 'React Native',
            icon: () => <SiReact className="w-8 h-8 sm:w-10 sm:h-10" />,
        },
        {
            name: 'Expo',
            icon: () => <SiExpo className="w-8 h-8 sm:w-10 sm:h-10" />,
        },
        {
            name: 'Electron',
            icon: () => <SiElectron className="w-8 h-8 sm:w-10 sm:h-10" />,
        },
        {
            name: 'Flutter',
            icon: () => <RiFlutterFill className="w-8 h-8 sm:w-10 sm:h-10" />,
        },
        {
            name: 'Tauri',
            icon: () => <SiTauri className="w-8 h-8 sm:w-10 sm:h-10" />,
        },
    ],

    // cloud provider
    [
        {
            name: 'Google Cloud',
            icon: () => <SiGooglecloud className="w-8 h-8 sm:w-10 sm:h-10" />,
        },
        {
            name: 'Digital Ocean',
            icon: () => <SiDigitalocean className="w-8 h-8 sm:w-10 sm:h-10" />,
        },
        {
            name: 'AWS',
            icon: () => <FaAws className="w-8 h-8 sm:w-10 sm:h-10" />,
        },
        {
            name: 'Cloudflare',
            icon: () => <SiCloudflare className="w-8 h-8 sm:w-10 sm:h-10" />,
        },
    ],
];

export default function Skills() {
    return (
        <>
            <section className="pt-20 px-6 w-full" id="skills">
                <p className="text-center text-white text-2xl tracking-tighter font-bold">My Skills</p>
                <p className="text-center text-custom-black-300 text-lg mb-6">
                    What I&apos;m <span className="text-blue-400">good</span> at
                </p>
                {skills.map((skill, idx) => (
                    <div
                        key={idx}
                        className="w-full flex gap-y-2 gap-x-2 sm:gap-x-4 justify-center items-center py-3 flex-wrap"
                    >
                        {skill.map((item, idx) => (
                            <div
                                key={idx}
                                className="text-custom-black-300 hover:text-white mx-2 sm:mx-4 cursor-pointer group relative flex justify-center items-center"
                            >
                                {item.icon()}
                                <div className="absolute -bottom-12 bg-custom-black-900 px-6 py-2 z-10 mx-auto rounded-lg border text-sm border-white/30 hidden group-hover:block">
                                    {item.name}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </section>
        </>
    );
}
