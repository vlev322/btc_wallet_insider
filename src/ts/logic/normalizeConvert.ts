export const normalizeConvertValue = (...values: number[]): number[] => {
	return values.map((value): number => +value * 0.00000001);
};
