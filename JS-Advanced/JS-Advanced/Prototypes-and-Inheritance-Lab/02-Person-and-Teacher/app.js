let person = new Person('Peter', 'softuni@gmail.com');
let teacher = new Teacher('Georgi', 'borocool359@gmaii.com', 'Math');

function personAndTeacher() {
	class Person {
		constructor(name, email) {
			this.name = name;
			this.email = email;
		}
	}

	class Teacher extends Person {
		constructor(name, email, subject) {
			super(name, email);
			this.subject = subject;
		}
	}

	return {
		Person,
		Teacher,
	};
}

console.log(personAndTeacher(person, teacher));
