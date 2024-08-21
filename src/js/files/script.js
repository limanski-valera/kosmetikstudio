// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

function initLanguages() {
	if (document.querySelector('.language')) {
		const wrapper = document.querySelector('.language');
		const activeClass = '_lang-open';

		document.addEventListener('click', (e) => {
			if (e.target.closest('.language__button')) {
				wrapper.classList.toggle(activeClass);
			} else if (wrapper.classList.contains(activeClass) && !e.target.closest('.language')) {
				wrapper.classList.remove(activeClass);
			}
		});
	}
}

function initDropdown() {
	if (document.querySelector('.dropdown')) {
		const dropdownClass = '.dropdown';
		const activeClass = '_open';
		const buttonSelector = '.dropdown__button';
		
		const dropdownsList = document.querySelectorAll(dropdownClass);

		document.addEventListener('click', (e) => {
			if (e.target.closest(buttonSelector)) {
				e.preventDefault();

				const dropdown = e.target.closest(dropdownClass);

				dropdown && dropdown.classList.toggle(activeClass);
			} else if (!e.target.closest(dropdownClass)) {
				dropdownsList.forEach((dropdown) => {
					dropdown.classList.contains(activeClass) ? dropdown.classList.remove(activeClass) : null;
				});
			}
		});
	}
}

document.addEventListener('DOMContentLoaded', () => {
	initLanguages();
	initDropdown();
});
