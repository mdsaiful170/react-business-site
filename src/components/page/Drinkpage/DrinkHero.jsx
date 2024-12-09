import { ButtonTag } from "../../material/ButtonTag";
import { ContainerTage } from "../../material/ContainerTage";
import { HeadingTag } from "../../material/HeadingTag";
import { motion } from "framer-motion";
const DrinkHero = () => {
  return (
    <>
      <section className="bg-[url(./drink-bg.png)]  bg-cover bg-bottom md:bg-center w-full min-h-[70vh] md:min-h-[80vh] pt-16 lg:pt-20">
        <ContainerTage>
          <motion.div 
           initial={{opacity: 0 , y: 70}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="opacity-85 md:ms-16 mt-5 bg-[#FBFCFF] backdrop-blur-sm rounded px-8 py-7 shadow-custom-3 max-w-full w-full  md:max-w-[558px]">
            <HeadingTag className={"text-[2.4rem] pb-5"}>
              Our top pick for the week!
            </HeadingTag>
            <h4 className="text-3xl font-bold text-secondary">Nok by Alara</h4>
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
      </section>
    </>
  );
};

export default DrinkHero;
