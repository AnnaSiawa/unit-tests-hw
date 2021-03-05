const { limitCalls } = require('./limitCalls');

describe('limitCalls проверки: ', () => {
	test('передаем максимальное число вызовов 2', () => {
		const limited = limitCalls(() => 3, 2);
		expect(limited()).toEqual(3);
		expect(limited()).toEqual(3);
		expect(limited()).toBeUndefined();
	});
	test('передаем отрицательное число вызовов', () => {
		const limited = limitCalls(() => 3, -1);
		expect(limited()).toBeUndefined();
	});
	test('передаем число вызовов равное 0', () => {
		const limited = limitCalls(() => 3, 0);
		expect(limited()).toBeUndefined();
	});
});