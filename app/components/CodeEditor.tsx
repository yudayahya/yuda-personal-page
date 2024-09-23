export default function CodeEditor() {
    return (
        <>
            <div className="w-full py-6">
                <div className="mx-auto w-full max-w-2xl min-h-[300px] rounded-xl border border-white border-opacity-10 relative">
                    <div className="w-full px-4 py-2 rounded-t-xl bg-custom-black-600 flex justify-between items-center">
                        <div className="flex justify-start items-center">
                            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                            <div className="w-4 h-4 bg-yellow-400 rounded-full mx-2"></div>
                            <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                        </div>
                        <p className="text-sm text-white">index.ts</p>
                        <div className="w-12"></div>
                    </div>
                    <div className="w-full h-[230px] py-4 px-4 overflow-y-scroll scrollbar-hide">
                        <p className="text-sm font-semibold">
                            <code className="text-purple-600">const</code>&nbsp;
                            <code className="text-indigo-500">lifeMust</code>&nbsp;
                            <code className="text-purple-600">=</code>&nbsp;
                            <code className="text-yellow-400">{'()'}</code>&nbsp;
                            <code className="text-purple-600">{'=>'}</code>&nbsp;
                            <code className="text-yellow-400">{'{'}</code>
                            <br />
                            &Tab;<code className="text-sky-300">do</code>&nbsp;
                            <code className="text-purple-600">{'{'}</code>
                            <br />
                            &Tab;&Tab;<code className="text-indigo-500">beBetterEveryDay</code>
                            <code className="text-yellow-400">{'()'}</code>
                            <br />
                            &Tab;<code className="text-purple-600">{'}'}</code>&nbsp;
                            <code className="text-sky-300">while</code>&nbsp;
                            <code className="text-purple-600">{'('}</code>
                            <code className="text-orange-400">true</code>
                            <code className="text-purple-600">{')'}</code>
                            <br />
                            <code className="text-yellow-400">{'}'}</code>
                            <br />
                            <br />
                            <code className="text-sky-300">export default</code>
                            <code className="text-white text-opacity-70"> lifeMust</code>
                        </p>
                    </div>
                    <div className="w-full absolute bottom-0 px-4 h-6 rounded-b-xl bg-gray-600/40"></div>
                </div>
            </div>
        </>
    );
}
