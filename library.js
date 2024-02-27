let book = (title, author, year, genre, pagesCount) => {
    return {
        title: title,
        author: author,
        year: year,
        genre: genre,
        pagesCount: pagesCount
    };
}
let library = [];

const addBookToLibrary = (title, author, year, genre, pagesCount) => {
    const newBook = {
        title: title,
        author: author,
        year: year,
        genre: genre,
        pagesCount: pagesCount
    };
    library.push(newBook);
};

const removeBookFromLibrary = (title) => {
    library = library.filter(book => book.title !== title);
}

const findBooksByAuthor = (author) => {
    return library.filter(book => book.author === author);
};

const filterBooksByGenre = (genre) => {
    return library.filter(book => book.genre === genre);
};

const genreReport = () => {
    const genreCount = {};
    library.forEach(book => {
        if (genreCount[book.genre]) {
            genreCount[book.genre]++;
        } else {
            genreCount[book.genre] = 1;
        }
    });
    return genreCount;
};

const pagesCountReport = () => {
    const totalBooks = library.length;
    const totalPages = library.reduce((acc, book) => acc + book.pagesCount, 0);
    return totalPages / totalBooks;
};

const sortBooksReport = () => {
    return library.sort((a, b) => b.year - a.year);
};

addBookToLibrary("Три товарища", "Эрих Мария Ремарк", 1936, "Роман", 400);
addBookToLibrary("Хоббит", "Дж. Р. Р. Толкиен", 1937, "Фэнтези", 310);
addBookToLibrary("Гарри Поттер и философский камень", "Дж. К. Роулинг", 1997, "Фэнтези", 223);
addBookToLibrary("1984", "Джордж Оруэлл", 1949, "Антиутопия", 328);
// Поиск книг по автору
console.log(findBooksByAuthor("Дж. Р. Р. Толкиен"));
// Фильтрация книг по жанру
console.log(filterBooksByGenre("Фэнтези"));
// Генерация отчета по количеству книг каждого жанра
console.log(genreReport());
// Генерация отчета по среднему количеству страниц
console.log(`Среднее количество страниц: ${pagesCountReport()}`);
// Удаление книги и вывод обновленной библиотеки
removeBookFromLibrary("1984"); console.log(library);