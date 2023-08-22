const { Person } = require('../models/person.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createPerson = (request, response) => {
    const { bookTitle, bookPrice, bookDescription } = request.body;
    Person.create({
        bookTitle,
        bookPrice,
        bookDescription
    })
        .then(person => response.json(person))
        .catch(err => response.json(err));
}

