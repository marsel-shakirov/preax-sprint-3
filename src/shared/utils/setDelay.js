export async function setDelay(delay = 1500) {
	return await new Promise(resolve => setTimeout(resolve, 1500));
}
