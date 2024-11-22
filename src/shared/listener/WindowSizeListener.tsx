import { useEffect } from "react";
import { breakpoints, useLayoutStore } from "@/shared";

export const WindowSizeListener = () => {
  const setBreakpoint = useLayoutStore((state) => state.setBreakpoint);

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(
        window.innerWidth > parseInt(breakpoints.xl)
          ? "xl"
          : window.innerWidth > parseInt(breakpoints.lg)
          ? "lg"
          : window.innerWidth > parseInt(breakpoints.md)
          ? "md"
          : "sm"
      );
    };

    window.addEventListener("resize", handleResize);

    //Initial settings
    setBreakpoint(
      window.innerWidth > parseInt(breakpoints.xl)
        ? "xl"
        : window.innerWidth > parseInt(breakpoints.lg)
        ? "lg"
        : window.innerWidth > parseInt(breakpoints.md)
        ? "md"
        : "sm"
    );

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return null;
};
