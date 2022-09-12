;
var student1 = {
    firstName: 'zaraki',
    lastName: 'kenpatchi',
    age: 400,
    location: 'soul society'
};
var student2 = {
    firstName: 'jotaro',
    lastName: 'kujo',
    age: 32,
    location: 'japan'
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var t_body = document.createElement('tbody');
table.appendChild(t_body);
document.body.appendChild(table);
for (var _i = 0, studentsList_1 = studentsList; _i < studentsList_1.length; _i++) {
    var student = studentsList_1[_i];
    var tr = document.createElement('tr');
    var td_Name = document.createElement('td');
    var td_Location = document.createElement('td');
    td_Name.innerHTML = student.firstName;
    td_Location.innerHTML = student.location;
    tr.appendChild(td_Name);
    tr.appendChild(td_Location);
    t_body.appendChild(tr);
}
