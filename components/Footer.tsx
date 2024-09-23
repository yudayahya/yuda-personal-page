import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillHeart, AiFillTwitterCircle } from 'react-icons/ai';
import ExtLinkButton from './Buttons/ExtLinkButton';

export default function Footer() {
    return (
        <>
            <footer>
                <div className="grid grid-cols-1 sm:grid-cols-2 px-6 sm:px-0">
                    <div className="order-2 sm:order-1 flex justify-center my-2 sm:my-0 sm:justify-start items-center text-sm text-custom-black-300">
                        Inspired by{' '}
                        <a
                            href="https://vercel.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mx-1 underline hover:text-white"
                        >
                            Vercel{' '}
                        </a>{' '}
                        Built With <AiFillHeart className="w-12 h-5 -mx-2" /> by{' '}
                        <a
                            href="https://github.com/yudayahya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-1 underline hover:text-white"
                        >
                            Yuda Yahya
                        </a>
                    </div>
                    <div className="order-1 sm:order-2 flex justify-center my-2 sm:my-0 sm:justify-end items-center">
                        <ExtLinkButton href="https://github.com/yudayahya" type="ghost">
                            <AiFillGithub className="w-6 h-6" />
                        </ExtLinkButton>
                        <div className="border-l border-custom-black-300 h-4 mx-3"></div>
                        <ExtLinkButton href="https://www.linkedin.com/in/aziiza-yuda-yahya-845946141" type="ghost">
                            <AiFillLinkedin className="w-6 h-6" />
                        </ExtLinkButton>
                        <div className="border-l border-custom-black-300 h-4 mx-3"></div>
                        <ExtLinkButton href="https://www.instagram.com/yudayahya" type="ghost">
                            <AiFillInstagram className="w-6 h-6" />
                        </ExtLinkButton>
                        <div className="border-l border-custom-black-300 h-4 mx-3"></div>
                        <ExtLinkButton href="https://twitter.com/yudayahyayuda" type="ghost">
                            <AiFillTwitterCircle className="w-6 h-6" />
                        </ExtLinkButton>
                    </div>
                </div>
            </footer>
        </>
    );
}
