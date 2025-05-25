// Object Literal Method
function Book (title, author, pages, isReaded){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isReaded = isReaded;
    this.info = function () {
        console.log(`${title} by ${author}, ${pages}pages, ${isReaded ? "already readed" : "not read yet"}`)
    }
}


const book1 = new Book("The dark pictures of Anthology","John Gilbert", 295, true);
book1.info();

