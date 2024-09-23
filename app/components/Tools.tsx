import { SiVisualstudiocode, SiPostman, SiInsomnia } from 'react-icons/si';
import { ImGit } from 'react-icons/im';

const tools = [
    { name: 'VScode', icon: () => <SiVisualstudiocode className="w-8 h-8 sm:w-10 sm:h-10" /> },
    { name: 'Postman', icon: () => <SiPostman className="w-8 h-8 sm:w-10 sm:h-10" /> },
    { name: 'Insomnia', icon: () => <SiInsomnia className="w-8 h-8 sm:w-10 sm:h-10" /> },
    { name: 'Git', icon: () => <ImGit className="w-8 h-8 sm:w-10 sm:h-10" /> },
];

export default function Tools() {
    return (
        <>
            <section className="pt-20 px-6 w-full" id="tools">
                <p className="text-center text-white text-2xl tracking-tighter font-bold">Tools</p>
                <p className="text-center text-custom-black-300 text-lg mb-6">
                    <span className="text-blue-400">Tools</span> that I use
                </p>
                <div className="w-full flex gap-y-2 gap-x-2 sm:gap-x-4 justify-center items-center py-3 flex-wrap">
                    {tools.map((tool, idx) => (
                        <div
                            key={idx}
                            className="text-custom-black-300 hover:text-white mx-2 sm:mx-4 cursor-pointer group relative flex justify-center items-center"
                        >
                            {tool.icon()}
                            <div className="absolute -bottom-12 bg-custom-black-900 px-6 py-2 z-10 mx-auto rounded-lg border text-sm border-white border-opacity-30 hidden group-hover:block">
                                {tool.name}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
