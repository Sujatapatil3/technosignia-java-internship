package taskDay4;


import java.util.ArrayList;
import java.util.Scanner;

public class SearchStudent {
    public static void main(String[] args) {
        ArrayList<String> students = new ArrayList<>();

        students.add("Amit");
        students.add("Priya");
        students.add("Rahul");
        students.add("Sujata");

        Scanner sc = new Scanner(System.in);
        System.out.print("Enter student name to search: ");
        String searchName = sc.nextLine().trim();

        boolean found = false;

        for (String name : students) {
            if (name.equalsIgnoreCase(searchName)) {
                System.out.println("Student found: " + name);
                found = true;
                break;
            }
        }

        if (!found) {
            System.out.println("Student not found.");
        }

        sc.close();
    }
}

