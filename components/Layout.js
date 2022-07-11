import styles from "../styles/Layout.module.css"
import Nav from "./Nav";
import Header from "./Header";

function Layout({ children }) {
    return (
        <>
            <Nav />
            <Header />
            <div className={styles.container}>
                <div className={styles.main}>
                    { children }
                </div>
            </div>
        </>
    );
}

export default Layout;