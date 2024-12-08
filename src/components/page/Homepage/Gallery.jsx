
import { ContainerTage } from "../../material/ContainerTage";
import { HeadingTag } from "../../material/HeadingTag";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { motion } from "motion/react";


const galleryimg = [
  "./g-1.png",
  "./g-2.png",
  "./g-3.png",
  "./g-4.png",
  "./g-5.png",
  "./g-6.png",
];

const Gallery = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <section className="py-9 pt-12 shadow-custom-1 bg-white">
      <ContainerTage>
      <HeadingTag className="text-2xl font-bold pb-8">
        See How people are chilling on{" "}
        <span className="text-primary">Chillsbay</span>
      </HeadingTag>
        {/* LightGallery Component */}
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-0 gap-y-3"
        >
          {galleryimg.map((img, i) => (
            <motion.a 
             initial={{ opacity: 0, scale: 0.9}}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'linear' }}
             key={i} href={img} className="block group/box">
              <img
                 alt={`gallery img ${i+1}`}
                src={img}
                className="w-full  h-[250px] object-cover  group-hover/box:contrast-125 duration-200 ease-linear transition-all"
              />
            </motion.a>
          ))}
        </LightGallery>
      </ContainerTage>
    </section>
  );
};

export default Gallery;
