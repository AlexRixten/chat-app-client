export const getObjectSearchParams = (search: string) => {
	return Object.fromEntries(new URLSearchParams(search));
};
