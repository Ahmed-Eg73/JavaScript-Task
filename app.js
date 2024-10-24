// Data structure for book inventory
const inventory = [
  {
    category: "Informacinės technologijos",
    books: [
      {
        title: "Programavimas linksmai",
        ISBN: "IT-12345",
        publishing_year: 2019,
        pages: 250,
        quantity: 12,
        price: 25,
      },
      //2
      {
        title: "Programavimas linksmai-2",
        ISBN: "IT-12346",
        publishing_year: 2018,
        pages: 280,
        quantity: 10,
        price: 20,
      },
      //3
      {
        title: "Programavimas linksmai-3",
        ISBN: "IT-12347",
        publishing_year: 2021, // New book
        pages: 350,
        quantity: 15,
        price: 30,
      },
      //4
      {
        title: "Programavimas linksmai-4",
        ISBN: "IT-12348",
        publishing_year: 2020,
        pages: 250,
        quantity: 40,
        price: 60,
      },
      //5
      {
        title: "Programavimas linksmai-4",
        ISBN: "IT-12349",
        publishing_year: 2021, //New book
        pages: 300,
        quantity: 11,
        price: 40,
      },
    ],
  },
  //2- category
  {
    category: "Fantastika",
    books: [
      {
        title: "Fantastika-1",
        ISBN: "IT-1230",
        publishing_year: 2011,
        pages: 250,
        quantity: 12,
        price: 25,
      },
      //2
      {
        title: "Fantastika-2",
        ISBN: "IT-1231",
        publishing_year: 2012,
        pages: 290,
        quantity: 10,
        price: 29,
      },
      //3
      {
        title: "Fantastika-3",
        ISBN: "IT-1233",
        publishing_year: 2021, // New book
        pages: 350,
        quantity: 15,
        price: 30,
      },
      //4
      {
        title: "Fantastika-4",
        ISBN: "IT-1234",
        publishing_year: 2021, // New book
        pages: 400,
        quantity: 40,
        price: 60,
      },
      //5
      {
        title: "Fantastika-5",
        ISBN: "IT-1235",
        publishing_year: 2019,
        pages: 350,
        quantity: 11,
        price: 50,
      },
    ],
  },
  //3- category
  {
    category: "Historical Fiction",
    books: [
      {
        title: "Historical Fiction-1",
        ISBN: "IT-1220",
        publishing_year: 2011,
        pages: 250,
        quantity: 12,
        price: 25,
      },
      //2
      {
        title: "Historical Fiction-2",
        ISBN: "IT-1221",
        publishing_year: 2016,
        pages: 200,
        quantity: 10,
        price: 20,
      },
      //3
      {
        title: "Historical Fiction-3",
        ISBN: "IT-1222",
        publishing_year: 2021, // New book
        pages: 350,
        quantity: 15,
        price: 30,
      },
      //4
      {
        title: "Historical Fiction-4",
        ISBN: "IT-1223",
        publishing_year: 2021, // New book
        pages: 400,
        quantity: 30,
        price: 60,
      },
      //5
      {
        title: "Historical Fiction-5",
        ISBN: "IT-1224",
        publishing_year: 2019,
        pages: 310,
        quantity: 11,
        price: 100,
      },
    ],
  },
  //4- category
  {
    category: "Science Fiction",
    books: [
      {
        title: "Science Fiction-1",
        ISBN: "IT-1210",
        publishing_year: 2012,
        pages: 250,
        quantity: 15,
        price: 25,
      },
      //2
      {
        title: "Science Fiction-2",
        ISBN: "IT-1211",
        publishing_year: 2017,
        pages: 200,
        quantity: 10,
        price: 20,
      },
      //3
      {
        title: "Science Fiction-3",
        ISBN: "IT-1212",
        publishing_year: 2021, // New book
        pages: 350,
        quantity: 15,
        price: 30,
      },
      //4
      {
        title: "Historical Fiction-4",
        ISBN: "IT-1213",
        publishing_year: 2021, // New book
        pages: 500,
        quantity: 30,
        price: 60,
      },
      //5
      {
        title: "Science Fiction-5",
        ISBN: "IT-1235",
        publishing_year: 2009,
        pages: 310,
        quantity: 11,
        price: 70,
      },
    ],
  },
  //5- category
  {
    category: "Mystery & Thriller",
    books: [
      {
        title: "Mystery & Thriller-1",
        ISBN: "IT-1200",
        publishing_year: 2021, // new book
        pages: 250,
        quantity: 15,
        price: 25,
      },
      //2
      {
        title: "Mystery & Thriller-2",
        ISBN: "IT-1201",
        publishing_year: 2017,
        pages: 200,
        quantity: 10,
        price: 20,
      },
      //3
      {
        title: "Mystery & Thriller-3",
        ISBN: "IT-1202",
        publishing_year: 2021, // New book
        pages: 350,
        quantity: 15,
        price: 30,
      },
      //4
      {
        title: "Mystery & Thriller-4",
        ISBN: "IT-1203",
        publishing_year: 2021, // New book
        pages: 500,
        quantity: 30,
        price: 60,
      },
      //5
      {
        title: "Mystery & Thriller-5",
        ISBN: "IT-1204",
        publishing_year: 2009,
        pages: 310,
        quantity: 11,
        price: 70,
      },
    ],
  },
];

