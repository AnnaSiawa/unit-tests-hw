const commission = require('./commission.js');
const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;

function test(text, a, res) {
	let flyDate = Date.now() + a * MILLISECONDS_IN_DAY;

	if (isNaN(flyDate)) {
		console.log('Ошибка типа данных');
	} else {
		if (commission(flyDate) === res) {
			console.log(text, 'Успех');
		} else {
			console.log (text, 'Ошибка');
		}
	}
}

test('Граница flyDate = 10 дней: ', 10, 20);
test('Значение рядом с границей flyDate > 10 дней: ', 10.1, 0);
test('Значение рядом с границей flyDate < 10 дней: ', 9.9, 20);

test('Граница flyDate = 5 дней: ', 5, 50);
test('Значение рядом с границей flyDate > 5 дней: ', 5.1, 20);
test('Значение рядом с границей flyDate < 5 дней: ', 4.9, 50);

test('Граница flyDate = 1 день: ', 1, 75);
test('Значение рядом с границей flyDate > 1 дня: ', 1.1, 50);
test('Значение рядом с границей flyDate < 1 дня: ', 0.9, 75);

test('Граница flyDate = 0 дней: ', 0, 100);
test('Значение рядом с границей flyDate > 0 дней: ', 0.1, 75);
test('Значение рядом с границей flyDate < 0 дней: ', -0.1, 100);

