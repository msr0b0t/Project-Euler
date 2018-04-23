module.exports = () => {
	let factor;
	let start = 600851475143;
	for (let i = 3; i < 600851475144; i++) {
		if (start % i === 0 && isPrime(i)) {
			start /= i;
			factor = i;
		}
	}
	return console.log(`The solution to problem 3 is: ${factor}`);
};

function isPrime(n) {
	for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
		if (n % i === 0) {
			return false;
		}
	}
	return n !== 1;
}
