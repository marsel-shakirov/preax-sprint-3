import { useEffect } from 'react';

export const useEnterPressButton = (callback, isDisabled = false) => {
	useEffect(() => {
		function handleEnterKeyUp(event) {
			const isNotButton = event.target.tagName !== 'BUTTON';
			console.log(event.target.tagName, isNotButton);
			if (!isDisabled && isNotButton && event.code === 'Enter') {
				callback();
			}
		}

		window.addEventListener('keyup', handleEnterKeyUp);
		return () => window.removeEventListener('keyup', handleEnterKeyUp);
	}, [callback, isDisabled]);
};
