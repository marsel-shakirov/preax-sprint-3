export const pluralize = (number, suffixes) => {
	const indexCases = [2, 0, 1, 1, 1, 2];
	const remainder = number % 100;

	const index =
		remainder > 4 && remainder < 20 ? 2 : indexCases[Math.min(number % 10, 5)];

	return suffixes[index];
};
