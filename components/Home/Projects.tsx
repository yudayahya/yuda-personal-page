import type { NextPage } from 'next'

const Projects: NextPage = () => {
    return (
        <>
            <section className='pb-20 px-6 w-full'>
                <p className='text-center text-white text-6xl tracking-tighter font-bold'>Projects & Portfolios</p>
                <p className='text-center text-custom-black-300 text-lg py-6'>
                    Here are some <span className='text-orange-400'>Projects</span> I have worked on and some <span className='text-orange-400'>Portfolios</span>.
                </p>
                <div className='w-full grid grid-cols-2 gap-4'>
                    <div className='w-full h-96 bg-gray-600'></div>
                    <div className='w-full h-96 bg-gray-600'></div>
                    <div className='w-full h-96 bg-gray-600'></div>
                    <div className='w-full h-96 bg-gray-600'></div>
                </div>
            </section>
        </>
    )
}
export default Projects