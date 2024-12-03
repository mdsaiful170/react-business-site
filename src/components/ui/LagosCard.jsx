import { cn } from "../../../lib/utilits";

export const LagosCard = (props) => {
  const { title, img, className } = props || {};
  return (
    <>
      <div
        className={cn(
          "cursor-pointer group/box overflow-hidden relative rounded-2xl",
          className
        )}
      >
        <img
          src={img}
          className="w-full group-hover/box:contrast-150 duration-150 transition-all ease-linear group-hover/box:scale-[1.03]  rounded-2xl shadow-md border border-stone-200 h-[270px] rouned-xl object-cover"
          alt=""
        />
        <h3 className="pt-3 text-center text-2xl font-bold text-secondary">
          {title}
        </h3>
      </div>
    </>
  );
};
