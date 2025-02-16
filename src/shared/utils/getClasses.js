export const getClasses = (styles, styled) => {
	return styled.classes.map(el => styles[el]).join(' ');
};
