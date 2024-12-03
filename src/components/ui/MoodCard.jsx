import { cn } from "../../../lib/utilits";

export const MoodCard = ({ className, img, title }) => {

  return (
    <>
      <div className={cn("h-3/4 group/box cursor-pointer", className)}>
        <img src={img} className="w-full transition duration-250 ease-linear group-hover/box:contrast-150 h-full  object-cover" alt="" />
        <h3 className="pt-5 text-center text-3xl font-bold text-secondary">{title}</h3>
      </div>
    </>
  );
};


