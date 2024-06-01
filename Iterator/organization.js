class Employee {
    constructor(name, position) {
      this.name = name;
      this.position = position;
      this.subordinates = [];
    }
  
    addSubordinate(subordinate) {
      this.subordinates.push(subordinate);
    }
  
    toString() {
      return `Employee: ${this.name}, Position: ${this.position}`;
    }
    
  }
  
  class OrgIterator {
    constructor(root) {
      this.stack = [root];
    }
  
    next() {
      if (this.stack.length === 0) {
        return null;
      }
  
      const currentEmployee = this.stack.pop();
      this.stack.push(...currentEmployee.subordinates);
  
      return currentEmployee;
    }
  }
  
  const root = new Employee('John Doe', 'CEO');
  const employee1 = new Employee('Jane Smith', 'Manager');
  const employee2 = new Employee('Peter Jones', 'Software Engineer');
  const employee3 = new Employee('Mary Brown', 'Salesperson');
  
  root.addSubordinate(employee1);
  employee1.addSubordinate(employee2);
  employee1.addSubordinate(employee3);
  
  const iterator = new OrgIterator(root);
  
  while (true) {
    const employee = iterator.next();
    if (employee === null) {
      break;
    }
  
    console.log(employee.toString());
  }