import React, { Component } from 'react'

export default class Book extends Component {
    render() {
        const { book, onChange } = this.props; /*grab the book and onChange funciton from props passed by parental component */
        return (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select value={book.shelf ? book.shelf : "none"} onChange={e => { onChange(book, e.target.value) }} > {/* if the book doesn't have a shelf field, then set it to 'none'*/}
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading" >Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    {book.authors && book.authors.map((author) => (<div key={author} className="book-authors">{author}</div>))} {/* some books dont't have an authors field, so we need to check it first */}
                </div>
            </li>

        )
    }
}
