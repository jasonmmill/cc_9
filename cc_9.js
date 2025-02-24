// Task 1 - Creating Employee Class
class Employee { // creation of class
    constructor(name, id, department, salary) { // setup of each class property
        this.name = name // setup new property
        this.id = id // setup new property
        this.department = department // setup new property
        this.salary = salary // setup new property
    }
    getDetails() { // function displaying details
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`
    }
    calculateAnnualSalary() { // function calculating annual salary using monthly salary
        return this.salary * 12 
    }
}

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000) // establish an employee instance
console.log(emp1.getDetails()) // log results
console.log(emp1.calculateAnnualSalary()) // log results

// Task 2 - Creating Manager Class
class Manager extends Employee { // creation of manager class that claims inheritance to employee
    constructor(name, id, department, salary, teamSize) { // setup of each class property, note new "teamSize" property
        super(name, id, department, salary) // pull properties from inheritance
        this.teamSize = teamSize // setup new property
    }
    getDetails() { // function displaying revised details (override from employee)
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`
    }
    calculateBonus() { // function calculating 10% of annual base salary
        return (this.salary * 12) * 0.1
    }
    calculateAnnualSalary() { // function calculating manager take-home pay after bonus (override from employee)
        return (this.salary * 12) + this.calculateBonus()
    }
}

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5) // establish a manager instance
console.log(mgr1.getDetails()) // log results
console.log(mgr1.calculateBonus()) // log results

// Task 3 - Creating a Company Class
class Company { // creation of class
    constructor(name) { // setup of each class property
    this.name = name // setup new property
    this.employees = [] // empty array to store employee info
    }
    addEmployee(employee) { // function to add employee info to array
        this.employees.push(employee)
    }
    listEmployees() { // function to list out all employee info contained in array
        this.employees.forEach(employee => console.log(employee.getDetails()))
    }
// Task 4 -  Implementing a Payroll System
    calculateTotalPayroll() { // function to calculate total payroll. including manager bonuses
        return this.employees.reduce((total, employee) => total + employee.calculateAnnualSalary(), 0)
    }
// Task 5 - Implementing Promotions
    promoteToManager(employee, teamSize) { // function to promote an employee to manager within the system
        const index = this.employees.indexOf(employee) // find location of employee in array
        if (index > -1) { // ensure employee is listed in array
        this.employees[index] = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize)
        } // create new manager instance and update based on new info
        else { // error message if needed
            console.log(`Employee not found.`)
        }
    }
}

const company = new Company("TechCorp")
company.addEmployee(emp1) // add employee to array
company.addEmployee(mgr1) // add manager to array
company.listEmployees() // log results
console.log(company.calculateTotalPayroll()) // log total payroll function results
company.promoteToManager(emp1, 3) // promote emp1 from employee to manager and give her a team of 3
company.listEmployees() // log results