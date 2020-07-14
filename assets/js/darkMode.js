let userPreference = window.matchMedia("(prefers-color-scheme: dark)"); 
let themeStored = localStorage.getItem('theme') === "true";

debugPrint("found stored theme: " + themeStored);

// First time user comes to site theme is not set so get from thier preferences
if (themeStored === null) {
	if (userPreference.matches) {
		debugPrint("user preference on dark mode");
		setDarkMode();
	} else {
		debugPrint("user preference on light");
		setLightMode();
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
	debugPrint("user switching theme")
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
