import { Button } from "@nextui-org/react";
import { cn } from "../../../lib/utilits";
export const ButtonTag = ({ className, children, varient }) => {
  return (
    <>
      <Button
        variant={varient}
        radius="none"
        size="md"
        color="primary"
        className={cn("text-white font-bold text-base rounded-md px-5 hover:!opacity-100 hover:bg-secondary", className)}
      >
        {children}
      </Button>
    </>
  );
};


