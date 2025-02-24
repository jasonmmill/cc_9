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
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`
    }
    calculateBonus() {
        return (this.salary * 12) * 0.1
    }
    calculateAnnualSalary() {
        return (this.salary * 12) + this.calculateBonus()
    }
}

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5)
console.log(mgr1.getDetails())
console.log(mgr1.calculateBonus())

// Task 3 - Creating a Company Class
class Company {
    constructor(name) {
    this.name = name 
    this.employees = []
    }
    addEmployee(employee) {
        this.employees.push(employee)
    }
    listEmployees() {
        this.employees.forEach(employee => console.log(employee.getDetails()))
    }
    calculateTotalPayroll() {
        return this.employees.reduce((total, employee) => total + employee.calculateAnnualSalary(), 0)
    }
    promoteToManager(employee, teamSize) {
        const index = this.employees.indexOf(employee)
        this.employees[index] = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize)
    }

}

const company = new Company("TechCorp")
company.addEmployee(emp1)
company.addEmployee(mgr1)
company.listEmployees()
console.log(company.calculateTotalPayroll())
company.promoteToManager(emp1, 3)
company.listEmployees()