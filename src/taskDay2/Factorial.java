package taskDay2;
import java.util.Scanner;
import java.math.BigInteger;     
//                          Factorials above 20! exceed the range of Java's 
//                            long data type, we use BigInteger to calculate the factorial accurately up to 100!.
public class Factorial {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a number (0 to 100): ");

        if (!sc.hasNextInt()) {
            System.out.println("Invalid input! Please enter an integer from 0 to 100.");
        } else {
            int number = sc.nextInt();

            if (number < 0 || number > 100) {
                System.out.println("Invalid input! Please enter a number from 0 to 100.");
            } else {
                BigInteger factorial = BigInteger.ONE;

                for (int i = 1; i <= number; i++) {
                    factorial = factorial.multiply(BigInteger.valueOf(i));
                }

                System.out.println("Factorial of " + number + " is:");
                System.out.println(factorial);
            }
        }

        sc.close();
    }
}
