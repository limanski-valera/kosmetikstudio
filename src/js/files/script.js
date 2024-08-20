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

document.addEventListener('DOMContentLoaded', () => {
	initLanguages();
});
