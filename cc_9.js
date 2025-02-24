// Task 1 - Creating Employee Class
class Employee {
    constructor(name, id, department, salary) {
        this.name = name
        this.id = id
        this.department = department
        this.salary = salary
    }
    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`
    }
    calculateAnnualSalary() {
        return this.salary * 12
    }
}

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000)
console.log(emp1.getDetails())
console.log(emp1.calculateAnnualSalary())

// Task 2 - Creating Manager Class
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary)
        this.teamSize = teamSize
    }
    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`
    }
    calculateBonus() {
        return (this.salary * 12) * 0.1
    }
}

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5)
console.log(mgr1.getDetails())
console.log(mgr1.calculateBonus())