const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];


const [firstAnimal, secondAnimal, ...otherAnimals] = animals;
console.log(otherAnimals)
// => ['fish', 'cat', 'bird']

