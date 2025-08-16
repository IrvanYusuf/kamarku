import { ReactNode } from "react";
import { Button } from "./ui/button";
import clsx from "clsx";

interface ButtonGradientProps {
  children: ReactNode;
  className?: string;
}

const ButtonGradient = ({ children, className }: ButtonGradientProps) => {
  return (
    <Button
      className={clsx(
        "bg-gradient-to-r w-full from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 text-lg shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 group cursor-pointer",
        className
      )}
    >
      {children}
    </Button>
  );
};

export default ButtonGradient;
