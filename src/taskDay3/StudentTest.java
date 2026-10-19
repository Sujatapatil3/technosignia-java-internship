package taskDay3;

public class StudentTest {

    public static void main(String[] args) {

        Student s1 = new Student(101, "Rahul", 85.5);

        s1.displayDetails();

        System.out.println("Updating student marks...");

        s1.setMarks(92);

        System.out.println("Updated marks: " + s1.getMarks());
    }
}

