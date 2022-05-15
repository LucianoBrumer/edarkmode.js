# edarkmode.js

A little JavaScript library to add darkmode at your web, its easyly and very customizable.
This library automatically detects the device's thema and if the user decides to change it, it is saved using "LocalStorage".

# Installation

https://github.com/LucianoBrumer/edarkmode.js/tree/releases
```
<script src="edarkmode.js"></script>
```
or
```
npm i edarkmode
```

# Usage

In your .css file:

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

# Example

https://lucianobrumer.github.io/edarkmode.js/

(Source code: https://github.com/LucianoBrumer/edarkmode.js/tree/page)
