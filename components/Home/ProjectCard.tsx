import type { NextPage } from 'next'
import Image from 'next/image'

interface CardProps {
    imageSource: string
    imageAlt: string
    title: string
    description: string
    github: string
    preview: string
    stacks: string[]
}

const ProjectCard: NextPage<CardProps> = (props) => {
    return (
        <>
            <div className='w-full bg-custom-black-900 rounded-lg border-2 border-custom-gray-600 px-6 pt-6 pb-48 relative'>
                <div className='w-full h-80 rounded-lg overflow-hidden relative'>
                    <Image
                        src={props.imageSource}
                        alt={props.imageAlt}
                        fill
                        priority={true}
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className='w-full pt-6'>
                    <p className='text-white text-2xl font-bold'>{props.title}</p>
                    <p className='text-custom-black-300 text-sm mt-1'>{props.description}</p>
                </div>
                <div className='absolute bottom-0 inset-x-0 px-6 pb-6'>
                    <p className='text-center text-custom-black-300 text-base'>
                        {
                            props.stacks.map((stack, index) => {
                                const separator = index === 0 ? '' : ' - '
                                return <span className='text-blue-400' key={index}>{separator}{stack}</span>
                            })
                        }
                    </p>
                    <div className='w-full mt-8 grid grid-cols-2 gap-x-4'>
                        <a href={props.github} target='_blank' rel='noreferrer' className='block w-full py-3 text-center text-sm font-medium text-custom-black-900 rounded-lg bg-white border border-white hover:bg-custom-black-900 hover:text-white transition-all ease-in-out duration-500'>Github</a>
                        <a href={props.preview} target='_blank' rel='noreferrer' className='block w-full py-3 text-center text-sm font-medium text-white rounded-lg bg-custom-black-900 border border-white hover:bg-white hover:text-custom-black-900 transition-all ease-in-out duration-500'>Preview</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProjectCard