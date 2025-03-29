import { getRandomArrayElements, shuffle } from '@/shared/utils';

export const getQuizQuestions = (quizQuestions, count) => {
	const { questions, countries } = quizQuestions;
	const correctAnswers = [];

	return getRandomArrayElements(questions, count).map(obj => {
		const correctAnswer = obj.correctAnswer;
		correctAnswers.push(correctAnswer);

		const randomCountries = getRandomArrayElements(
			countries,
			3,
			correctAnswers
		);

		return {
			...obj,
			countries: shuffle([...randomCountries, correctAnswer]),
		};
	});
};
