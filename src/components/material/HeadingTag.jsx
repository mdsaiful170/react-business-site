
import { cn } from "../../../lib/utilits";

export const HeadingTag = ({ className, children }) => {
  return (
    <>
      <h2 className={cn("text-secondary font-bold text-5xl", className)}>
        {children}
      </h2>
    </>
  );
};
