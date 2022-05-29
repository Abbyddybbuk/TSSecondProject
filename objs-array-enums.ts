// const myPerson: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; // This is not an Array but a Tuple
// } = {    
//     name: 'Abhijeet',
//     age: 37,
//     hobbies: ['Current Affairs', 'Gaming'],
//     role: [2, 'Enterprise Architect']
// }

enum Role { ADMIN = 100, READ_ONLY = 200, AUTHOR = 300 };

const myPerson = {    
    name: 'Abhijeet',
    age: 37,
    hobbies: ['Current Affairs', 'Gaming'],
    role: Role.ADMIN
}

// myPerson.role.push('Admin');-->Pushing into Tuples is allowed in TS

console.log(myPerson.name + '  ' + myPerson.age);

let myFavoriteActivities: any[];
myFavoriteActivities = ['Driving'];

for (const hobby of myPerson.hobbies) {
    console.log(hobby.toUpperCase());
}

if (myPerson.role === Role.READ_ONLY) {
    console.log('You are admin')
}