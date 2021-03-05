const { getIntersection } = require('./getIntersection.js');

describe('getIntersection проверки: ', () => {
	test('массивы состоят из повторяющихся чисел', () => {
		expect(getIntersection([1, 2, 3], [1, 3, 5])).toEqual([1, 3]);
	});
	test('массивы состоят из разных чисел', () => {
		expect(getIntersection([1, 2, 3], [4, 6, 5])).toEqual([]);
	});	
	test('массивы состоят из нескольких повторяющихся чисел', () => {
		expect(getIntersection([1, 2, 3, 3, 3], [4, 6, 5, 5, 1, 1])).toEqual([1]);
	});	
	test('массивы состоят из положительных и отрицательных чисел', () => {
		expect(getIntersection([-2, -1, 1, 2, 3], [-2 ,-1, 4, 6, 5])).toEqual([-2, -1]);
	});	
	test('массивы состоят из неповторяющихся отрицательных чисел', () => {
		expect(getIntersection([-4, -3, -2, -1], [-7, -6, -5])).toEqual([]);
	});	
	test('пустые массивы', () => {
		expect(getIntersection([], [])).toEqual([]);
	});	
	test('Передаем строку вместо массива : ', () => {
        expect(() => getIntersection('string', [1, 2, 3])).toThrow();
    });
});