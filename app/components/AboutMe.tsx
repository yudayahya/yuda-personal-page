import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import CodeEditor from './CodeEditor';
import LineSection from '@/components/LineSection';
import ExtLinkButton from '@/components/Buttons/ExtLinkButton';

export default function AboutMe() {
    return (
        <>
            <section className="pt-20 px-6 w-full" id="about-me">
                <p className="text-center text-white text-xs uppercase tracking-widest font-bold">know me more</p>
                <LineSection gradientClass="gradient-first" sectionNumber="1" sectionName="About Me" />
                <p className="text-center text-white text-6xl tracking-tighter font-bold">Let Me Introduce My Self</p>
                <p className="text-center text-custom-black-300 text-lg py-6">
                    I&apos;m in love with programming, till now I have learned something I think.. 😁 <br />
                    I&apos;m interested with <span className="text-blue-400">Javascript</span>,{' '}
                    <span className="text-blue-400">PHP</span>, <span className="text-blue-400">Rust</span>,{' '}
                    <span className="text-blue-400">Python</span>, <span className="text-blue-400">Go</span>,{' '}
                    <span className="text-blue-400">Dart</span>. And <span className="text-blue-400">Javascript</span>{' '}
                    is my favorite language cause <span className="text-blue-400">Javascript</span> is everywhere 🤓{' '}
                    <br />
                    I am always interested in using the latest technology.
                    <br />
                    Whenever possible I expand my knowledge about <span className="text-blue-400">
                        Javascript
                    </span>, <span className="text-blue-400">PHP</span>, <span className="text-blue-400">Rust</span>,{' '}
                    <span className="text-blue-400">Python</span>, <span className="text-blue-400">Go</span>,{' '}
                    <span className="text-blue-400">Dart</span> and some cloud provider.
                </p>
                <p className="text-center text-white text-2xl tracking-tighter font-bold">Find Me On</p>
                <p className="text-center text-custom-black-300 text-lg">
                    Feel free to <span className="text-blue-400">connect</span> with me
                </p>
                <div className="w-full flex justify-center items-center pb-6 pt-2">
                    <ExtLinkButton href="https://github.com/yudayahya" type="ghost">
                        <AiFillGithub className="w-8 h-8" />
                    </ExtLinkButton>
                    <div className="border-l border-custom-black-300 h-4 mx-3"></div>
                    <ExtLinkButton href="https://www.linkedin.com/in/aziiza-yuda-yahya-845946141" type="ghost">
                        <AiFillLinkedin className="w-8 h-8" />
                    </ExtLinkButton>
                    <div className="border-l border-custom-black-300 h-4 mx-3"></div>
                    <ExtLinkButton href="https://www.instagram.com/yudayahya" type="ghost">
                        <AiFillInstagram className="w-8 h-8" />
                    </ExtLinkButton>
                    <div className="border-l border-custom-black-300 h-4 mx-3"></div>
                    <ExtLinkButton href="https://twitter.com/yudayahyayuda" type="ghost">
                        <AiFillTwitterCircle className="w-8 h-8" />
                    </ExtLinkButton>
                </div>
                <CodeEditor />
            </section>
        </>
    );
}
