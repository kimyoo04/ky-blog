import Logo from "./Logo";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container flex-wrap items-center gap-4 p-5 mx-auto col-center md:flex-row">
        <Logo />
        <nav className="flex flex-wrap items-center justify-center gap-5 text-base md:ml-auto">
          <NavLink href={"/about"} name={"About"} />
          <NavLink href={"/projects"} name={"Projects"} />
          <NavLink href={"/blog"} name={"Blog"} />
          <NavLink href={"/contact"} name={"Contact"} />
        </nav>
      </div>
    </header>
  );
}
