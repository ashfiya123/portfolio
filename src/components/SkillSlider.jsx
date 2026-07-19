import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./styles/SkillSlider.scss";

const SkillSlider = () => {
  return (
    <section className="slider-section">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <div className="slide">
            <div className="slide-content">
              <h1>AI & ML</h1>

              <p>
                Passionate about Artificial Intelligence,
                Machine Learning, and building intelligent
                solutions that solve real-world problems.
              </p>
            </div>

            <img src="/image.png" alt="AI ML" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <div className="slide-content">
              <h1>Flutter Development</h1>

              <p>
                Building modern, responsive, and scalable
                mobile applications using Flutter, Firebase,
                and Supabase.
              </p>
            </div>

            <img src="/image1.png" alt="Flutter" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <div className="slide-content">
              <h1>UI / UX Design</h1>

              <p>
                Designing intuitive user experiences through
                wireframing, prototyping, user research,
                and modern interfaces using Figma.
              </p>
            </div>

            <img src="/image3.png" alt="UI UX" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <div className="slide-content">
              <h1>Cyber Security</h1>

              <p>
                Exploring VAPT, Web Security Testing,
                Burp Suite, Nmap and cybersecurity
                fundamentals through hands-on practice.
              </p>
            </div>

            <img src="/image2.png" alt="Cyber Security" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SkillSlider;