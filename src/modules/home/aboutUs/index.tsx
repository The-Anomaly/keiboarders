import { aboutImg, ProblemIcon, SolutionIcon } from "assets";
import styles from "./styles.module.scss";

const AboutUs = () => {
  return (
    <>
      <section id="about" className={`container ${styles.aboutSec}`}>
        <div className={styles.about} >
          <div className={styles.about__txtSec}>
            <h3>
              At <em>Keiboarders Tech</em> we specialize in empowering early
              stage to Series A startups{" "}
            </h3>
            <p>
              We are focused on igniting their journey towards success with
              cutting-edge software solutions. With a lean budget in mind, we're
              dedicated to kickstarting your products, leveraging our expertise
              in research, data, design, development, and testing.
            </p>
          </div>
          <img src={aboutImg} alt="" />
        </div>
        <div className={styles.info} >
          <div>
            <ProblemIcon />
            <h3>Problem</h3>
          </div>
          <p>
            Navigating software development is tough for early-stage startups
            due to limited resources, tight budgets, and pressing timelines.
            Without a comprehensive strategy covering research, data insights,
            design, development, and testing, costly setbacks and missed
            opportunities are common.
          </p>
        </div>
        <div className={styles.info}>
          <div>
            <SolutionIcon />
            <h3>Solution</h3>
          </div>
          <p>
            We these problems with tailored solutions, merging cutting-edge tech
            and strategic insights. Our process starts with thorough research
            and data analysis, informing every development stage. Experienced
            designers craft engaging interfaces, while adept developers bring
            visions to life with scalable solutions. Rigorous testing ensures
            top-notch quality.We're committed to your success.
          </p>
        </div>
      </section>
    </>
  );
};

export { AboutUs };
