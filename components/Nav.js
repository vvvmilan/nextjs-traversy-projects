import navStyles from "../styles/Nav.module.css"
import Link from "next/link";

function Nav(props) {
    return (
        <nav className="relative container mx-auto p-6">
            <div className="flex items-center justify-between">
                <Link className="pt-2 text-3xl" href="/">
                        MV
                </Link>

                <div className="hidden md:flex space-x-6">
                    <Link href="/projects">projects</Link>
                    <Link href="/about">about</Link>
                    {/*<a href="#" className="hover:text-darkGrayishBlue">contact</a>*/}
                </div>
{/*                <a href="#" className="hidden md:block p-3 px-6 pt-2 text-white bg-blue baseline rounded-full hover:bg-brightRedLight">
                    Get Started
                </a>*/}
            </div>
        </nav>
    );
}

export default Nav;