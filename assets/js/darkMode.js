let userPreference = window.matchMedia("(prefers-color-scheme: dark)"); 
let themeStored = localStorage.getItem('theme') === "true";

console.log(themeStored);

// First time user comes to site theme is not set so get from thier preferences
if (themeStored === null) {
	if (userPreference.matches) {
		console.log("user on dark mode");
		$("#darkModeSwitch")[0].checked = true;
		localStorage.setItem('theme', true);
		document.documentElement.setAttribute('data-theme', 'dark');
	} else {
		console.log("user on light");
		$("#darkModeSwitch")[0].checked = false;
		localStorage.setItem('theme', false);
		document.documentElement.setAttribute('data-theme', 'light');
	}
} else {
	if (themeStored) {
		setDarkMode();
	} else {
		setLightMode();
	}
}

// Listens for change to switch and updates theme
$("#darkModeSwitch").change(modeSwitcher);

function setDarkMode() {
	document.documentElement.setAttribute('data-theme', 'dark');
	localStorage.setItem('theme', true);
	$("#darkModeSwitch")[0].checked = true;
}

function setLightMode() {
	document.documentElement.setAttribute('data-theme', 'light');
	localStorage.setItem('theme', false);
	$("#darkModeSwitch")[0].checked = false;
}

function modeSwitcher() {
	let theme = $("#darkModeSwitch")[0].checked;
	if (theme === true) {
		setDarkMode();
	} else if (theme === false) {
		setLightMode();
	} else if (systemInitiatedDark.matches) {	
		setDarkMode();
	} else {
		setLightMode();
	}
}
