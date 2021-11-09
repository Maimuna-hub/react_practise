import React, { Component } from "react";
import Book from "../representational/Book";


// const BookList = props => {
//     return (
//         props.books.map((book, index) => {
//             return (
//                 <Book
//                     bookName={book.bookName}
//                     writer={book.writer}
//                     delete={() => props.deleteBookState(index)}
//                     key={book.id}
//                     inputName={(event) => props.changeWithInputState(event, index)}
//                 />
//             );
//         })
//     );
// }

class BookList extends Component {
    constructor(props) {
        super(props);
        console.log("BookList Cpnstructor");
    }

    componentDidMount() {
        console.log("BookList componentDidMount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("U Booklist shouldComponentUpdate", nextProps, nextState);
        return true;
    }

    componentDidUpdate() {
        console.log("U booklist componentDidUpdate ");
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("MainComponet getDerivedStateFromProps", nextProps, prevState);
        return prevState;
    }

    getSnapshotBeforeUpdate() {
        console.log("U BookList getSnapshotBeforeUpdate");
    }

    render() {
        console.log("BookLisrt render");
        return (
            this.props.books.map((book, index) => {
                return (
                    <Book
                        bookName={book.bookName}
                        writer={book.writer}
                        delete={() => this.props.deleteBookState(index)}
                        key={book.id}
                        inputName={(event) => this.props.changeWithInputState(event, index)}
                    />
                );
            })
        );
    }
}

export default BookList;