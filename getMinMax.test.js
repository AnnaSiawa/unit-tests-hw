const { getMinMax } = require('./getMinMax');

describe('getMinMax проверки: ', () => {
	test('передаем пустую строку', () => {
		expect(getMinMax('')).toEqual({min: Infinity, max: -Infinity});
	});
	test('передаем строку без чисел', () => {
		expect(getMinMax('String without numbers')).toEqual({min: Infinity, max: -Infinity});
	});
	test('передаем строку с одним положительным числом', () => {
		expect(getMinMax('Positive number 5')).toEqual({min: 5, max: 5});
	});
	test('передаем строку с одним отрицательным числом', () => {
		expect(getMinMax('Positive number -5')).toEqual({min: -5, max: -5});
	});
	test('передаем строку с положительными числами', () => {
		expect(getMinMax('1 and 2 and 15')).toEqual({min: 1, max: 15});
	});
	test('передаем строку с отрицательными числами', () => {
		expect(getMinMax('-1 and -2 and -15')).toEqual({min: -15, max: -1});
	});
	test('передаем строку с положительными и отрицательными числами', () => {
		expect(getMinMax('-1 and -2 and -15, 5, 15')).toEqual({min: -15, max: 15});
	});
	test('передаем строку с Infinity и числом', () => {
		expect(getMinMax('Infinity and 15')).toEqual({min: 15, max: Infinity});
	});
	test('передаем строку с -Infinity и числом', () => {
		expect(getMinMax('-Infinity and 15')).toEqual({min: -Infinity, max: 15});
	});
	
});