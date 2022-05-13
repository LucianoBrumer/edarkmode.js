# edarkmode.js
A little JavaScript library to add darkmode at your web, its easyly and very customizable.
This library automatically detects the device's thema and if the user decides to change it, it is saved using "LocalStorage".

# Installation
https://github.com/LucianoBrumer/edarkmode.js/tree/releases
or
```
npm i edarkmode
```

# Example
https://lucianobrumer.github.io/edarkmode.js/
(Source code: https://github.com/LucianoBrumer/edarkmode.js/tree/page)

# Usage
Use this in your footer:
```
<script src="edarkmode.js"></script>
```
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
