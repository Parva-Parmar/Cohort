// function sum(a, b) {
// 	return a + b;
// }

// let ans = sum(2, 3)
// console.log(ans);

function sum(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans = ans + i
	}
	return ans;
}

const ans = sum(10);
console.log(ans);