import { useEffect } from 'react';

export const useEnterPressButton = (callback, isDisabled = false) => {
	useEffect(() => {
		function handleEnterKeyUp(event) {
			// const isDocumentBody = event.target.tagName === 'BODY';

			if (!isDisabled && event.code === 'Enter') {
				callback();
			}
		}

		window.addEventListener('keyup', handleEnterKeyUp);
		return () => window.removeEventListener('keyup', handleEnterKeyUp);
	}, [callback, isDisabled]);
};
