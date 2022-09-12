interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
};

let student1: Student = {
    firstName: 'zaraki',
    lastName: 'kenpatchi',
    age: 400,
    location: 'soul society'
};
let student2: Student = {
    firstName: 'jotaro',
    lastName: 'kujo',
    age: 32,
    location: 'japan'
};

const studentsList: [Student, Student] = [student1, student2];

const table = document.createElement('table');
const t_body = document.createElement('tbody');
table.appendChild(t_body);
document.body.appendChild(table);
for (const student of studentsList) {
    const tr = document.createElement('tr');
    const td_Name = document.createElement('td')
    const td_Location = document.createElement('td');
    td_Name.innerHTML = student.firstName
    td_Location.innerHTML = student.location;
    tr.appendChild(td_Name)
    tr.appendChild(td_Location);
    t_body.appendChild(tr);
}