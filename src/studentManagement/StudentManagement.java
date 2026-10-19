package studentManagement;

import java.util.ArrayList;
import java.util.Scanner;

import taskDay3.Student;

public class StudentManagement {

    private static final ArrayList<Student> students =
            new ArrayList<>();

    private static final Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {

        int choice;

        do {
            System.out.println("\n===== STUDENT MANAGEMENT SYSTEM =====");
            System.out.println("1. Add Student");
            System.out.println("2. View All Students");
            System.out.println("3. Search Student by ID");
            System.out.println("4. Update Student");
            System.out.println("5. Delete Student");
            System.out.println("6. Exit");
            System.out.print("Enter your choice: ");

            choice = readInt();

            switch (choice) {
                case 1:
                    addStudent();
                    break;

                case 2:
                    viewStudents();
                    break;

                case 3:
                    searchStudent();
                    break;

                case 4:
                    updateStudent();
                    break;

                case 5:
                    deleteStudent();
                    break;

                case 6:
                    System.out.println("Exiting application. Goodbye!");
                    break;

                default:
                    System.out.println(
                        "Invalid choice! Please select 1 to 6."
                    );
            }

        } while (choice != 6);

        sc.close();
    }

    private static void addStudent() {
        System.out.print("Enter student ID: ");
        int id = readInt();

        if (findStudent(id) != null) {
            System.out.println("Student ID already exists!");
            return;
        }

        System.out.print("Enter student name: ");
        String name = sc.nextLine().trim();

        if (name.isEmpty()) {
            System.out.println("Name cannot be empty!");
            return;
        }

        System.out.print("Enter marks (0-100): ");
        double marks = readDouble();

        if (marks < 0 || marks > 100) {
            System.out.println("Marks must be between 0 and 100.");
            return;
        }

        Student student = new Student(id, name, marks);
        students.add(student);

        System.out.println("Student added successfully!");
    }

    private static void viewStudents() {
        if (students.isEmpty()) {
            System.out.println("No student records found.");
            return;
        }

        System.out.println("\n--- All Students ---");

        for (Student student : students) {
            student.displayDetails();
            System.out.println("--------------------");
        }
    }

    private static void searchStudent() {
        System.out.print("Enter student ID to search: ");
        int id = readInt();

        Student student = findStudent(id);

        if (student != null) {
            System.out.println("Student found:");
            student.displayDetails();
        } else {
            System.out.println("Student not found.");
        }
    }

    private static void updateStudent() {
        System.out.print("Enter student ID to update: ");
        int id = readInt();

        Student student = findStudent(id);

        if (student == null) {
            System.out.println("Student not found.");
            return;
        }

        System.out.print("Enter new name: ");
        String name = sc.nextLine().trim();

        if (name.isEmpty()) {
            System.out.println("Name cannot be empty!");
            return;
        }

        System.out.print("Enter new marks (0-100): ");
        double marks = readDouble();

        if (marks < 0 || marks > 100) {
            System.out.println("Marks must be between 0 and 100.");
            return;
        }

        student.setName(name);
        student.setMarks(marks);

        System.out.println("Student updated successfully!");
    }

    private static void deleteStudent() {
        System.out.print("Enter student ID to delete: ");
        int id = readInt();

        Student student = findStudent(id);

        if (student != null) {
            students.remove(student);
            System.out.println("Student deleted successfully!");
        } else {
            System.out.println("Student not found.");
        }
    }

    private static Student findStudent(int id) {
        for (Student student : students) {
            if (student.getId() == id) {
                return student;
            }
        }

        return null;
    }

    private static int readInt() {
        while (!sc.hasNextInt()) {
            System.out.print("Invalid input! Enter a whole number: ");
            sc.nextLine();
        }

        int value = sc.nextInt();
        sc.nextLine();
        return value;
    }

    private static double readDouble() {
        while (!sc.hasNextDouble()) {
            System.out.print("Invalid input! Enter a numeric value: ");
            sc.nextLine();
        }

        double value = sc.nextDouble();
        sc.nextLine();
        return value;
    }
}

