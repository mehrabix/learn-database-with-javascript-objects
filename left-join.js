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

// Left Join
const leftJoinResult = employees.map(employee => {
    const department = departments.find(dep => dep.departmentId === employee.departmentId);
    return { ...employee, departmentName: department ? department.departmentName : 'Unknown' };
});

console.log('Left Join Result:');
console.table(leftJoinResult);