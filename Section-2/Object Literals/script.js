let x;

const person = {
    name: 'John',
    age: 30,
    isAdmin: true,
    address: {
        street: '123 main street',
        city: 'Boston',
        state: 'MA'
    },
    hobbies: ['music', 'sports']
}

x = person.name
x = person['age']
x = person.address.state
x = person.hobbies
person.name = 'Conor'
x = person.name


person.greet = function(){
    console.log(`Hello my name is ${person.name}`);
}

person.greet()

delete person.age
x = person


console.log(x);