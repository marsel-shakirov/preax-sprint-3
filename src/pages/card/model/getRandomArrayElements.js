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
		const index = Math.floor(Math.random() * array.length);

		if (storage.has(index)) continue;
		storage.add(index);
		uniqueCountries.push(array[index]);
	} while (storage.size < count);

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
