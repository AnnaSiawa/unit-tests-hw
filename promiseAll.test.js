const { promiseAll } = require('./promiseAll');

describe('promiseAll проверки: ', () => {
	test('передаем промисы с resolve', () => {
		expect(promiseAll([Promise.resolve(1), Promise.resolve(2)])).resolves.toEqual([1, 2]);
	});
	test('передаем промисы с resolve и reject', () => {
		expect(promiseAll([Promise.resolve(1), Promise.reject(2)])).rejects.toBe(2);
	});
	test('передаем пустой массив', () => {
		expect(promiseAll([])).rejects.toEqual('empty arr');
	});
});