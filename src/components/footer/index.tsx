import { LogoWithText2 } from "assets";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={`container ${styles.footer}`} >
        <LogoWithText2 />
        <hr />
        <p>© 2024 Keiboardrs Tech. All rights reserved.</p>
      </footer>
    </>
  );
};

export { Footer };
