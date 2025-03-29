import { getRandomArrayElements, shuffle, unSubscribe } from '@/shared/utils';

export const getQuizQuestions = (quizQuestions, count) => {
	const { questions, countries } = quizQuestions;

	const store = {
		beforeAnswers: [],
		beforeCountries: [],
	};

	const unSubscribeStoreElements = unSubscribe(store);

	return getRandomArrayElements(questions, count).map(obj => {
		const correctAnswer = obj.correctAnswer;
		store.beforeAnswers.push(correctAnswer);

		const randomCountries = getRandomArrayElements(
			countries,
			3,
			unSubscribeStoreElements
		);

		store.beforeCountries = [...randomCountries];

		return {
			...obj,
			countries: shuffle([...randomCountries, correctAnswer]),
		};
	});
};
