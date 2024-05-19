import { Navbar, Footer } from "components";
import styles from "./styles.module.scss";
import { HeroSection } from "./heroSection";
import { ContactUs } from "./contactUs";
import { Services } from "./services";
import { SocialProof } from "./socialProof";
import { AboutUs } from "./aboutUs";

const HomeUI = () => {
  return (
    <>
      <Navbar />
      <main className={styles.main} >
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
