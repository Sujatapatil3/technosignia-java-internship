package taskDay2;



import java.util.Scanner;

public class MultiplicationTable {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a positive, non-zero integer: ");

        if (!sc.hasNextInt()) {
            System.out.println("Invalid input! Please enter a positive integer greater than zero.");
        } else {
            int number = sc.nextInt();

            if (number <= 0) {
                System.out.println("Invalid input! Please enter a positive integer greater than zero.");
            } else {
                System.out.println("Multiplication table of " + number + ":");

                for (int i = 1; i <= 10; i++) {
                    System.out.println(number + " x " + i + " = "
                            + ((long) number * i));
                }
            }
        }

        sc.close();
    }
}
