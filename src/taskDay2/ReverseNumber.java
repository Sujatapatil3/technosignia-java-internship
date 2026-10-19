package taskDay2;


import java.util.Scanner;

public class ReverseNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter an integer: ");
        int number = sc.nextInt();

        long n = Math.abs((long) number);
        long reverse = 0;

        while (n > 0) {
            long digit = n % 10;
            reverse = reverse * 10 + digit;
            n = n / 10;
        }

        if (number < 0) {
            reverse = -reverse;
        }

        System.out.println("Reversed number: " + reverse);

        sc.close();
    }
}
