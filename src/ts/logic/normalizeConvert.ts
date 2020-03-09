const normalizeConvertValue = (...values: number[]): number[] => {
	return values.map((value): number => +(value * 0.00000001).toFixed(8));
};

export default normalizeConvertValue;
