# tailwind-material

Tailwind plugin to use all design tokens from [Material 3](https://m3.material.io/styles/color/roles).

## How to import:

```js
//tailwind.config.js
import { material } from 'tailwind-material';

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {}
	},
	plugins: [material()] // You can pass the initial pallet obj
};
```

```html
<!-- index.html  -->
<!doctype html>
<html lang="en" data-theme="light">
	<!-- Add data-theme dark for dark mode light for light mode  -->
	<head>
		<meta charset="utf-8" />
		<link rel="icon" href="favicon.png" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body>
		....
	</body>
</html>
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

![GIF](https://i.ibb.co/tC1WvmD/Anima-o3.gif)
