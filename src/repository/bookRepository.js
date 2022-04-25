import axios from '../custom-axios/axios.js'

const BookService = {

    fetchBooks: () => {
        return axios.get("/books");
    },
    fetchCategories: () => {
        return axios.get("/categories");
    },
    fetchAuthors: () => {
        return axios.get("/authors");
    }
    ,
    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`);
    },
    addBook: (name, author, category, availableCopies) => {
        return axios.post("/books/add", {
            "name" : name,
            "author" : author,
            "category" : category,
            "availableCopies": availableCopies
        });
    },
    editBook: (id, name, category, author,availableCopies) => {
        return axios.put(`/books/edit/${id}`, {
            "name" : name,
            "category" : category,
            "author" : author,
            "availableCopies": availableCopies
        });
    },
    getBook: (id) => {
        return axios.get(`/books/${id}`);
    },
    markAsTaken: (id)=>{
        return axios.get(`/books/markAsTaken/${id}`);
    }


}

export default BookService;