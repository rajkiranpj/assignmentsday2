let passcode = "secret passcode";
class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret asscode") {
            this._fullName = newName;
        }
        else {
            alert("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Rajkiran";
if (employee.fullName) {
    alert(employee.fullName);
}