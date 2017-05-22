class greeter {
	name : string ;
	age:number;
	constructor (name ,age){
		this.name = name;
		this.age = age;
	}

	greet(){
		console.log(`hello ${this.name} greetings and  your age is ${this.age}`);
	}

}
var h1 = new greeter('Raj',22);
