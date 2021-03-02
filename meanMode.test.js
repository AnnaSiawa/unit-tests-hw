const { meanMode } = require('./meanMode.js');

describe('meanMode тесты: ', () => {
	test('передаем пустой массив', () => {
		expect(meanMode([])).toBe(false);
	});
	test('передаем массив c одним числом', () => {
		expect(meanMode([1])).toBe(true);
	});
	test('передаем валидный массив c одинаковыми числами', () => {
		expect(meanMode([1, 1, 1, 1])).toBe(true);
	});
	test('передаем валидный массив c разными числами', () => {
		expect(meanMode([4, 4, 4, 6, 2])).toBe(true);
	});
	test('передаем невалидный массив c разными числами', () => {
		expect(meanMode([1, 2, 3, 4])).toBe(false);
	});
	test('передаем невалидный массив c разными числами, встречающимися одинаковое количество раз', () => {
		expect(meanMode([1, 1, 2, 2, 5])).toBe(false);
	});
	test('передаем валидный массив с отрицательным числом:', () => {
		expect(meanMode([3, -2, 2, 2, 5])).toBe(true);
	});
});