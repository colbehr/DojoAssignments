function Fibonacci(num) {
    var fib = 0;
    if (num < 2) {
        fib = num;
    } else {
        fib = Fibonacci(num-2) + Fibonacci(num-1);
    }
    return fib;
}
