const { commission } = require('./commission');
const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;
let flyDate = a => Date.now() + a * MILLISECONDS_IN_DAY;

describe('Граница flyDate = 10 дней:', () => {
	test('Граница flyDate = 10 дней:', () => {
		expect(commission(flyDate(10))).toBe(20);
	});
	test('Значение рядом с границей flyDate > 10 дней:', () => {
		expect(commission(flyDate(10.1))).toBe(0);
	});
	test('Значение рядом с границей flyDate < 10 дней:', () => {
		expect(commission(flyDate(9.9))).toBe(20);
	});
});

describe('Граница flyDate = 5 дней:', () => {
	test('Граница flyDate = 5 дней:', () => {
		expect(commission(flyDate(5))).toBe(20);
	});
	test('Значение рядом с границей flyDate > 5 дней:', () => {
		expect(commission(flyDate(5.1))).toBe(20);
	});
	test('Значение рядом с границей flyDate < 5 дней:', () => {
		expect(commission(flyDate(4.9))).toBe(50);
	});
});

describe('Граница flyDate = 5 дней:', () => {
	test('Граница flyDate = 1 день:', () => {
		expect(commission(flyDate(1))).toBe(50);
	});
	test('Значение рядом с границей flyDate > 1 дня:', () => {
		expect(commission(flyDate(1.1))).toBe(50);
	});
	test('Значение рядом с границей flyDate < 1 дня:', () => {
		expect(commission(flyDate(0.9))).toBe(75);
	});
});

describe('Граница flyDate = 5 дней:', () => {
	test('Граница flyDate = 0 дней:', () => {
		expect(commission(flyDate(0))).toBe(75);
	});
	test('Значение рядом с границей flyDate > 0 дней:', () => {
		expect(commission(flyDate(0.1))).toBe(75);
	});
	test('Значение рядом с границей flyDate < 0 дней:', () => {
		expect(commission(flyDate(-0.1))).toBe(100);
	});
});