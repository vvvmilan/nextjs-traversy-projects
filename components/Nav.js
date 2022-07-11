import navStyles from "../styles/Nav.module.css"
import Link from "next/link";

function Nav(props) {
    return (
        <div className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/projects'>Projects</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;