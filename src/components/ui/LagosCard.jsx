import { cn } from "../../../lib/utilits";
import { motion } from "motion/react";
export const LagosCard = (props) => {
  const { title, img, dely, className } = props || {};
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: dely }}
        className={cn(
          "cursor-pointer group/box overflow-hidden relative rounded-2xl",
          className
        )}
      >
        <img
          src={img}
          className="w-full h-auto group-hover/box:contrast-150 duration-150 transition-all ease-linear group-hover/box:scale-[1.03]  rounded-2xl shadow-md border border-stone-200 lg:h-[270px] rouned-xl object-cover"
          alt=""
        />
        <h3 className="pt-3 text-center text-2xl font-bold text-secondary">
          {title}
        </h3>
      </motion.div>
    </>
  );
};
