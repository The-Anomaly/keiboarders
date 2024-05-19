import { LogoWithText } from "assets";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth <= 800);

  const screenSizeUpdate = () => {
    setMobile(window.innerWidth <= 800);
  };
  window.onresize = screenSizeUpdate;

  const handleCloseNav = () => {
    setShowNav(false);
  };

  return (
    <>
      <header className={`${styles.navBg} ${showNav ? styles.openMenu : ""}`}>
        <section className={`container ${styles.navWrap}`}>
          <div className={styles.logoSec}>
            <LogoWithText className={styles.logo} />
            <button
              onClick={() => setShowNav(!showNav)}
              className={`${styles.hamburger} ${
                showNav ? styles.closeMenuBtn : ""
              }`}
            >
              <div></div>
              <div></div>
              <div></div>
            </button>
          </div>
          {(showNav && mobile) || !mobile ? (
            <nav className={styles.nav}>
              <Link onClick={handleCloseNav} to="#services">
                Services
              </Link>
              <Link onClick={handleCloseNav} to="#about">
                About Us
              </Link>
              <Link onClick={handleCloseNav} to="#contact">
                Contact Us
              </Link>
            </nav>
          ) : (
            ""
          )}
        </section>
      </header>
    </>
  );
};

export { Navbar };
