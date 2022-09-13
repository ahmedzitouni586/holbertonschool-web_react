interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports(): number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

var printTeacher: printTeacherFunction = function(firstName: string, lastName: string) {
    const firstLetter = firstName.charAt(0);
    return `${firstLetter}. ${lastName}`;
}

interface StudentClassI {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string
}

interface ClassConstructor {
    new (firstName: string, lastName: string): StudentClassI;
}

class StudentClass implements StudentClassI{
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework() {
        return "Currently working";
    }
    displayName() {
        return this.firstName;
    }
}

const student: StudentClass = new StudentClass('Roronoa', 'Zoro')
console.log(student.workOnHomework());
console.log(student.displayName());