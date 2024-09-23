export default function Tooltip({ label, children }: { label: string; children: Readonly<React.ReactNode> }) {
    return (
        <div className="text-custom-black-300 hover:text-white cursor-pointer group relative flex justify-center items-center">
            {children}
            <div className="absolute -bottom-12 bg-custom-black-900 px-6 py-2 z-10 mx-auto rounded-lg border text-sm border-white border-opacity-30 hidden group-hover:block">
                {label}
            </div>
        </div>
    );
}
