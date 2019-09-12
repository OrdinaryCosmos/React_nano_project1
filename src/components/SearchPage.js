import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as API from '../BooksAPI';
import Book from "./Book"

export default class SearchPage extends Component {

    state = { resultData: [] }

    onSearchChange = (event) => {
        if (event.target.value.trim() !== "") {
            API.search(event.target.value).then(data => {
                if (Array.isArray(data)) {// guard against invalid query and result
                    this.setState({ resultData: data })
                }
            }
            )
        }

    }



    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/"><button className="close-search">Close</button></Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={this.onSearchChange} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.resultData.map((book) => (<Book book={book} key={book.id} onChange={(book, shelf) => {
                            this.props.onChange(book, shelf);
                            this.setState((prevState) => {
                                return { resultData: prevState.resultData.filter(fetchedBook => fetchedBook.id !== book.id) }
                            })// after changing the book's shelf, we also need to update the state of this page to reflect this change. 
                        }} />))}
                    </ol>
                </div>
            </div>
        )
    }
}
