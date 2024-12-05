import { cn } from "../../../lib/utilits";
import { motion } from "motion/react";
export const MoodCard = ({ className, img, title }) => {
  return (
    <>
      <motion.div
        initial={{opacity:0, scale:0.5}}
           whileInView={{opacity:1, scale:1}}
            viewport={{ once: true }}
            
            transition={{duration:0.8, ease:"easeInOut" ,delay:0.2}}
        
       className={cn("h-3/4 group/box cursor-pointer", className)}>
        <img
          src={img}
          className="w-full transition duration-250 ease-linear group-hover/box:contrast-150 h-full  object-cover"
          alt=""
        />
        <h3 className="pt-5 text-center text-3xl font-bold text-secondary">
          {title}
        </h3>
      </motion.div>
    </>
  );
};
