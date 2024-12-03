
import { cn } from "../../../lib/utilits";

export const ChillsbayCard = (props) => {
  const { img, title, content, className } = props || {};
  return (
    <>
      <div
        className={cn(
          "flex items-center flex-col text-center shadow-custom-2 rounded-xl py-2  justify-center group/box cursor-pointer ",
          className
        )}
      >
        <img
          src={img}
          className="group-hover/box:-translate-y-2 duration-150 transition ease-linear"
          alt=""
        />
        <h3 className="text-3xl font-bold text-secondary py-3">{title}</h3>
        <p className="text-xl font-normal text-black">{content}</p>
      </div>
    </>
  );
};
