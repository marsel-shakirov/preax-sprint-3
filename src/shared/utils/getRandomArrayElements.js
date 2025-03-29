export const getRandomArrayElements = (array, count, unSubscribe = null) => {
	const isCountMoreThanArrayLength = count > array.length;
	const isCountLessThanOne = count < 1;
	if (isCountLessThanOne || isCountMoreThanArrayLength) return null;

	const storage = new Set();
	const uniqueCountries = [];

	while (storage.size < count) {
		const index = Math.floor(Math.random() * array.length);
		const isElement = unSubscribe ? unSubscribe(array[index]) : null;

		if (isElement || storage.has(index)) continue;
		storage.add(index);
		uniqueCountries.push(array[index]);
	}

	return uniqueCountries;
};
