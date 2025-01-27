import { useEffect } from 'react';

export const useEnterPressButton = (nodeElement, isDisabled = false) => {
	useEffect(() => {
		function handleEnterKeyDown(event) {
			const isDocumentBody = event.target.tagName === 'BODY';

			if (!isDisabled && isDocumentBody && event.code === 'Enter') {
				nodeElement.current.focus();
			}
		}

		window.addEventListener('keydown', handleEnterKeyDown);
		return () => window.removeEventListener('keydown', handleEnterKeyDown);
	}, [isDisabled, nodeElement]);
};