// list all books and mark 2021 "New book"
const listAllBooks = () => {
  for (let i = 0; i < inventory.length; i++) {
    const category = inventory[i].category;
    console.log("Category: " + category);
    for (let x = 0; x < inventory[i].books.length; x++) {
      const book = inventory[i].books[x];
      let bookYear = book.publishing_year;
      //  2021 mark  "New book"
      if (book.publishing_year === 2021) {
        bookYear = book.publishing_year + " (New book)";
      }

      console.log(
        "- Title: " +
          book.title +
          ", ISBN: " +
          book.ISBN +
          ", Year: " +
          bookYear +
          ", Pages: " +
          book.pages +
          ", Quantity: " +
          book.quantity +
          ", Price: " +
          book.price +
          " EUR"
      );
    }
  }
};

listAllBooks();

//Calculate Total Inventory Value For each book
const calculateBook = () => {
  for (let i = 0; i < inventory.length; i++) {
    const category = inventory[i].category;
    console.log("Category: " + category);
    for (let j = 0; j < inventory[i].books.length; j++) {
      const book = inventory[i].books[j];
      const totalValue = book.price * book.quantity;
      console.log(
        "- Title: " + book.title + ", Total Value: " + totalValue + " EUR"
      );
    }
  }
};
calculateBook();
//Calculate For each category
const calculateCategory = () => {
  for (let i = 0; i < inventory.length; i++) {
    const category = inventory[i].category;
    let categoryTotal = 0;

    for (let j = 0; j < inventory[i].books.length; j++) {
      const book = inventory[i].books[j];
      const totalValue = book.price * book.quantity;
      categoryTotal += totalValue;
    }

    console.log(
      "Category: " + category + ", Total Value: " + categoryTotal + " EUR"
    );
  }
};
calculateCategory();

// calculate overall inventory
const calculateInventory = () => {
  let overallTotal = 0;

  for (let i = 0; i < inventory.length; i++) {
    let categoryTotal = 0;
    for (let j = 0; j < inventory[i].books.length; j++) {
      const book = inventory[i].books[j];
      categoryTotal += book.price * book.quantity;
    }
    overallTotal += categoryTotal;
  }

  console.log("Overall total inventory value: " + overallTotal + " EUR");
};
calculateInventory();
//***filter books by category, .title, pages */
const filterCategory = (categoryName) => {
  const filterBooks = [];
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].category === categoryName) {
      filterBooks.push(...inventory[i].books);
    }
  }
  return filterBooks;
};
console.log(filterCategory("Mystery & Thriller"));
//
const filterTitle = (title) => {
  const filterBooks = [];
  for (let i = 0; i < inventory.length; i++) {
    for (let j = 0; j < inventory[i].books.length; j++) {
      const book = inventory[i].books[j];
      if (book.title.includes(title)) {
        filterBooks.push(book);
      }
    }
  }
  return filterBooks;
};

console.log(filterTitle("Mystery & Thriller-4"));
//

const filterPages = (minPages, maxPages) => {
  const filterBooks = [];
  for (let i = 0; i < inventory.length; i++) {
    for (let j = 0; j < inventory[i].books.length; j++) {
      const book = inventory[i].books[j];
      if (book.pages >= minPages && book.pages <= maxPages) {
        filterBooks.push(book);
      }
    }
  }
  return filterBooks;
};
console.log(filterPages(0, 3000));
//min and max price
const MaxMin = () => {
  let minBook = inventory[0].books[0];
  let maxBook = inventory[0].books[0];

  for (let i = 0; i < inventory.length; i++) {
    for (let j = 0; j < inventory[i].books.length; j++) {
      const book = inventory[i].books[j];
      if (book.price < minBook.price) {
        minBook = book;
      }
      if (book.price > maxBook.price) {
        maxBook = book;
      }
    }
  }

  console.log("min price:", minBook);
  console.log("max price:", maxBook);
};

MaxMin();
