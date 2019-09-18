interface IDunno {
  age: any;
  growOld: any;
}

function Person(age: any) {
  this.age = age;
  this.growOld = function() {
    this.age++;
  }
}

const person = new Person(1);

setTimeout(person.growOld,1000);

