
# Day 13 – Database Fundamentals

## Topics Covered
- Introduction to Databases
- Relational Databases
- Tables, Rows, and Columns
- Primary Keys and Foreign Keys
- Relationships Between Tables
- Introduction to MySQL
- Database Design Basics
- ER Diagrams

## Practical Task: Student Management Database

Created a Student Management database using MySQL.

### 1. Students Table
| Field | Data Type | Key |
|---|---|---|
| student_id | INT | Primary Key |
| student_name | VARCHAR(100) | |
| email | VARCHAR(100) | UNIQUE |
| phone | VARCHAR(15) | |
| date_of_birth | DATE | |

### 2. Courses Table
| Field | Data Type | Key |
|---|---|---|
| course_id | INT | Primary Key |
| course_name | VARCHAR(100) | |
| duration_months | INT | |
| fees | DECIMAL(10,2) | |

### 3. Enrollments Table
| Field | Data Type | Key |
|---|---|---|
| enrollment_id | INT | Primary Key |
| student_id | INT | Foreign Key |
| course_id | INT | Foreign Key |
| enrollment_date | DATE | |
| status | VARCHAR(20) | |

## Relationships
- One student can have multiple enrollments.
- One course can have multiple enrollments.
- Students and Courses have a many-to-many relationship through the Enrollments table.

## Tools Used
- MySQL
- MySQL Workbench

## Deliverables
- Student-Management.sql
- Student-Management-ERD.png
