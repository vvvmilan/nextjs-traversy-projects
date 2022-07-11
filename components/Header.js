import headerStyles from "../styles/Header.module.css"

function Header(props) {
    return (
        <div>
            <h1 className={headerStyles.title}>next.js</h1>
            <p className={headerStyles.description}>Tangled Hub</p>
        </div>
    );
}

export default Header;