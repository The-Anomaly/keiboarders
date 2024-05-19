import { Tag } from "components";
import styles from "./styles.module.scss";
import { heroImg } from "assets/images";

const HeroSection = () => {
  return (
    <>
      <section className={`container ${styles.heroSec}`}>
        <div className={styles.txtSec}>
          <Tag text={"Book a demo with us today and let us create magic"} />
          <h1 data-aos="fade-in" >
            Transforming <em>Startups</em> with <em>innovative</em> software
            solutions
          </h1>
          <p data-aos="fade-in" >
            We specialize in research, design, and development of cutting-edge
            software products tailored for startups. Our team of experts is
            dedicated to helping you succeed.
          </p>
          <div className={styles.btnSec}>
            <button>Book a Demo</button>
            <button>Contact Us</button>
          </div>
        </div>
        <img data-aos="slide-up" className={styles.img} src={heroImg} alt="dashboard" />
      </section>
    </>
  );
};

export { HeroSection };
