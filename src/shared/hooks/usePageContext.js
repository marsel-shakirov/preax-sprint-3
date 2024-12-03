import { PageContext } from '@/shared/context';
import { useContext } from 'react';

export function usePageContext() {
	return useContext(PageContext);
}
