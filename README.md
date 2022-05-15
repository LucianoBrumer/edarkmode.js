# edarkmode.js

A little JavaScript library to add darkmode in your project, its simple and with customizable colors.
This library automatically detects the device's thema and if the user decides to change it, it is saved using "LocalStorage".
Compatible with Tailwind CSS.

# Usage

```
<button id="toggle-darkmode-button"> Change Theme </button>
```

```
/*light mode colors*/
:root {
    --bg: #fff;
    --button: #FCFCFC;
    --text: #777;
}

/*dark mode colors*/
html.dark {
    --bg: #222;
    --button: #444;
    --text: #fff;
}
```

# Installation

https://github.com/LucianoBrumer/edarkmode.js/tree/releases
```
<script src="edarkmode.js"></script>
```
or
```
npm i edarkmode
```

# Example

https://lucianobrumer.github.io/edarkmode.js/

(Source code: https://github.com/LucianoBrumer/edarkmode.js/tree/page)
