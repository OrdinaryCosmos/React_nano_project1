import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Book from './Book'



export default class BookList extends Component {

    static defaultProps = {// set the shelves of the books. 
        shelves: ["currentlyReading", "wantToRead", "read"]
    }
    render() {
        return (
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            {this.props.shelves.map(shelf => (<div className="bookshelf" key={shelf}> {/*catergorize the books according to their shelf field  */}
                                <h2 className="bookshelf-title">{shelf}</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {this.props.booklist.filter(book => book.shelf === shelf).map(book => (<Book key={book.id} book={book} onChange={this.props.onChange} />))}
                                    </ol>
                                </div>
                            </div>
                            ))}

                        </div>
                    </div>
                    <div className="open-search">
                        <Link to="/search"><button>Add a book</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
