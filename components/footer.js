import Link from "next/link";

const Footer = ({ data: { titles, links } }) => {
  return (
    <footer className="bg-theme pt-7 pb-5">
      <section className="nike-container text-slate-200">
        <section className="grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5">
          {titles?.map((value, index) => (
            <section key={index} className="grid items-center">
              <h1 className="text-lg lg:text-base md:text-sm uppercase font-semibold">{value.title}</h1>
            </section>
          ))}
          {links?.map((navLinks, index) => (
            <ul key={index} className="grid items-center gap-1">
              {navLinks.map((link, index) => (
                <li key={index} className="text-sm sm:text-xs">
                  {link.link}
                </li>
              ))}
            </ul>
          ))}
        </section>
        <section className="mt-5 text-center">
          <p className="text-sm md:text-center">
            Copyright
            <span className="text-base font-bold"> &copy; </span>
            All Right's Reserved {new Date().getFullYear()}
            <br />
            <span className="block pt-2">
              Made With ❤️ By{" "}
              <span className="font-semibold">
                <Link href="https://github.com/Hossein-Haghshenas">Hossein Developer</Link>
              </span>
            </span>
          </p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
