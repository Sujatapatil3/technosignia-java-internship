CREATE DATABASE student_management;

USE student_management;

CREATE TABLE Students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    student_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(15),
    date_of_birth DATE
);

CREATE TABLE Courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(100) NOT NULL,
    duration_months INT,
    fees DECIMAL(10, 2)
);

CREATE TABLE Enrollments (
    enrollment_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    enrollment_date DATE,
    status VARCHAR(20) DEFAULT 'Active',

    FOREIGN KEY (student_id)
        REFERENCES Students(student_id),

    FOREIGN KEY (course_id)
        REFERENCES Courses(course_id),

    UNIQUE (student_id, course_id)
);

SHOW TABLES;

DESCRIBE Students;
DESCRIBE Courses;
DESCRIBE Enrollments;




drop database student_management;