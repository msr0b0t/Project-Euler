module.exports = () => {
	let sum = 0;
	let [a, b] = [1, 2];
	while (b < 4000001) {
		if (b % 2 === 0) {
			sum += b;
		}
		[a, b] = [b, a + b];
	}
	return console.log(`The solution to problem 2 is: ${sum}`);
};
