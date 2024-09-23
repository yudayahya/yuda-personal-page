import projects from '@/constants/projects';
import ProjectCard from '@/components/Cards/ProjectCard';

export default function Projects() {
    return (
        <>
            <section className="pb-20 px-6 w-full">
                <p className="text-center text-white text-6xl tracking-tighter font-bold">Projects & Portfolios</p>
                <p className="text-center text-custom-black-300 text-lg py-6">
                    Here are some <span className="text-orange-400">Projects</span> I have worked on and some{' '}
                    <span className="text-orange-400">Portfolios</span>.
                </p>
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {projects.map((project, index) => {
                        return (
                            <ProjectCard
                                key={index}
                                imageSource={project.image}
                                imageAlt={project.alt}
                                title={project.title}
                                description={project.description}
                                github={project.github}
                                preview={project.preview}
                                stacks={project.stacks}
                            />
                        );
                    })}
                </div>
            </section>
        </>
    );
}
