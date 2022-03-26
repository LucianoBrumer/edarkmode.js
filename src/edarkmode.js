let darkmodeToggleButton = document.querySelector("#darkmode-toggle-button");

const setTheme = t => {
	document.documentElement.setAttribute("data-theme", t);
	localStorage.setItem("theme", t);
}

darkmodeToggleButton.addEventListener("click", e => localStorage.getItem("theme") == "light" ? setTheme("dark") : setTheme("light"));
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => setTheme(e.matches ? "dark" : "light"));

localStorage.getItem("theme") == null ? ((window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? setTheme("dark") : setTheme("light")) : localStorage.getItem("theme") == "dark" ? setTheme("dark") : setTheme("light");

module.exports = {setTheme}