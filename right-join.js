// Employees table
const employees = [
    { employeeId: 1, name: 'John', departmentId: 101 },
    { employeeId: 2, name: 'Alice', departmentId: 102 },
    { employeeId: 3, name: 'Bob', departmentId: 101 },
];

console.log('Employees Table:');
console.table(employees);

// Departments table
const departments = [
    { departmentId: 101, departmentName: 'Engineering' },
    { departmentId: 102, departmentName: 'Marketing' },
];

console.log('Departments Table:');
console.table(departments);

// Right Join
const rightJoinResult = departments.map(department => {
    const employee = employees.find(emp => emp.departmentId === department.departmentId);
    return { ...department, employeeName: employee ? employee.name : 'No Employee' };
  });
  
  console.log('Right Join Result:');
  console.table(rightJoinResult);
  