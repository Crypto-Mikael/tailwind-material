import { CorePalette, CorePaletteColors, Scheme, TonalPalette, rgbaFromArgb } from "@material/material-color-utilities"
import { MaterialCSSVariables, MaterialCssVariablesOnDOM } from "../base";

export const designColorsTokens: {[T in MaterialCSSVariables]: keyof MaterialCssVariablesOnDOM} = {
  primary: '--md-sys-color-primary',
  'on-primary': '--md-sys-color-on-primary',
  'primary-container': '--md-sys-color-primary-container',
  'on-primary-container': '--md-sys-color-on-primary-container',
  secondary: '--md-sys-color-secondary',
  'on-secondary': '--md-sys-color-on-secondary',
  'secondary-container': '--md-sys-color-secondary-container',
  'on-secondary-container': '--md-sys-color-on-secondary-container',
  tertiary: '--md-sys-color-tertiary',
  'on-tertiary': '--md-sys-color-on-tertiary',
  'tertiary-container': '--md-sys-color-tertiary-container',
  'on-tertiary-container': '--md-sys-color-on-tertiary-container',
  error: '--md-sys-color-error',
  'on-error': '--md-sys-color-on-error',
  'error-container': '--md-sys-color-error-container',
  'on-error-container': '--md-sys-color-on-error-container',
  background:'--md-sys-color-background',
  'on-background': '--md-sys-color-on-background',
  surface: '--md-sys-color-surface',
  'on-surface': '--md-sys-color-on-surface',
  'surface-variant': '--md-sys-color-surface-variant',
  'on-surface-variant': '--md-sys-color-on-surface-variant',
  outline: '--md-sys-color-outline',
  'outline-variant': '--md-sys-color-outline-variant',
  shadow:'--md-sys-color-shadow',
  scrim: '--md-sys-color-scrim',
  'inverse-surface': '--md-sys-color-inverse-surface',
  'inverse-on-surface': '--md-sys-color-inverse-on-surface',
  'inverse-primary': '--md-sys-color-inverse-primary',
  'surface-container-lowest': '--md-sys-color-surface-container-lowest',
  'surface-container-low': '--md-sys-color-surface-container-low',
  'surface-container': '--md-sys-color-surface-container',
  'surface-container-high': '--md-sys-color-surface-container-high',
  'surface-container-highest': '--md-sys-color-surface-container-highest',
}

const patterns = {
  colorTones: [0, 5, 10, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 95, 98, 99, 100]
} as const;

type schemeProps = {
  [T in keyof ReturnType<Scheme['toJSON']>]: ColorTones & { DEFAULT: string } | { DEFAULT: string }
};

type ColorTones = {
  [T in typeof patterns.colorTones[number]]: string
}

const generateColor = (palette: TonalPalette): ColorTones => {
  const colorTones = patterns.colorTones.reduce((acc, tone) => {
    const accTone = rgbaFromArgb(palette.tone(tone));
    acc[tone] = `rgb(${accTone.r}, ${accTone.g}, ${accTone.b})`;
    return acc;
  }, {} as ColorTones);
  return colorTones;
}

/** 
 * @param colorPalette ColorPalette
 * @returns
 * Object that has all tones of a material pallet
 * 
 * @see
 * Check in the **{@link https://m3.material.io/styles/color/advanced/define-new-colors Define custom color roles}** 
 * topic all tones of the material palette.
*/
const palette = (colorPalette: CorePaletteColors): schemeProps => {
  const materialPalette = CorePalette.fromColors(colorPalette);
  let objectPalette: any = {};
  for (const [key, value] of Object.entries(designColorsTokens)) {
    const DEFAULT = `rgb(var(${value}) / <alpha-value>)`;
    switch (key) {
      case 'primary':
        objectPalette[key] = { ...generateColor(materialPalette.a1), DEFAULT };
        break;
      case 'secondary':
        objectPalette[key] = { ...generateColor(materialPalette.a2), DEFAULT };
        break;
      case 'tertiary':
        objectPalette[key] = { ...generateColor(materialPalette.a3), DEFAULT };
        break;
      case 'neutral':
        objectPalette[key] = { ...generateColor(materialPalette.n1), DEFAULT };
        break;
      case 'neutralVariant':
        objectPalette[key] = { ...generateColor(materialPalette.n2), DEFAULT };
        break;
      case 'error':
        objectPalette[key] = { ...generateColor(materialPalette.error), DEFAULT };
        break
      default:
        objectPalette[key] = { DEFAULT };
    }
  }
  return objectPalette as schemeProps;
}

export default palette