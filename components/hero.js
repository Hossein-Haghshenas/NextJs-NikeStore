import Image from "next/image";
import Clips from "./utils/clips";
import SocialLinks from "./utils/socialLinks";

const Hero = ({ heroapi: { title, subtitle, btntext, img, sociallinks, videos } }) => {
  return (
    <>
      <section className="relative h-auto w-auto flex flex-col">
        <section className="bg-theme clip-path h-[90vh] lg:h-[80vh] md:h-[70vh] sm:h-[60vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10"></section>
        <section className="relative opacity-100 z-20 grid items-center justify-items-center nike-container">
          <section className="grid items-center justify-center mt-28 md:mt-24">
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-semibold filter drop-shadow-sm text-slate-200">{title}</h1>
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-semibold filter drop-shadow-sm text-slate-200">{subtitle}</h1>
            <button type="button" className="button-theme bg-slate-200  shadow-slate-200 rounded-xl my-5">
              {btntext}
            </button>
            <section className="grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto">
              {videos?.map((value, index) => {
                return <Clips key={index} imgsrc={value.imgsrc} clip={value.clip} />;
              })}
            </section>
            <section className="grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-3">
              {sociallinks?.map((value, index) => {
                return <SocialLinks key={index} icon={value.icon} />;
              })}
            </section>
          </section>
          <section className="">
            <Image
              className="transitions-theme w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill"
              src={img}
              alt="hero"
              priority
            />
          </section>
        </section>
      </section>
    </>
  );
};

export default Hero;
