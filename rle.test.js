const { rle } = require('./rle.js');

describe('rle тесты', () => {
	test('строка с повторяющимися символами в верхнем регистре', () => {
		expect(rle('AABBBCCCC')).toBe('A2B3C4');
	});
	test('строка с повторяющимися символами в нижнем регистре', () => {
		expect(rle('aabbbcccc')).toBe('a2b3c4');
	});
	test('строка с неповторяющимися символами в верхнем регистре', () => {
		expect(rle('ABC')).toBe('ABC');
	});
	test('строка с неповторяющимися символами в нижнем регистре', () => {
		expect(rle('abc')).toBe('abc');
	});
	test('строка с повторяющимися символами в разном регистре', () => {
		expect(rle('AaBBccDe')).toBe('AaB2c2De');
	});
	test('строка с числами', () => {
		expect(rle('Ab2ccD')).toBe('Ab2c2D');
	});
});