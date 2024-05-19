import { MagicIcon } from "assets";
import styles from "./styles.module.scss";

const Tag = ({ text }) => {
  return (
    <>
      <div data-aos="fade-in" className={`${styles.tag}`}>
        <p>{text}</p>
        <span>
          <MagicIcon />
        </span>
      </div>
    </>
  );
};

export { Tag };
