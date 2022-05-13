# edarkmode.js

A little JavaScript library to add darkmode at your web, its easyly and very customizable.
This library automatically detects the device's thema and if the user decides to change it, it is saved using "LocalStorage".

# Installation

https://github.com/LucianoBrumer/edarkmode.js/tree/releases
```
<script src="edarkmode.js"></script>
```

# Example

https://lucianobrumer.github.io/edarkmode.js/

(Source code: https://github.com/LucianoBrumer/edarkmode.js/tree/page)

# Usage

In your .css file:
```
/*light theme variables*/
:root{
	--bg: #fff;
	--button: #77DD77;
	--text: #444;
}

/*dark theme variables*/
[data-theme="dark"] {
	--bg: #222;
	--button: #444;
    --text: #fff;
}
```
