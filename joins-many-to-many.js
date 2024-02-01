// Students table
const students = [
  { studentId: 1, name: 'Alice' },
  { studentId: 2, name: 'Bob' },
  { studentId: 3, name: 'Charlie' },
];

console.log('Students Table:');
console.table(students);

// Courses table
const courses = [
  { courseId: 101, courseName: 'Math' },
  { courseId: 102, courseName: 'English' },
  { courseId: 103, courseName: 'History' },
];

console.log('Courses Table:');
console.table(courses);

// Enrollments table (linking students to courses)
const enrollments = [
  { studentId: 1, courseId: 101 },
  { studentId: 1, courseId: 102 },
  { studentId: 2, courseId: 101 },
  { studentId: 3, courseId: 103 },
];

console.log('Enrollments Table:');
console.table(enrollments);

// Simulate a join operation
const studentCourseInfo = students.map(student => {
  const enrolledCourses = enrollments
    .filter(enrollment => enrollment.studentId === student.studentId)
    .map(enrollment => {
      const course = courses.find(course => course.courseId === enrollment.courseId);
      return course ? course.courseName : 'Unknown Course';
    });

  return { ...student, enrolledCourses };
});

console.log('Join Result (Students with Enrolled Courses):');
console.table(studentCourseInfo);
