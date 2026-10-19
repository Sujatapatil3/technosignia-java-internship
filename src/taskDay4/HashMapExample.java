package taskDay4;


import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class HashMapExample {
    public static void main(String[] args) {
        HashMap<Integer, String> students = new HashMap<>();

        students.put(101, "Amit");
        students.put(102, "Priya");
        students.put(103, "Rahul");
        students.put(104, "Sujata");

        Scanner sc = new Scanner(System.in);
        System.out.print("Enter student ID: ");

        try {
            int id = Integer.parseInt(sc.nextLine());
            String name = students.get(id);

            if (name != null) {
                System.out.println("Student name: " + name);
            } else {
                System.out.println("Student ID not found.");
            }
        } catch (NumberFormatException e) {
            System.out.println("Invalid ID. Enter a number.");
        }

        System.out.println("\nAll student records:");
        for (Map.Entry<Integer, String> entry : students.entrySet()) {
            System.out.println(
                "ID: " + entry.getKey() + ", Name: " + entry.getValue()
            );
        }

        sc.close();
    }
}

