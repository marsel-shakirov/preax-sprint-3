export const getRandomArrayElements = (array, count, correctAnswer = null) => {
	const isCountMoreThanArrayLength = count > array.length;
	const isCountLessThanOne = count < 1;
	if (isCountLessThanOne || isCountMoreThanArrayLength) return null;

	const storage = new Set();
	const uniqueCountries = [];

	if (correctAnswer) {
		const indexCorrectAnswer = array.indexOf(correctAnswer);
		storage.add(indexCorrectAnswer);
		uniqueCountries.push(array[indexCorrectAnswer]);
	}

	do {
		// берем случайный номер от 0 до длины массива
		const i = Math.floor(Math.random() * array.length);
		// проверяем не брали ли уже такой
		if (storage.has(i)) continue;
		// запоминаем что взяли
		storage.add(i);
		uniqueCountries.push(array[i]);
	} while (storage.size < count);

	// перетасовать вопросы с правильным ответом
	if (correctAnswer) {
		function shuffle(array) {
			let arr;
			for (let i = array.length - 1; i > 0; i--) {
				return array.sort(() => Math.random() - 0.5);
			}
			return arr;
		}
		return shuffle(uniqueCountries);
	}
	return uniqueCountries;
};
