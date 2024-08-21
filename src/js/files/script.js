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

async function initForm() {
	const API_KEY = '7536362957:AAFkDfJz8ZmKNG20AObi8KSLdmhT9o4gCIo';
	const CHAT_ID = '@KosmetikStudioTop';
	const URL = `https://api.telegram.org/bot${API_KEY}/sendMessage`;

	const popupButton = document.querySelector('.popup-link');
	const popupTextEl = document.querySelector('.popup__text');
	const form = document.querySelector('.feedback__form');
	const loadingClass = '_loading';

	async function formSubmit(e) {
		e.preventDefault();

		const { contact } = Object.fromEntries(new FormData(e.target).entries());

		const text = `Заявка з сайту!\nТелефон / Telegram: ${contact}`;

		try {
			document.documentElement.classList.add(loadingClass);

			const response = await fetch(URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					chat_id: CHAT_ID,
					text,
				}),
			});

			if (response.ok) {
				popupTextEl.textContent = 'Thanks! We will contact you.';

				popupButton.click();
			}
		} catch (e) {
			popupTextEl.textContent = 'Oooops. An error has occurred';
		} finally {
			document.documentElement.classList.remove(loadingClass);
		}
	}

	if (form && popupButton) {
		form.addEventListener('submit', formSubmit);
	}
}

document.addEventListener('DOMContentLoaded', () => {
	initLanguages();
	initDropdown();
	initForm();
});
