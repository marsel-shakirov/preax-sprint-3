import { useEffect } from 'react';

export const useEnterPressButton = (
	callback,
	isDisabled = false,
	isTabFocusedElement = false
) => {
	useEffect(() => {
		function handleEnterKeyUp(event) {
			let isNotFocusedButton = true;

			if (isTabFocusedElement) {
				isNotFocusedButton = event.target.tagName !== 'BUTTON';
			}

			if (!isDisabled && isNotFocusedButton && event.code === 'Enter') {
				callback();
			}
		}

		window.addEventListener('keyup', handleEnterKeyUp);
		return () => window.removeEventListener('keyup', handleEnterKeyUp);
	}, [callback, isDisabled, isTabFocusedElement]);
};
