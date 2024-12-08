import { Button } from "@nextui-org/react";
import { cn } from "../../../lib/utilits";
export const ButtonTag = ({ className,onclick, startContent, children, varient }) => {
  return (
    <>
      <Button
        variant={varient}
        onClick={onclick}
        radius="none"
        size="md"
        color="primary"
        startContent={startContent}
        className={cn(
          "text-white font-bold text-base rounded-md px-5 hover:!opacity-100 hover:bg-secondary",
          className
        )}
      >
        {children}
      </Button>
    </>
  );
};
