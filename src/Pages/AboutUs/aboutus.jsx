import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Footer } from "../../components/Footer/footer";
import Navbar from "../../components/Header/header";
import "./aboutus.css";

const AbouttUs = () => {
  return (
    <>
      <Navbar />
      <section className="about-section">
        {/* Who We Are Section */}
        <div className="about-card">
          <h3 className="small-heading">Who We Are</h3>
          <h2 className="main-heading">Who We Are</h2>
          <p className="description">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet.
          </p>

          {/* Replace static image with Swiper slider */}
          <Swiper
            modules={[Autoplay, EffectCoverflow]}
            effect="coverflow" // Enables the coverflow effect
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            coverflowEffect={{
              rotate: 50, // Rotation of slides
              stretch: 0, // Space between slides
              depth: 100, // Depth for 3D effect
              modifier: 1,
              slideShadows: true, // Adds shadows for better effect
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
          >
            <SwiperSlide>
              <img
                src="./Images/Rectangle 15.png"
                alt="Who We Are - Image 1"
                className="about-image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./Images/Rectangle 4402.png"
                alt="Who We Are - Image 2"
                className="about-image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./Images/Rectangle 4402@3x.png"
                alt="Who We Are - Image 3"
                className="about-image"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Why Us Section */}
        <div className="about-card">
          <h3 className="small-heading">Why Us</h3>
          <h2 className="main-heading">Why Us</h2>
          <p className="description">
            lorem ipsum doller fit amet Lorem ipsum doller fit emet Lorem ipsum
            doller fit amet Lorem ipsum Woller fit amet Lorem ipsum doller fit
            amet Lorem ipsum doller fit amet Lorem ipsum doller fit amet Lorem
            ipsum doller fit amet Lorem ipsum doller fit
          </p>
          <img
            src="./Images/Rectangle 15.png"
            alt="Why Us"
            className="about-image"
          />
        </div>
      </section>
      {/* Our Vision */}
      <section className="our-vision">
        <h2>Our Vision</h2>
        <div className="vision-container">
          <div>
            <img
              src="/Images/ourVision.png"
              alt="ASPIREQ Logo"
              className="circleimage"
            />
          </div>
        </div>
      </section>
      {/* Feature SEction */}
      <section className="features-section">
        <h2>Features</h2>
        <div className="feature-card">
          <div className="feature-image-container">
            <img
              src="./Images/Rectangle 15.png"
              alt="Feature"
              className="feature-image"
            />
          </div>
          <div className="feature-content">
            <h3>
              We are always working to provide you the best of the features in
              all aspects.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur.
            </p>
            <button className="learn-more-button">Learn more →</button>
          </div>
        </div>

        <div className="feature-card reverse">
          <div className="feature-image-container">
            <img
              src="./Images/Rectangle 15.png"
              alt="Feature"
              className="feature-image"
            />
          </div>
          <div className="feature-content">
            <h3>
              We are always working to provide you the best of the features in
              all aspects.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur.
            </p>
            <button className="learn-more-button">Learn more →</button>
          </div>
        </div>
      </section>
      {/* Our culture  */}
      <section className="our-culture">
        <h2>Our Culture</h2>
        <div className="culture-cards">
          <div className="card">
            <div className="icon">🌐</div>
            <h3>Good to Great Culture</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet.
            </p>
          </div>
          <div className="card">
            <div className="icon">🌱</div>
            <h3>Growing</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet.
            </p>
          </div>
          <div className="card">
            <div className="icon">⚖️</div>
            <h3>Well Balanced</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AbouttUs;
