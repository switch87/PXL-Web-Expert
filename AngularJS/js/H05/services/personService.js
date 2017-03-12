(function () {
    'use strict';

    angular.module('myApp')
        .service('personService', personService);

    function personService() {
        var persons = [
            {id: 1, 'name': 'John', lastname: 'Visser', age: 23, email: 'john@visser.nl'},
            {id: 2, 'name': 'Bob', lastname: 'Tasseur', age: 21, email: 'bob@tasseur.nl'},
            {id: 3, 'name': 'Bart', lastname: 'Bever', age: 65, email: 'bart@bever.nl'},
            {id: 4, 'name': 'Sandra', lastname: 'de Boer', age: 36, email: 'sandra@deboer.nl'},
            {id: 5, 'name': 'Harry', lastname: 'de Vries', age: 7, email: 'harry@devries.nl'},
            {id: 6, 'name': 'Peter', lastname: 'Kassenaar', age: 45, email: 'peter@kassenaar.nl'},
            {id: 7, 'name': 'Michiel', lastname: 'de Rond', age: 37, email: 'michiel@derond.nl'},
            {id: 8, 'name': 'Jeroen', lastname: 'van Spek', age: 18, email: 'jeroen@vanspek.nl'},
            {id: 9, 'name': 'Irene', lastname: 'Nansen', age: 52, email: 'irende@nansen.nl'},
            {id: 10, 'name': 'Mike', lastname: 'Schatgraver', age: 39, email: 'mike@schatgraver.nl'}
        ];

        this.getPersons = function() {
            return persons;
        };

        this.getPerson = function (id) {
            return persons[id - 1];
        };

        this.addPerson = function (newPerson) {
            var id = 0;
            for (var i = 0; i < persons.length; i++){
                if (persons[i].id >= id) {
                    id = persons[i].id + 1;
                }
            }
            newPerson.id = id;
            persons.push(newPerson);
        };
    }
})();