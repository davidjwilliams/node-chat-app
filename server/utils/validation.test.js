const expect = require('expect');
var {isRealString} = require('./validation');

describe('isRealString', () => {
	it('should reject non-string values', () => {
		var string = 1;
		expect(isRealString(string)).toBe(false);
	});

	it('should reject string with only spaces', () => {
		var string = "   ";
		expect(isRealString(string)).toBe(false);
	});

	it('should allow string with non-space characters', () => {
		var string = " Test string ";
		expect(isRealString(string)).toBe(true);
	});
});
