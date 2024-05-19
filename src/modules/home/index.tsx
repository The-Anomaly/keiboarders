import { Navbar, Footer } from "components";
import styles from "./styles.module.scss";
import { HeroSection } from "./heroSection";
import { ContactUs } from "./contactUs";
import { Services } from "./services";
import { SocialProof } from "./socialProof";
import { AboutUs } from "./aboutUs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomeUI = () => {
  useEffect((): any => {
    window.scrollTo(-0, -0);
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <HeroSection />
        <SocialProof />
        <Services />
        <AboutUs />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
};

export { HomeUI };
