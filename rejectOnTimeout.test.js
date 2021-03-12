const { rejectOnTimeout } = require('./rejectOnTimeout');

describe('rejectOnTimeout tests', ()=>{
  beforeEach(()=>{
    jest.useFakeTimers();
  });

  test('Передаём промис с resolve', ()=> {
    expect(rejectOnTimeout(Promise.resolve(1),1000)).resolves.toEqual(1);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });

  test('Передаём промис с reject', ()=> {
    expect(rejectOnTimeout(Promise.reject(1),1000)).rejects.toEqual(1);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });

  test('Вместо промиса передаём строку', ()=> {
    jest.runAllTimers();
    expect(rejectOnTimeout('Promise',1000)).rejects.toThrow();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });

  test('Передаём промис с resolve и время 0 мсек', ()=> {
    jest.runAllTimers();
    expect(rejectOnTimeout(Promise.resolve(1),0)).resolves.toEqual(1);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 0);
  });

  test('Ошибка загрузки данных', ()=> {
    jest.runAllTimers();
    expect(rejectOnTimeout(Promise.reject(new Error('timeout_error')),100)).rejects.toThrow('timeout_error');
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 100);
  });
});