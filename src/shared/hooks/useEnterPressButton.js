import { useEffect } from 'react';

export const useEnterPressButton = (nodeElement, isDisabled = false) => {
	useEffect(() => {
		function handleEnterKeyUp(event) {
			const isDocumentBody = event.target.tagName === 'BODY';

			if (!isDisabled && isDocumentBody && event.code === 'Enter') {
				nodeElement.current.focus();
			}
		}

		window.addEventListener('keyup', handleEnterKeyUp);
		return () => window.removeEventListener('keyup', handleEnterKeyUp);
	}, [isDisabled, nodeElement]);
};
