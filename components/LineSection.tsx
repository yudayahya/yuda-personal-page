import type { NextPage } from "next"

interface propsType {
    gradientClass: string,
    sectionNumber: string,
    sectionName: string
}

const LineSection: NextPage<propsType> = (props) => {
    const { gradientClass, sectionNumber, sectionName } = props

    return (
        <>
            <div className='w-full grid grid-cols-1 py-8'>
                <div className='line-with-gradient mx-auto'>
                    <div className={'w-px h-28 ' + gradientClass}></div>
                </div>
                <div className={'flex justify-center items-center text-lg font-semibold text-custom-black-900 h-10 w-10 rounded-full mx-auto ' + gradientClass}>{sectionNumber}</div>
                <p className={'text-center text-3xl font-bold bg-clip-text text-transparent mt-6 tracking-tighter ' + gradientClass}>{sectionName}</p>
            </div>
        </>
    )
}

export default LineSection