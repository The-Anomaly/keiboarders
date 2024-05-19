import { Tag } from "components";
import styles from "./styles.module.scss";
import { DesignImg, DevelopmentImg, ResearchImg } from "assets";

const Services = () => {
  return (
    <>
      <section id="services" className={`container ${styles.servicesSec}`}>
        <div className={styles.txtSec}>
          <Tag text={"Innovate"} />
          <h2 data-aos="slide-up">
            Tailored solutions for <em>Startup</em> Success
          </h2>
          <p data-aos="slide-up">
            We offer a comprehensive range of services, including research,
            design, and development, specifically tailored to meet the unique
            needs of your startup. Our team of experts is dedicated to helping
            startups succeed by providing innovative solutions that drive growth
            and deliver exceptional results.
          </p>
        </div>
        <div className={styles.serviceList}>
          <div data-aos="slide-up" className={styles.service}>
            <p className={styles.service__ttl}>Research & Analysis</p>
            <p className={styles.service__txt}>
              Gain valuable insights and make data-driven decisions
            </p>
            <ResearchImg />
          </div>
          <div data-aos="slide-up" className={styles.service}>
            <p className={styles.service__ttl}>Design</p>
            <p className={styles.service__txt}>
              Intuitive and visually appealing user experience
            </p>
            <DesignImg />
          </div>
          <div data-aos="slide-up" className={styles.service}>
            <p className={styles.service__ttl}>Development & Testing</p>
            <p className={styles.service__txt}>
              Robust and scalable software <br /> products
            </p>
            <DevelopmentImg />
          </div>
        </div>
      </section>
    </>
  );
};

export { Services };
