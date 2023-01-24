import { HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import { truncate } from "lodash";
import Image from "next/image";
import Link from "next/link";

const NewsCard = (props) => {
  const { title, text, img, url, time, like, by, btn } = props;
  return (
    <>
      <section className="relative grid items-center gap-4 pb-5 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200 border-b-2">
        <section className="flex items-center justify-center">
          <Image src={img} alt={title} className="w-full h-auto object-cover shadow-md shadow-slate-200  rounded-t-lg" width={540} height={380} />
        </section>
        <section className="flex items-center justify-between w-full px-4">
          <section className="flex items-center gap-0.5">
            <HeartIcon className="icon-style text-red-500 w-5 h-5" />
            <span className="text-xs font-bold">{like}</span>
          </section>
          <section className="flex items-center gap-0.5">
            <ClockIcon className="icon-style text-black w-4 h-4" />
            <span className="text-xs font-bold">{time}</span>
          </section>
          <section className="flex items-center gap-0.5">
            <HashtagIcon className="icon-style text-blue-600" />
            <span className="text-xs font-bold text-blue-600">{by}</span>
          </section>
        </section>
        <section className="grid items-center justify-start px-4">
          <h2 className="text-base font-semibold lg:text-sm">{title}</h2>
          <p className="text-sm text-justify lg:text-xs">{truncate(text, { length: 175 })}</p>
        </section>
        <section className="flex items-center justify-center px-4 w-full">
          <Link href={url} legacyBehavior>
            <a
              className="w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 py-1.5 button-theme"
              target="_blank"
              role="button"
            >
              {btn}
            </a>
          </Link>
        </section>
      </section>
    </>
  );
};

export default NewsCard;
