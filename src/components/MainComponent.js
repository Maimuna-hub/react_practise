import React, { Component } from "react";
import bookList from "../assets/books";
import BookList from "./lists/BookList";

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: bookList,
            showBooks: true
        }
        console.log("MainComponent constructor")
    }

    //state - only work inside class component


    //useless
    // changeBookState = newBookName => {
    //   //this.state.books[0].bookName = "1974"; --wrong
    //   this.setState({
    //     books: [
    //       { bookName: newBookName, writer: "George Orwell" },
    //       { bookName: "The De Vinci Code", writer: "Dan Brown" },
    //       { bookName: "Metamorphosis", writer: "Franz kafka" }
    //     ]
    //   });
    // }

    deleteBookState = index => {
        //const books = this.state.books.slice();
        const books = [...this.state.books];
        books.splice(index, 1);
        this.setState({
            books: books
        });
    };

    changeWithInputState = (event, index) => {
        const book = {
            ...this.state.books[index]
        }

        book.bookName = event.target.value;
        const books = [...this.state.books];
        books[index] = book;

        this.setState({ books: books });
    }

    toggleBooks = () => {
        this.setState({ showBooks: !this.state.showBooks })
    }

    componentDidMount() {
        console.log("MainComponent componentDidMount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("U MainComponent shouldComponentUpdate", nextProps, nextState);
        return true;
    }

    componentDidUpdate() {
        console.log("U MainComponent componentDidUpdate");
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("MainComponet getDerivedStateFromProps", nextProps, prevState);
        return prevState;
    }


    getSnapshotBeforeUpdate() {
        console.log("U MainComponent getSnapshotBeforeUpdate");
    }

    render() {
        console.log("MainComponent render");
        const style = {
            border: "1px solid red",
            borderRadius: "5px",
            backgroundColor: "black",
            color: "white"
        };

        let books = null;
        if (this.state.showBooks) {
            books = <BookList
                books={this.state.books}
                deleteBookState={this.deleteBookState}
                changeWithInputState={this.changeWithInputStat}
            />
        }

        //console.log(books);
        //console.log(booksState);

        return (
            <div className="App" >
                {/* <h1>Hello world!</h1> */}
                {/* <Person name="Maimuna">I am some info perosn</Person>
        <Person name="Kulsum" />
        <Person name="Nurul amin" /> */}
                <h1 style={style} > Book List</h1>
                <button onClick={this.toggleBooks}>Toggle Books</button>
                {/* <button onClick={() => this.changeBookState("Nineteen Eighty_Four")}>Change State</button>
        <input type="text" onChange={this.changeWithInputState} /> */}
                {books}
                {/* <Book
          bookName={this.state.books[0].bookName}
          writer={this.state.books[0].writer}
          inputName={this.changeWithInputState} />
        <Book
          bookName={this.state.books[1].bookName}
          writer={this.state.books[1].writer} />
        <Book
          bookName={this.state.books[2].bookName}
          writer={this.state.books[2].writer} change={this.changeBookState.bind(this, "Nineteen 84")} /> */}
            </div >
        );
    }
}

export default MainComponent;
