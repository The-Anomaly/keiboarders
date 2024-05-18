import { MagicIcon } from "assets";
import styles from "./styles.module.scss";

const Tag = ({ text }) => {
  return (
    <>
      <div className={`${styles.tag}`}>
        <p>{text}</p>
        <span>
          <MagicIcon />
        </span>
      </div>
    </>
  );
};

export { Tag };
