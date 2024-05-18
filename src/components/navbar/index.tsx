import { LogoWithText } from "assets";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className={`container ${styles.navWrap}`}>
        {/* <section> */}
        <LogoWithText className={styles.logo} />
        <nav className={styles.nav}>
          <Link to="#services">Services</Link>
          <Link to="#about">About Us</Link>
          <Link to="#contact">Contact Us</Link>
        </nav>
        {/* </section> */}
      </header>
    </>
  );
};

export { Navbar };
