import { useEffect } from 'react';

export const useDigitCheckedAnswer = callback => {
	useEffect(() => {
		function handleDigitKeyDown(event) {
			switch (event.code) {
				case 'Digit1':
					document.querySelector('[data-value="1"]').click();
					break;
				case 'Digit2':
					document.querySelector('[data-value="2"]').click();
					break;
				case 'Digit3':
					document.querySelector('[data-value="3"]').click();
					break;
				case 'Digit4':
					document.querySelector('[data-value="4"]').click();
					break;
				case 'Backspace':
					document.querySelectorAll('[data-value]').forEach(element => {
						if (!element.disabled) {
							element.checked = false;
							callback();
						}
					});
			}
		}

		window.addEventListener('keydown', handleDigitKeyDown);
		return () => window.removeEventListener('keydown', handleDigitKeyDown);
	});
};
