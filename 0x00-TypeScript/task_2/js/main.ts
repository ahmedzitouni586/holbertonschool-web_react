interface DirectorInterface {
    workFromHome(): string;
    getCoffeBreak(): string;
    workDirectoryTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeBreak(): string {
        return "Getting a coffee break";
    }
    workDirectoryTasks(): string {
        return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }
    getCoffeBreak(): string {
        return "Cannot have a break";
    }
    workTeacherTasks(): string {
        return "Getting to work";
    }
}

interface createEmployeeFunction {
    (salary: string | number): Director | Teacher
}


const createEmployee: createEmployeeFunction = function (salary: number | string) {

    if (typeof salary === 'string') {
      salary = parseInt(salary)
  }
    else if (salary < 500) {
        return new Teacher();
    }
    return new Director();
}

function isDirector(employee: Director | Teacher): employee is Director {
    if (employee instanceof Director) {
        return true;
    }
    return false;
}

function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        return employee.workDirectoryTasks()
    }
    return employee.workTeacherTasks()
}

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return "Teaching Math";
    }
    else if (todayClass === "History") {
        return "Teaching History";
    }
}