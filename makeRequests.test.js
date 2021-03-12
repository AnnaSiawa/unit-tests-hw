const {makeRequests} = require('./makeRequests');
const axios = require('axios');

jest.mock('axios');

describe('makeRequests тесты', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	test('успешная загрузка данных, массив состоит из 2 неповторяющихся ссылок, одновременно выполняется 0 запросов', () => {
		const data = [1,2];
		const urls = ['https://github.com', 'https://github.com/AnnaSiawa'];
		axios.mockImplementation(()=>Promise.resolve(data));
		expect(makeRequests(urls,0)).resolves.toEqual([]);
		expect(axios).toHaveBeenCalledTimes(0);
	});
	test('Успешная загрузка данных, массив состоит из 2 неповторяющихся ссылок, одновременно выполняется 1 запрос', ()=> {
	    const data = [1,2];
		const urls = ['https://github.com', 'https://github.com/AnnaSiawa'];
	    axios.mockImplementation(()=>Promise.resolve(data));
	    expect(makeRequests(urls,1)).resolves.toEqual(data);
	    expect(axios).toHaveBeenCalledTimes(1);
	    expect(axios).toHaveBeenCalledWith({url:urls[0]});
    });
     test('Успешная загрузка данных, массив состоит из 2 неповторяющихся ссылок, одновременно выполняется 2 запроса, последовательность ссылок 1,2', ()=> {
	    const data=[
	      {url:'https://github.com', result:1},
	      {url:'https://github.com/AnnaSiawa', result:2},
	    ];
	    axios.mockImplementation(()=>Promise.resolve([data[0].result,data[1].result]));
	    expect(makeRequests([data[0].url,data[1].url],2)).resolves.toEqual([data[0].result,data[1].result]);
	    expect(axios).toHaveBeenCalledTimes(2);
	    expect(axios).toHaveBeenNthCalledWith(1,{url:data[0].url});
	    expect(axios).toHaveBeenNthCalledWith(2,{url:data[1].url});
 	 });
 	 test('Успешная загрузка данных, массив состоит из 2 неповторяющихся ссылок, одновременно выполняется 2 запроса, изменена последовательность ссылок в массиве на 2,1', ()=> {
	    const data=[
	      {url:'https://github.com', result:1},
	      {url:'https://github.com/AnnaSiawa', result:2},
	    ];
	    axios.mockImplementation(()=>Promise.resolve([data[1].result,data[0].result]));
	    expect(makeRequests([data[1].url,data[0].url],2)).resolves.toEqual([data[1].result,data[0].result]);
	    expect(axios).toHaveBeenCalledTimes(2);
	    expect(axios).toHaveBeenNthCalledWith(1,{url:data[1].url});
	    expect(axios).toHaveBeenNthCalledWith(2,{url:data[0].url});
	  });
 	 test('Успешная загрузка данных, массив состоит из 1 ссылки', ()=> {
	    const data=[1];
	    const urls=['https://github.com'];
	    axios.mockImplementation(()=>Promise.resolve(data));
	    expect(makeRequests(urls,1)).resolves.toEqual(data);
	    expect(axios).toHaveBeenCalledTimes(1);
	    expect(axios).toHaveBeenCalledWith({url:urls[0]});
	  });
 	 test('9) Успешная загрузка данных, массив состоит из 1 ссылки, одновременно выполняется 3 запроса', ()=> {
	    const data=[1];
	    const urls=['https://github.com'];
	    axios.mockImplementation(()=>Promise.resolve(data));
	    expect(makeRequests(urls,3)).resolves.toEqual(data);
	    expect(axios).toHaveBeenCalledTimes(1);
	    expect(axios).toHaveBeenCalledWith({url:urls[0]});
	  });
 	 test('11) Ошибка загрузки данных', ()=> {
	    const errorMessage='Error';
	    axios.mockImplementation(()=>Promise.reject(new Error(errorMessage)));
	    expect(makeRequests(['https://github.com'],1)).rejects.toThrow(errorMessage);
	  });
});