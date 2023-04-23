// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name,id,email){
     this.name = name;
     this.id = id;
     this.email = email;
    }
    // return the name.
     getName(){
        return this.name;
    }
     // return the id.
     getId(){
        return this.id;
    }
     // return the email.
    getEmail(){
     return this.email
    }
     // return the employee.
    getRole(){
        return this;
    }
      
}

module.exports = Employee;
