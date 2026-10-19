package taskDay4;


import java.util.ArrayList;

public class ArrayListExample {
    public static void main(String[] args) {
        ArrayList<String> students = new ArrayList<>();

        students.add("Amit");
        students.add("Priya");
        students.add("Rahul");
        students.add("Sujata");

        System.out.println("Student List:");
        for (String name : students) {
            System.out.println(name);
        }

        students.remove("Rahul");

        System.out.println("After removing Rahul: " + students);
        System.out.println("Total students: " + students.size());
    }
}

