//test that project has been set up correctly
const sum = require('./baker');

test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});
