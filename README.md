# tailwind-material

Tailwind plugin to use all design tokens from [Material 3](https://m3.material.io/styles/color/roles).

## How to import:

```js
//tailwind.config.js
import { material } from 'tailwind-material';

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [material()], // You can pass the initial pallet obj
};
```

```ts
type InitialPalletColorInHex = {
  primary?: string;
  secondary?: string;
  tertiary?: string;
  neutral?: string;
  neutralVariant?: string;
  error?: string;
};
```

## How to use:

![GIF](https://pouch.jumpshare.com/preview/cFhBxHzd32l_8k03nsXRqJafc2y08eoCO3JSp7OWrRZeHw2BncPVdJWYrdaKzHidnjBfHdo_Zl1zFpdePUJOw1O5a4r-OC2jaPk5Z94mY3c)

The library also has basic styled elements and utils as dialogs and support to dark and light theme.
