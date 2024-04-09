function fibonacci(num) {
    if (num <= 0) {
        return "Bhai, sirf positive integers allow hain!";
    } else if (num === 1) {
        return 0;
    } else if (num === 2) {
        return 1;
    } else {
        let fib = [0, 1];
        for (let i = 2; i < num; i++) {
            fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
        }
        return fib[fib.length - 1];
    }
}
module.exports = fibonacci;
