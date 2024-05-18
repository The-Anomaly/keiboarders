import styles from "./styles.module.scss";
import {
  coronationLogo,
  hpLogo,
  ibmLogo,
  iinvestLogo,
  leatherBackLogo,
  microsoftLogo,
  newsCorpLogo,
  tempoLogo,
  zitraLogo,
} from "assets";

const SocialProof = () => {
  return (
    <>
      <section className={`container ${styles.sec}`} >
        <p className={styles.ttl} >
          Our team has a joint experience building products for <em>top</em>{" "}
          companies worldwide
        </p>
        <div className={styles.slider}>
          <div className={styles.slideTrack}>
            <div className={styles.slide}>
              <img src={iinvestLogo} alt="i-invest" />
            </div>
            <div className={styles.slide}>
              <img src={coronationLogo} alt="coronation" />
            </div>
            <div className={styles.slide}>
              <img src={microsoftLogo} alt="microsoft" />
            </div>
            <div className={styles.slide}>
              <img src={tempoLogo} alt="tempo" />
            </div>
            <div className={styles.slide}>
              <img src={ibmLogo} alt="ibm" />
            </div>
            <div className={styles.slide}>
              <img src={hpLogo} alt="hp" />
            </div>
            <div className={styles.slide}>
              <img src={zitraLogo} alt="zitra" />
            </div>
            <div className={styles.slide}>
              <img src={newsCorpLogo} alt="news corp" />
            </div>
            <div className={styles.slide}>
              <img src={leatherBackLogo} alt="leather back" />
            </div>
            {/* Second set */}
            <div className={styles.slide}>
              <img src={iinvestLogo} alt="i-invest" />
            </div>
            <div className={styles.slide}>
              <img src={coronationLogo} alt="coronation" />
            </div>
            <div className={styles.slide}>
              <img src={microsoftLogo} alt="microsoft" />
            </div>
            <div className={styles.slide}>
              <img src={tempoLogo} alt="tempo" />
            </div>
            <div className={styles.slide}>
              <img src={ibmLogo} alt="ibm" />
            </div>
            <div className={styles.slide}>
              <img src={hpLogo} alt="hp" />
            </div>
            <div className={styles.slide}>
              <img src={zitraLogo} alt="zitra" />
            </div>
            <div className={styles.slide}>
              <img src={newsCorpLogo} alt="news corp" />
            </div>
            <div className={styles.slide}>
              <img src={leatherBackLogo} alt="leather back" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { SocialProof };
