import { ResultContext } from '@/shared/context';
import { useContext } from 'react';

export function useResultContext() {
	return useContext(ResultContext);
}
