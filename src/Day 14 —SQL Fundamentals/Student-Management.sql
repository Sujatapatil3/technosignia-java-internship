
-- STEP 1: CREATE DATABASE
CREATE DATABASE student_management2;

USE student_management2;


-- STEP 2: CREATE STUDENTS TABLE
CREATE TABLE Students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    age INT,
    city VARCHAR(50)
);


-- STEP 3: CREATE COURSES TABLE
CREATE TABLE Courses (
    course_id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL,
    duration VARCHAR(50),
    fees DECIMAL(10,2)
);


-- STEP 4: CREATE ENROLLMENTS TABLE
CREATE TABLE Enrollments (
    enrollment_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    course_id INT,
    enrollment_date DATE DEFAULT (CURRENT_DATE),
    FOREIGN KEY (student_id) REFERENCES Students(student_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);


-- STEP 5: INSERT STUDENT RECORDS
INSERT INTO Students (student_name, email, age, city)
VALUES
('Amit Sharma', 'amit@gmail.com', 21, 'Pune'),
('Priya Patil', 'priya@gmail.com', 22, 'Mumbai'),
('Rahul Verma', 'rahul@gmail.com', 20, 'Nashik'),
('Sneha Joshi', 'sneha@gmail.com', 23, 'Jalgaon'),
('Rohan Deshmukh', 'rohan@gmail.com', 21, 'Pune');


-- STEP 6: INSERT COURSE RECORDS
INSERT INTO Courses (course_name, duration, fees)
VALUES
('Java Programming', '3 Months', 8000),
('Python Programming', '2 Months', 6000),
('Web Development', '4 Months', 10000),
('Database Management', '2 Months', 5000);


-- STEP 7: INSERT ENROLLMENT RECORDS
INSERT INTO Enrollments (student_id, course_id)
VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 1);


-- STEP 8: SELECT QUERIES
SELECT * FROM Students;
SELECT * FROM Courses;
SELECT * FROM Enrollments;


-- STEP 9: WHERE (FILTER RECORDS)
SELECT * FROM Students WHERE city = 'Pune';

SELECT * FROM Students WHERE age > 20;

SELECT * FROM Students WHERE age BETWEEN 20 AND 22;

SELECT * FROM Students WHERE city IN ('Pune', 'Mumbai');


-- STEP 10: ORDER BY AND LIMIT
SELECT * FROM Students ORDER BY student_name ASC;

SELECT * FROM Students ORDER BY age DESC;

SELECT * FROM Students LIMIT 3;


-- STEP 11: UPDATE STUDENT INFORMATION
UPDATE Students
SET city = 'Aurangabad'
WHERE student_id = 3;

UPDATE Students
SET age = 22
WHERE student_id = 1;

SELECT * FROM Students;


-- STEP 12: DELETE SELECTED RECORD
DELETE FROM Enrollments
WHERE student_id = 5;

DELETE FROM Students
WHERE student_id = 5;


-- STEP 13: ALTER TABLE
ALTER TABLE Students
ADD COLUMN phone VARCHAR(15);

UPDATE Students
SET phone = '9876543210'
WHERE student_id = 1;

SELECT * FROM Students;


-- STEP 14: DROP COLUMN
ALTER TABLE Students
DROP COLUMN phone;


-- STEP 15: CREATE AND DROP TABLE
CREATE TABLE TestTable (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50)
);

DROP TABLE TestTable;


-- STEP 16: JOIN QUERY
SELECT
    Students.student_name,
    Courses.course_name,
    Enrollments.enrollment_date
FROM Enrollments
JOIN Students
ON Enrollments.student_id = Students.student_id
JOIN Courses
ON Enrollments.course_id = Courses.course_id;


-- STEP 17: FINAL VERIFICATION
SELECT * FROM Students;
SELECT * FROM Courses;
SELECT * FROM Enrollments;

