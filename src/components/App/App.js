import './App.css';
import React, {Component} from "react";
import Header from "../Header/header";
import BookService from "../../repository/bookRepository";
import AddBook from "../Book/AddBook.js";
import EditBook from "../Book/EditBook.js"
import Category from '../Category/category.js';
import Author from '../Author/author.js';
import Book from "../Book/book.js";
import {BrowserRouter as Router, Redirect, Route, Routes} from 'react-router-dom';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            authors: [],
            categories: [],
            countries: [],
            selectedBook: {}
        }
    }

    render() {
        return (

            <Router>
                <Header/>
                <main>
                    <div className="container">
                        <Routes>
                            <Route path={"/categories"} element={<Category categories={this.state.categories}/>}/>
                                           <Route path={"/books/add"} element={
                                <AddBook categories={this.state.categories}
                                         authors={this.state.authors}
                                         onAddBook={this.addBook}/>}/>
                            <Route path={"/books/edit/:id"} element={
                                <EditBook categories={this.state.categories}
                                          authors={this.state.authors}
                                          onEditBook={this.editBook}
                                          book={this.state.selectedBook}/>}/>
                            <Route path={"/books"} element={
                                <Book books={this.state.books}
                                onDelete={this.deleteBook}
                                      onEdit={this.getBook}
                                       onMarkAsTaken={this.markAsTakenBook}/>}/>
                           <Route path={"/books"}/>

                       </Routes>

                    </div>
                </main>
            </Router>
        )
    };

     componentDidMount() {
         this.loadBooks();
         this.loadCategories();
         this.loadAuthors();
     }


     loadBooks = () => {

         BookService.fetchBooks().then((data) => {
             this.setState({
                 books: data.data
             })
         });
     }

     loadCategories = () => {
         BookService.fetchCategories().then((data) => {
             this.setState({
                 categories: data.data
             })
         });
     }
     loadAuthors = () => {

         BookService.fetchAuthors().then((data) => {
             this.setState({
                 authors: data.data
             })
         });
     }

     getBook = (id) => {
         BookService.getBook(id).then((data) => {
             this.setState({
                 selectedBook: data.data
             })
         });
     }

     deleteBook = (id) => {
         BookService.deleteBook(id).then(() => {
             this.loadBooks();
         });
     }

     addBook = (name, category, author, availableCopies) => {
         BookService.addBook(name, category, author, availableCopies)
             .then(() => {
                 this.loadBooks()
             });
     }

     editBook = (id, name, category, author, availableCopies) => {
         BookService.editBook(id, name, category, author, availableCopies)
             .then(() => {
                 this.loadBooks()
             });
     }

     markAsTakenBook = (id) => {
         BookService.markAsTaken(id).then((data) => {
             this.loadBooks()
         });
     }
}

export default App;
