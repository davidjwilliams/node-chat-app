const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

	beforeEach(() => {
		users = new Users();
		users.users = [{
			id: '1',
			name: 'D1',
			room: 'Node Course'
		},{
			id: '2',
			name: 'D2',
			room: 'React Course'
		},{
			id: '3',
			name: 'D3',
			room: 'Node Course'
		}];
	});

	it('should add new user', () => {
		var users = new Users();
		var user = {
			id: '123',
			name: 'David',
			room: 'P & R Fans'
		};
		var resUser = users.addUser(user.id, user.name, user.room);
		expect(users.users).toEqual([user]);
	});

	it('should remove a user', () => {
		var user = users.removeUser('3');
		expect(user.id).toEqual('3');
	});

	it('should not remove a user', () => {
		var user = users.removeUser('4');
		expect(user).toNotExist();
	});

	it('should find user', () => {
		var user = users.getUser('1');
		expect(user).toExist();
	});

	it('should not find user', () => {
		var user = users.getUser('4');
		expect(user).toNotExist();
	});

	it('should return name for node course', () => {
		var userList = users.getUserList('Node Course');
		expect(userList).toEqual(['D1', 'D3']);
	});

	it('should return name for react course', () => {
		var userList = users.getUserList('React Course');
		expect(userList).toEqual(['D2']);
	});
});