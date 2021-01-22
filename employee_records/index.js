let employees = [];

function Employee(name, title, salary, status = "Full-Time") {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = status;
};

Employee.prototype.printEmployeeForm = () => {
    console.log(this.name + this.title + this.salary + this.status);
};

let amanda = employees.push( new Employee("Amanda", "Bartender", "$36,000", "Part-Time"));
let phillip = employees.push( new Employee("Phillip", "Sue Chef", "$42,000", "Contract"));
let valerie = employees.push( new Employee("Valerie", "General Manager", "$60,000"));

console.log(employees);

