const { groupBy } = require('./groupBy');

describe('groupBy проверки: ', () => {
	test('передаем функцию, которая возвращает аргумент', () => {
		expect(groupBy(x => x, { a: 1, b: 1, c: 3})).toEqual({ '1': [1, 1], '3': [3] });
	});
	test('передаем функцию, которая увеличивает аргумент на 1', () => {
		expect(groupBy(x => x+1, { a: 1, b: 2})).toEqual({ '2': [1], '3': [2]});
	});
	test('передаем пустой объект', () => {
		expect(groupBy(x => x, {})).toEqual({});
	});
	test('передаем строку вместо объекта', () => {
		expect(groupBy(x => x, 'str')).toEqual({'s': ['s'], 't': ['t'], 'r': ['r']});
	});
	test('передаем объект с объектами', () => {
		expect(groupBy(x => x, {a: {r: 1}, b: {t: 2}})).toStrictEqual({'[object Object]': [{r: 1}, {t: 2}]});
	});
});