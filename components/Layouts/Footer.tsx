import type { NextPage } from 'next'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillHeart, AiFillTwitterCircle } from 'react-icons/ai';

const Footer: NextPage = () => {
    return (
        <>
            <footer>
                <div className='grid grid-cols-1 sm:grid-cols-2 px-6 sm:px-0'>
                    <div className='order-2 sm:order-1 flex justify-center my-2 sm:my-0 sm:justify-start items-center text-sm text-custom-black-300'>
                        Build With <AiFillHeart className='w-12 h-5 -mx-2' /> by <a href="https://github.com/yudayahya" target="_blank" rel="noopener noreferrer" className='ml-1 underline hover:text-white'>Yuda Yahya</a>
                    </div>
                    <div className='order-1 sm:order-2 flex justify-center my-2 sm:my-0 sm:justify-end items-center'>
                        <a className='text-custom-black-300 hover:text-white' href="https://github.com/yudayahya" target="_blank" rel="noopener noreferrer">
                            <AiFillGithub className='w-6 h-6' />
                        </a>
                        <div className='border-l border-custom-black-300 h-4 mx-3'></div>
                        <a className='text-custom-black-300 hover:text-white' href="https://www.linkedin.com/in/aziiza-yuda-yahya-845946141" target="_blank" rel="noopener noreferrer">
                            <AiFillLinkedin className='w-6 h-6' />
                        </a>
                        <div className='border-l border-custom-black-300 h-4 mx-3'></div>
                        <a className='text-custom-black-300 hover:text-white' href="https://www.instagram.com/yudayahya" target="_blank" rel="noopener noreferrer">
                            <AiFillInstagram className='w-6 h-6' />
                        </a>
                        <div className='border-l border-custom-black-300 h-4 mx-3'></div>
                        <a className='text-custom-black-300 hover:text-white' href="https://twitter.com/yudayahyayuda" target="_blank" rel="noopener noreferrer">
                            <AiFillTwitterCircle className='w-6 h-6' />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer