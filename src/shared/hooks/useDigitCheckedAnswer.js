import { useEffect } from 'react';

export const useDigitCheckedAnswer = callback => {
	useEffect(() => {
		function handleDigitKeyDown(event) {
			const digitMatch = event.code.match(/^Digit(\d)$/);
			const digit = digitMatch ? digitMatch[1] : null;

			if (digit) {
				const element = document.querySelector(`[data-value="${digit}"]`);
				if (element) {
					element.click();
				}
			} else if (event.code === 'Backspace') {
				document.querySelectorAll('[data-value]').forEach(element => {
					if (!element.disabled) {
						element.checked = false;
						callback(true);
					}
				});
			}
		}

		window.addEventListener('keydown', handleDigitKeyDown);
		return () => window.removeEventListener('keydown', handleDigitKeyDown);
	});
};
