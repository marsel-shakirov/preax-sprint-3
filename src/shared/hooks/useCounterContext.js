import { CounterContext } from '@/shared/context';
import { useContext } from 'react';

export function useCounterContext() {
	return useContext(CounterContext);
}
