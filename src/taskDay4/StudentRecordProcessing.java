package taskDay4;


import java.util.ArrayList;
import java.util.Comparator;
import java.util.Scanner;

class StudentRecord {
    private int id;
    private String name;
    private double marks;

    public StudentRecord(int id, String name, double marks) {
        this.id = id;
        this.name = name;
        this.marks = marks;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public double getMarks() {
        return marks;
    }

    public void display() {
        System.out.println(
            "ID: " + id +
            ", Name: " + name +
            ", Marks: " + marks
        );
    }
}

public class StudentRecordProcessing {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<StudentRecord> students = new ArrayList<>();

        students.add(new StudentRecord(101, "Amit", 78));
        students.add(new StudentRecord(102, "Priya", 92));
        students.add(new StudentRecord(103, "Rahul", 85));
        students.add(new StudentRecord(104, "Sujata", 88));

        int choice = 0;

        while (choice != 6) {
            System.out.println("\n--- Student Record Processing ---");
            System.out.println("1. Display all students");
            System.out.println("2. Search by ID");
            System.out.println("3. Search by name");
            System.out.println("4. Sort by name");
            System.out.println("5. Sort by marks (highest first)");
            System.out.println("6. Exit");
            System.out.print("Enter choice: ");

            try {
                choice = Integer.parseInt(sc.nextLine());

                switch (choice) {
                    case 1:
                        for (StudentRecord s : students) {
                            s.display();
                        }
                        break;

                    case 2:
                        System.out.print("Enter student ID: ");
                        int id = Integer.parseInt(sc.nextLine());
                        boolean idFound = false;

                        for (StudentRecord s : students) {
                            if (s.getId() == id) {
                                s.display();
                                idFound = true;
                                break;
                            }
                        }

                        if (!idFound) {
                            System.out.println("Student ID not found.");
                        }
                        break;

                    case 3:
                        System.out.print("Enter student name: ");
                        String name = sc.nextLine().trim();
                        boolean nameFound = false;

                        for (StudentRecord s : students) {
                            if (s.getName().equalsIgnoreCase(name)) {
                                s.display();
                                nameFound = true;
                                break;
                            }
                        }

                        if (!nameFound) {
                            System.out.println("Student name not found.");
                        }
                        break;

                    case 4:
                        students.sort(
                            Comparator.comparing(
                                StudentRecord::getName,
                                String.CASE_INSENSITIVE_ORDER
                            )
                        );

                        System.out.println("Sorted by name:");
                        for (StudentRecord s : students) {
                            s.display();
                        }
                        break;

                    case 5:
                        students.sort(
                            Comparator.comparingDouble(
                                StudentRecord::getMarks
                            ).reversed()
                        );

                        System.out.println("Sorted by marks:");
                        for (StudentRecord s : students) {
                            s.display();
                        }
                        break;

                    case 6:
                        System.out.println("Application closed.");
                        break;

                    default:
                        System.out.println("Invalid choice. Enter 1 to 6.");
                }

            } catch (NumberFormatException e) {
                System.out.println("Invalid input. Please enter a valid number.");
            }
        }

        sc.close();
    }
}

