const cakes = require('./baker');

describe(cakes, () => {
	test('should return 0 if any ingredients in recipe are not available', () => {
		expect(cakes({ flour: 500 }, { sugar: 500 })).toBe(0);
	});

	// test('must return 1 if enough of recipe ingredients are available', () => {
	// 	expect(cakes({ flour: 500 }, { flour: 500 })).toBe(1);
	// });

	// continue to add tests when the previous one passes
});
