import type { NextPage } from 'next'
import Head from 'next/head'
import Body from '../components/Home/Body'
import Footer from '../components/Layouts/Footer'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Yuda Yahya | Software Engineer</title>
                <meta name="description" content="Aziiza Yuda Yahya Personal Site" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='w-full min-h-screen bg-custom-black-900'>
                <div className='w-full sm:w-5/6 sm:mx-auto'>
                    <Body />
                </div>
            </div>
            <div className='w-full bg-custom-black-600 pb-10 pt-8 border-t border-gray-700'>
                <div className='w-full sm:w-5/6 sm:mx-auto'>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Home