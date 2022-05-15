const setTheme = theme => {
	localStorage.theme = theme
	theme === 'dark' 
		? document.documentElement.classList.add('dark')
		: document.documentElement.classList.remove('dark')
}

document.querySelector('#toggle-darkmode-button').addEventListener('click', () => 
	localStorage.theme === 'dark'
		? setTheme('light')
		: setTheme('dark')
)

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', element => 
	setTheme(
		element.matches 
			? 'dark' 
			: 'light'
	)
)

localStorage.theme == undefined 
	? window.matchMedia('(prefers-color-scheme: dark)').matches
		? setTheme('dark')
		: setTheme('light')
	: localStorage.theme === 'dark'
		? setTheme('dark')
		: setTheme('light')