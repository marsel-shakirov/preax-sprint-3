export function unSubscribe(obj) {
	return function (element) {
		for (const key in this) {
			if (this[key].includes(element)) return true;
		}
		return false;
	}.bind(obj);
}
