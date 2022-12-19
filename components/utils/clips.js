import Image from "next/image"
import { PlayIcon } from '@heroicons/react/24/solid';

const Clips = ({ clip, imgsrc }) => {
    return (
        <>
            <section className="relative h-28 w-32 rounded-xl overflow-hidden
             group cursor-pointer transition-all duration-300 lg:w-28 md:w-24 sm:w-16 lg:h-24 md:h-20 sm:h-14">
                <Image className="inset-0 flex h-full w-full object-cover 
                absolute top-0 left-0 right-0 rounded-xl opacity-100 z-10 transition-opacity duration-500" src={imgsrc} alt="" />
                <section className="bg-white blur-effect-theme absolute top-11 left-11 lg:top-8 lg:left-9 sm:top-4 sm:left-5 right-0 opacity-100 z-[100]
                w-8 h-8 md:w-5 md:h-5 flex items-center justify-center rounded-full" >
                    <PlayIcon className="icon-style md:w-3 md:h-3 text-slate-900" />
                </section>
                <video className="absolute top-0 left-0 right-0 flex h-full
                 w-full object-cover opacity-0 z-0 group-hover:opacity-100 group-hover:z-50 rounded-xl" autoPlay={true} loop={true} muted={true} playsInline={true}>
                    <source type="video/mp4" src={clip} />
                </video>
            </section>
        </>
    )
}

export default Clips