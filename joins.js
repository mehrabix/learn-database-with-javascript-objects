// Users table
const users = [
    { id: 1, name: 'John', age: 25, cityId: 101 },
    { id: 2, name: 'Alice', age: 30, cityId: 102 },
    { id: 3, name: 'Bob', age: 22, cityId: 101 },
];

console.log('users table:');
console.table(users)

// Cities table
const cities = [
    { id: 101, cityName: 'New York' },
    { id: 102, cityName: 'San Francisco' },
];

console.log('cities table:');
console.table(cities)

// Simulate a join operation
const usersWithCities = users.map(user => {
    const city = cities.find(city => city.id === user.cityId);
    return { ...user, cityName: city ? city.cityName : 'Unknown' };
});

console.log('join users and cities:');
console.table(usersWithCities);
