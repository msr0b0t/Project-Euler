module.exports = () => {
	let sum = 0;
	for (let i = 0; i < 1000; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}
	return console.log(`The solution to problem 1 is: ${sum}`);
};
