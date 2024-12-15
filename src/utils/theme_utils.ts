/** Return the current theme.
 * @returns dark or light - The current theme.;
 */
export const data_theme = () => (localStorage.getItem('theme') as 'dark' | 'light') ?? 'light';

/**
 * This function toggle the theme of the application using the localStorage
 * data-theme.
 * @returns void
 */
export const changeTheme = () => {
	document.documentElement.setAttribute(
		'data-theme',
		localStorage.getItem('theme') === 'light' ? 'dark' : 'light'
	);
	localStorage.setItem('theme', localStorage.getItem('theme') === 'light' ? 'dark' : 'light');
};

/**
 * This function set the theme of the application using the localStorage
 * data-theme.
 *
 * Put this function on the main function of your aplication.
 * @returns void
 */
export const setThemeOnInit = () => {
	if (
		localStorage.getItem('theme') === 'dark' ||
		(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		document.documentElement.setAttribute('data-theme', 'dark');
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
	}
};
