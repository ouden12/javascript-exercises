const getTheTitles = function(books) {
    // let titles = [];
    // for (const book of books){
    //     titles.push(book.title);
    // }
    // return titles;

    // More compact version
    // return books.map((book) => {return book.title});

    // More compactER version
    return books.map( (book) => book.title );
};

// Do not edit below this line
module.exports = getTheTitles;
