import { css, SerializedStyles } from "@emotion/react";
import { CSSObject } from "@emotion/react";

export const breakpoints = {
  xl: "1280px",
  lg: "1024px",
  md: "768px",
  sm: "640px",
};

type DeviceType = keyof typeof breakpoints;

type MediaFunction = (
  first: TemplateStringsArray | CSSObject,
  ...interpolations: (string | number | SerializedStyles)[]
) => SerializedStyles;

export const media: Record<DeviceType, MediaFunction> = Object.entries(
  breakpoints
).reduce((acc, [key, value]) => {
  const device = key as DeviceType;

  acc[device] = (
    first: TemplateStringsArray | CSSObject,
    ...interpolations: (string | number | SerializedStyles)[]
  ) =>
    typeof first === "string" || Array.isArray(first)
      ? css`
          @media (min-width: ${value}) {
            ${css(first, ...interpolations)}
          }
        `
      : css`
          @media (min-width: ${value}) {
            ${first}
          }
        `;

  return acc;
}, {} as Record<DeviceType, MediaFunction>);
