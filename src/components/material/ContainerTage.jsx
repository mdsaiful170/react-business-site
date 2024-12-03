import { cn } from "../../../lib/utilits";

export const ContainerTage = ({ children, className }) => {
  return (
    <>
      <div  className={cn("max-w-[1240px] mx-auto px-2", className)}>
        {children}
      </div>
    </>
  );
};
