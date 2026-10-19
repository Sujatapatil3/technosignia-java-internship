package studentFileHandlingday4;


import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class StudentFileHandling {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // Target the text file inside your STS project
        File file = new File(
            "src/studentFileHandlingday4/studentsrecords.txt"
        );

        System.out.println("File location: " + file.getAbsolutePath());

        try {
            System.out.print("Enter student ID: ");
            int id = Integer.parseInt(sc.nextLine().trim());

            System.out.print("Enter student name: ");
            String name = sc.nextLine().trim();

            System.out.print("Enter student marks: ");
            double marks = Double.parseDouble(sc.nextLine().trim());

            // Validate input
            if (id <= 0 || name.isEmpty()
                    || marks < 0 || marks > 100) {
                System.out.println(
                    "Invalid input. ID must be positive, name cannot be empty, "
                    + "and marks must be between 0 and 100."
                );
                return;
            }

            // Append the record without deleting existing records
            try (FileWriter writer = new FileWriter(file, true)) {
                writer.write(id + "," + name + "," + marks
                        + System.lineSeparator());
            }

            System.out.println("Student record saved successfully!");
            System.out.println("File size: " + file.length() + " bytes");

        } catch (NumberFormatException e) {
            System.out.println(
                "Invalid input. Enter numbers for ID and marks."
            );
        } catch (IOException e) {
            System.out.println(
                "Error saving record: " + e.getMessage()
            );
        } finally {
            sc.close();
        }
    }
}
