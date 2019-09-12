import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BookList from "./components/BookList";
import SearchPage from "./components/SearchPage";
import * as API from "./BooksAPI"

class BooksApp extends React.Component {
  state = {
    booklist: []
  }

  componentDidMount() {
    API.getAll().then(books => {
      this.setState({ booklist: books })
    })//initial setup. Fetch the data from API
  }

  onChange = (book, shelf) => {// handle user changing shelf for individual book. 
    API.update(book, shelf).then(data => {
      this.setState((prevState) => {
        return { booklist: [...prevState.booklist.filter((bookInList) => bookInList !== book), { ...book, shelf: shelf }] }// filter out the orginal book data from the list and replace it with the book with updated shelf info.
      })
    })
  }



  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <BookList booklist={this.state.booklist} onChange={this.onChange} />} />
        <Route exact path="/search" render={() => <SearchPage onChange={this.onChange} />} />
      </div>
    )
  }
}

export default BooksApp
