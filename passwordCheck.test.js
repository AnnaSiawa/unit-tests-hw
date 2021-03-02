const { passwordCheck } = require('./passwordCheck.js');

describe('passwordCheck тесты: ', () => {
	test('пароль без цифр', () => {
		expect(passwordCheck('JHnb=/Fgvhhk')).toBe(false);
	});
	test('пароль только из цифр', () => {
		expect(passwordCheck('25412565231')).toBe(false);
	});
	test('пароль только из букв', () => {
		expect(passwordCheck('hjghbnfffjgk')).toBe(false);
	});
	test('пароль менее 10 символов', () => {
		expect(passwordCheck('1/jhKl,m')).toBe(false);
	});
	test('пароль 10 символов', () => {
		expect(passwordCheck('1/kjJK2546')).toBe(true);
	});
	test('пароль более 10 символов', () => {
		expect(passwordCheck('1/kjJK2546lk')).toBe(true);
	});
	test('пароль без спец символов', () => {
		expect(passwordCheck('1jkFD546lkh')).toBe(false);
	});
	test('пароль без букв верхнего регистра', () => {
		expect(passwordCheck('1*jgjdhdjdhh')).toBe(false);
	});
	test('пароль без букв нижнего регистра', () => {
		expect(passwordCheck('1*DLKJKJFNHGKJDFNG')).toBe(false);
	});
	test('пароль c кириллицей', () => {
		expect(passwordCheck('1*DLKJKJFNHлжЫnq')).toBe(true);
	});
	test('передаем число Number', () => {
		expect(passwordCheck(15)).toBe(false);
	});
	test('передаем Boolean', () => {
		expect(passwordCheck(false)).toBe(false);
	});
});
