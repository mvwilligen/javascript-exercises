const getTheTitles = function(books) {

    let result = [];

    for (i = 0; i < books.length; i++) { result.push(books[i]["title"]) ;console.log (i, books[i]["title"]); }

    return result;
};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
  
  console.log(books);
  console.log(books.length);
  // console.log(books[0]["title"]);
  //console.log(books[1]["title"]);
  
  console.log(getTheTitles (books));


// Do not edit below this line
module.exports = getTheTitles;
