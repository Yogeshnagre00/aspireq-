import ContactSection from "../components/ContactSection/contact";
import FAQSection from "../components/FAQSection/faqSection";
import { Footer } from "../components/Footer/footer";
import Navbar from "../components/Header/header";
//import HeroSection from "../components/HeroSection/heroSection";
import ImageSlider from "../components/Imageslider/imageslider";
import ServicesSection from "../components/ServicesSection/servicesSection";

function Home() {
  return (
    <div className="App">
      <Navbar />
      {/* <HeroSection /> */}
      <ImageSlider />
      <ServicesSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Home;
