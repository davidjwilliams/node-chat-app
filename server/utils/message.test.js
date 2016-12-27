var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var from = 'David';
		var text = 'Test';
		var res = generateMessage(from, text);
		expect(res).toInclude({from, text});
		expect(res.createdAt).toBeA('number');
	});
});

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		var from = 'David';
		var lat = 1;
		var lon = 1;
		var url = 'https://www.google.com/maps?q=1,1';
		var res = generateLocationMessage(from, lat, lon);
		expect(res).toInclude({from, url});
		expect(res.createdAt).toBeA('number');
	});
});