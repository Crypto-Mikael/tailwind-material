import plugin from "tailwindcss/plugin";

import palette from "./colors";
import { lightSchemeProperties, darkSchemeProperties } from "./base/index.js";
import {
  CorePaletteColors,
  argbFromHex,
} from "@material/material-color-utilities";
/** This file is generated by postcss pressjss extension check ../../dist to final version  */
const elements = require("./elements");

export type CorePaletteColorsInHex = {
  primary?: string;
  secondary?: string;
  tertiary?: string;
  neutral?: string;
  neutralVariant?: string;
  error?: string;
};

const corePaletteColorsFromCorePaletteColorsInHex = (
  colors: CorePaletteColorsInHex
): CorePaletteColors => {
  return Object.entries(colors).reduce(
    (finalObject: CorePaletteColors, [key, value]) => {
      if (value !== undefined) {
        finalObject[key as keyof CorePaletteColors] = argbFromHex(value);
      }
      return finalObject;
    },
    {} as CorePaletteColors
  );
};

export default plugin.withOptions<CorePaletteColorsInHex>(
  (colors) =>
    ({ addComponents, addBase, addUtilities }) => {
      addBase({
        "::view-transition": {
          "background-color": "rgb(var(md-sys-color-background)/ 25%)",
        },
        'html[data-theme="light"]': {
          "color-scheme": "light",
          ...lightSchemeProperties(
            corePaletteColorsFromCorePaletteColorsInHex(
              colors ?? { primary: "#F0AB1F" }
            )
          ),
        },
        'html[data-theme="dark"]': {
          "color-scheme": "dark",
          ...darkSchemeProperties(
            corePaletteColorsFromCorePaletteColorsInHex(
              colors ?? { primary: "#F0AB1F" }
            )
          ),
        },
        html: {
          background: "rgb(var(--md-sys-color-surface))",
          transition: "background 0.2s linear",
          color: "rgb(var(--md-sys-color-on-surface))",
        },
      }),
        addComponents(elements);
    },
  (colors) => {
    return {
      theme: {
        fontFamily: {
          Inter: ["Inter", "sans-serif"],
        },
        colors: palette(
          corePaletteColorsFromCorePaletteColorsInHex(
            colors ?? { primary: "#F0AB1F" }
          )
        ),
      },
    };
  }
);

export * from "./types";
export * from "./utils";
