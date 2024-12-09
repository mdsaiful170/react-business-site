import { Calendar, Clock } from "lucide-react";
import { cn } from "../../../lib/utilits";
import { ButtonTag } from "../material/ButtonTag";
import { motion } from "framer-motion";
export const NightCard = ({ Night, className }) => {
  const {
    img,
    title,
    subtitle,
    datebox: { date, time } = {},
    delay,
  } = Night || {};
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
        className={cn(
          "cursor-pointer shadow-custom-2 rounded-md  relative",
          className
        )}
      >
        <span className="bg-white  px-4 py-[11px]  rounded-lg absolute right-4 top-4 text-base font-bold text-secondary">
          JUN 15
        </span>
        <img
          className="object-cover w-full h-[20rem] md:h-[16rem] rounded-2xl"
          src={img}
          alt="img"
        />
        <h3 className="font-bold pt-3 text-2xl text-white">{title}</h3>
        <p className=" py-2 text-base font-medium text-white">{subtitle}</p>
        <p className="flex items-center gap-x-1 text-white text-base font-normal ">
          <span className="text-base text-white flex items-center gap-1">
            <Calendar size={20}  color="#FFFFFF" /> {date}{" "}
          </span>
          <span className="text-base text-white flex items-center gap-1">
            <Clock  size={20} color="#FFFFFF" /> {time}{" "}
          </span>
        </p>
        <ButtonTag className={"mt-4"}>Book Now</ButtonTag>
      </motion.div>
    </>
  );
};
