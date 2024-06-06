//test that project has been set up correctly

// test('adds 1 + 2 to equal 3', () => {
// 	expect(sum(1, 2)).toBe(3);
// });

const cakes = require('./baker');

describe(cakes, () => {
	test('should return 0 if any ingredients in recipe are not available', () => {
		expect(cakes({ flour: 500 }, { sugar: 500 })).toBe(0);
	});
});
