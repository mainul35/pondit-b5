package src.conditions.day9_basic_algorithms;

// Fibonacci Series using Recursion
public class Fibonacci {
    static int fib(int n)
    {
        if (n <= 1)
            return n;
        return fib(n - 1) + fib(n - 2);
    }

    public static void main(String args[])
    {
        int n = 7;
        System.out.println(fib(n));
    }
}
/* This code is contributed by Rajat Mishra */

