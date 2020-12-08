'use strict';

var Books = [
    {
        Title: "The Republic", Author: "Plato", Price: 8.99, Quantity: 100, Year: -375, Publisher: "Simon & Schuster",
        Description: "The Republic is a Socratic dialogue, written by Plato around 380 BC, concerning the definition of justice."
    },

    {
        Title: "Discourse on Method", Author: "Descartes", Price: 7.20, Quantity: 100, Year: 1637, Publisher: "Hackett",
        Description: "One of the most influential works in the history of modern philosophy, and important to the development of natural Sciences."
    },

    {
        Title: "Sapiens", Author: "Yuval Harari", Price: 9.79, Quantity: 100, Year: 2015, Publisher: "Vintage",
        Description: "The book surveys the history of humankind from the evolution of archaic human species in the Stone Age up to the twenty-first century,",
    },

    {
        Title: "Solaris", Author: "Stanislav Lem", Price: 9.79, Quantity: 100, Year: 1961, Publisher: "Faber And Faber ",
        Description: "When Kris Kelvin arrives at the planet Solaris to study the ocean that covers its surface he is forced to confront a painful...",
    },

    {
        Title: "Passions of souls", Author: "Descarte", Price: 7.99, Quantity: 100, Year: 1649, Publisher: "OUP",
        Description: 'Contributes to a long tradition of philosophical inquiry into the nature of "the passions".'
    },

    {
        Title: "Thus spoke Zaratustra", Author: "Nietzche", Price: 8.05, Quantity: 100, Year: 1885, Publisher: "CreateSpace",
        Description: 'Deals with ideas such as the "eternal recurrence of the same," the parable on the "death of God" and the "prophecy" of the Superhuman.',
    },

    {
        Title: "Beyond Good and Evil", Author: "Nietzche", Price: 7.99, Quantity: 100, Year: 1886, Publisher: "Penguin",
        Description: "The work dramatically rejects traditional Western thought with its notions of truth and God, good and evil.",
    },

    {
        Title: "The Antichrist", Author: "Nietzche", Price: 3.50, Quantity: 100, Year: 1895, Publisher: "Nikol",
        Description: "An argument against the systematic religions that he believed were interfering with the advancement of life, particularly knowledge and culture.",
    },

    {
        Title: "Pet Sematary", Author: "Stephen King", Price: 6.99, Quantity: 100, Year: 1989, Publisher: "Hodder",
        Description: "A story about evil from beyond the grave, reanimated animals, terrible physical injuries… ",
    },

    {
        Title: "The Alchemist", Author: "Pablo Cohelo", Price: 8.00, Quantity: 100, Year: 1988, Publisher: "HarperOne",
        Description: "The magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found. ",
    },
]

// Generates a number in between the give min and max value
function MaxMinGenerator(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

//Takes an integer from MaxMinGenerator and generates that many int between 1 and 9 as a string
function DigitGenerator(MaxMinGenerator) {
    var Digits = "";
    for (var i = 0; i < MaxMinGenerator; i++) {
        Digits = Digits + Math.round(Math.random() * (9 - 1) + 1).toString();
    }
    return Digits;
}

// Generates the a complete ISBN code according to https://www.isbn-international.org/content/what-isbn
function GenerateISBN() {
    var EANPrefix = MaxMinGenerator(978, 979).toString();
    var RegistrationGroup = DigitGenerator(MaxMinGenerator(1, 5));
    var RegistrationElement = DigitGenerator(MaxMinGenerator(1, 7));
    var PublicationElement = DigitGenerator(MaxMinGenerator(1, 6));
    var CheckDigit = MaxMinGenerator(1, 9).toString();
    var ISBN = EANPrefix + "-" + RegistrationGroup + "-" + RegistrationElement + "-" + PublicationElement + "-" + CheckDigit;
    return ISBN;
}

// Adds the ISBN to a book.
function AddISBN(Array) {
    for (var i = 0; i < Array.length; i++) {
        Array[i].ISBN = GenerateISBN();
    }
}

// Prints all of the books.
function PrintBooks() {
    console.log("* * * * All of the books * * * *");
    for (var i = 0; i < Books.length; i++) {
        i++;
        console.log("Book " + i + ":");
        i--;
        console.log(
            "Title: " + Books[i].Title + "\n" +
            "Author: " + Books[i].Author + "\n" +
            "Year: " + Books[i].Year + "\n" +
            "Price: " + Books[i].Price + "\n" +
            "Quantity: " + Books[i].Quantity + "\n" +
            "Publisher: " + Books[i].Publisher + "\n" +
            "ISBN: " + Books[i].ISBN + "\n" +
            "Description: " + Books[i].Description + "\n"
        );
    }
}

//Finds the most Expensive and the cheapest book and prints it.
function MaxMinPrice(Array) {
    var Prices = [];
    for (var i = 0; i < Array.length; i++) {
        Prices[i] = Array[i].Price;
    }
    console.log("* * * * Books by price * * * *" +
        "\nExpensivest book: " + Math.max(...Prices) +
        "\nCheapest book: " + Math.min(...Prices)
    );
}

//Finds all the books from Nietzche
function FindBook(Array) {
    console.log("\n* * * * Books from Nietzche * * * *");
    for (var i = 0; i < Array.length; i++) {
        if (Array[i].Author.includes("Nietzche") == true) {
            console.log(
                "Title: " + Books[i].Title + "\n" +
                "Year: " + Books[i].Year + "\n" +
                "Price: " + Books[i].Price + "\n" +
                "Quantity: " + Books[i].Quantity + "\n" +
                "Publisher: " + Books[i].Publisher + "\n" +
                "ISBN: " + Books[i].ISBN + "\n" +
                "Description: " + Books[i].Description + "\n"
            );
        }
    }
}


AddISBN(Books);
PrintBooks();
MaxMinPrice(Books);
FindBook(Books);
