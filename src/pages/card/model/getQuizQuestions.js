import { getRandomArrayElements, shuffle, unSubscribe } from '@/shared/utils';

export const getQuizQuestions = (quizQuestions, count) => {
	const { questions, countries } = quizQuestions;

	const previousElements = {
		beforeAnswers: [],
		beforeCountries: [],
	};

	const unSubscribePreviousElements = unSubscribe(previousElements);

	return getRandomArrayElements(questions, count).map(obj => {
		const correctAnswer = obj.correctAnswer;
		previousElements.beforeAnswers.push(correctAnswer);

		const randomCountries = getRandomArrayElements(
			countries,
			3,
			unSubscribePreviousElements
		);

		previousElements.beforeCountries = [...randomCountries];

		return {
			...obj,
			countries: shuffle([...randomCountries, correctAnswer]),
		};
	});
};
