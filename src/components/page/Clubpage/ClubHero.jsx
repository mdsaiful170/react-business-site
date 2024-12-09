import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ContainerTage } from "../../material/ContainerTage";
import { HeadingTag } from "../../material/HeadingTag";
import { ButtonTag } from "../../material/ButtonTag";
const ClubHero = () => {
  return (
    <>
      <Swiper
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        className="relative "
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
          clickable: true,
        }}
      >
        <SwiperSlide className="bg-[url(./club-mbg.png)] lg:bg-[url(./club-bg.png)] bg-cover min-h-[70vh] bg-no-repeat  bg-top lg:bg-center pt-14 md:pt-20 px-3 ">
          <ContainerTage>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "circOut" }}
              className=" md:ms-16 mt-5 bg-[#00000099]/60 backdrop-blur-sm rounded px-8 py-7 shadow-custom-3 max-w-full w-full  md:max-w-[558px]"
            >
              <HeadingTag className={"text-[2.4rem] pb-5 text-white"}>
                Club Quilox
              </HeadingTag>
              <h4 className="text-3xl font-bold">Amaarae & Tems on June 3rd</h4>

              <ButtonTag
                className={" px-7   text-base font-bold  mt-6 block ms-auto "}
              >
                Book A Section Now
              </ButtonTag>
            </motion.div>
          </ContainerTage>
        </SwiperSlide>
        <SwiperSlide className="bg-[url(./drink-bg.png)]  min-h-[70vh] bg-no-repeat bg-cover  bg-top lg:bg-center pt-14 md:pt-20 px-3">
          <ContainerTage>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="opacity-85 md:ms-16 mt-5  bg-[#00000099]/60  backdrop-blur-sm rounded  px-8 py-7 shadow-custom-3 max-w-full w-full  md:max-w-[558px]"
            >
              <HeadingTag className={"text-[2.4rem] pb-3 text-white"}>
                Our top pick for the week!
              </HeadingTag>
              <h4 className="text-3xl font-bold">Nok by Alara</h4>
              <p className="text-xl font-normal pb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor .
              </p>
              <ButtonTag
                className={" px-7   text-base font-bold w-1/3 block ms-auto "}
              >
                Reserve Now
              </ButtonTag>
            </motion.div>
          </ContainerTage>
        </SwiperSlide>
        <SwiperSlide className="bg-[url(./hero.png)]   min-h-[70vh] bg-no-repeat  bg-top lg:bg-top bg-cover pt-16 md:pt-20 px-3">
          <ContainerTage>
            <motion.h1
              initial={{ opacity: 0, y: 50 }} // শুরুতে ডানে থাকবে
              whileInView={{ opacity: 1, y: 0 }} // ভিউতে আসলে জায়গায় ফিরে আসবে
              viewport={{ once: true }} // একবার অ্যানিমেশন চালানোর জন্য
              transition={{ duration: 0.5, delay: 0.2, ease: "circOut" }} // ট্রানজিশন টাইম
              className=" text-5xl text-pretty md:text-6xl font-bold text-white max-w-full my-auto grid place-items-center md:max-w-2xl"
            >
              Find amazing things to do anytime, anywhere in Lagos.
            </motion.h1>
          </ContainerTage>
        </SwiperSlide>

        <button className=" hidden md:block absolute top-1/2  z-10 left-3 md:left-2 swiper-prev">
          <ChevronLeft size={80} strokeWidth={1} color="#FFFFFF" />
        </button>
        <button className=" hidden md:block  absolute swiper-next  top-1/2 z-10 right-3 md:right-2">
          <ChevronRight size={80} strokeWidth={1} color="#FFFFFF" />
        </button>
      </Swiper>
    </>
  );
};

export default ClubHero;
