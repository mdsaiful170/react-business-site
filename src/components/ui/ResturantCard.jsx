import { cn } from "../../../lib/utilits";
import { ButtonTag } from "../material/ButtonTag";
import { motion } from "framer-motion";
export const ResturantCard = ({ resturent, className }) => {
  const { img, title, des, coun ,delay } = resturent || {};
  return (
    <>
      <motion.div
       initial={{opacity:0, y:80}}
        whileInView={{ opacity:1, y:0}}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay:delay, ease:"easeOut" }}
       className={cn("cursor-pointer shadow-custom-2 rounded-md ", className)}>
        <img
          className="object-cover w-full h-[20rem] md:h-[16rem] rounded-2xl"
          src={img}
          alt="img"
        />
        <h3 className="font-bold pt-3 text-2xl">{title}</h3>
        <p className=" py-2 text-base font-medium text-secondary">{des}</p>
        <p className="text-secondary text-base font-normal ">{coun}</p>
        <ButtonTag className={"mt-4"}>Reserve Now</ButtonTag>
      </motion.div>
    </>
  );
};
