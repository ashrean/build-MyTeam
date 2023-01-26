const Employee = require('./Employee');

class Manager extends Employee {
    constructor(managerName, badgeID, email, officePhone){
    super(managerName, badgeID, email)
    this.officePhone = officePhone;
    }

    getofficePhone(){
        return this.officePhone
    }

    getRole(){
        return "Manager";
    }
}

module.exports = Manager;
