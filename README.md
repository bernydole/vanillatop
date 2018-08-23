# Vanillatop

![LICENSE MIT](https://img.shields.io/npm/l/vanillatop.svg)
![version](https://img.shields.io/npm/v/vanillatop.svg)
![downloads](https://img.shields.io/npm/dt/vanillatop.svg)
![dependencies](https://david-dm.org/bernydole/vanillatop.svg)

Lightweight plugin in vanilla javascript to animate scrolling to the top of the page.

![Vanillatop](https://www.russianconcept.ch/cloud/github/vanillatop/img/vanillatop.png)

### Changelog

V 1.0.0 - Initial version

### Features

-   Extremely lightweight (1KB after gzip and minify)
-   Responsive
-   Cross Browser Compatible (work smooth in any modern browser)
-   Scss file to tweak the design to your needs
-   Predefined options that garanties a smooth functioning
-   JQuery independant
-   Auto hide button on top of webpage

## Download

Download directly from github or unpkg and install it to your site:

<https://github.com/bernydole/vanillatop>

or via npm:

```bash
npm install vanillatop
```

or as external files without having to download and host them:

```html
<link rel="stylesheet" href="https://unpkg.com/vanillatop/dist/vanillatop.min.css">
<script src="https://unpkg.com/vanillatop/dist/vanillatop.min.js"></script>
```

## Installation

-   Download **vanillatop.min.js** and **vanillatop.min.css**.
-   Link them to your html page.
-   Add your link whith the class `vanillatop` wherewer you want inside `<body>` tags.

```html
<html>
	<head>
		<link rel="stylesheet" href="https://unpkg.com/vanillatop/dist/vanillatop.min.css">
	</head>
	<body>
		<!-- Your HTML content -->
		<a href="#" class="vanillatop"></a>
		<script src="https://unpkg.com/vanillatop/dist/vanillatop.min.js"></script>
	</body>
</html>
```

## Customization

### Style sheet

The plugin has an `scss` style sheet file that you can modify to adapt to your needs.

`src/vanillatop.scss`

## Additional topics

### Dependencies

Vanillatop has no dependency. JQuery is not needed due to the fact that this plugin is written in Vanilla Javascript.

### Browser support

Vanillatop should work properly on all evergreen browsers and IE9+.

### Release policy

Vanillatop adheres to [Semantic Versioning](https://semver.org/).

### Licence

This plugin is open-sourced software licensed under the [MIT licence](https://opensource.org/licenses/MIT) and is distributed free of charge.
