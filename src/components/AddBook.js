import React,  {Component} from 'react'

class AddBook extends Component{
    constructor(){
        super();
        this.state={
            title:'',
            author:''
        }

        this.onTitleChange=this.onTitleChange.bind(this);
        this.onAuthorChange=this.onAuthorChange.bind(this);
        this.addBook=this.addBook.bind(this);
    }

    onTitleChange(e)
    {
        var title=e.target.value;

        console.log(title)

        this.setState({
            title
        })
    }

    onAuthorChange(e)
    {
        var author=e.target.value;

        this.setState({
            author
        })
    }

    addBook(){
        var title=this.state.title;
        var author=this.state.author;

        var body="title=" + title + "&author=" + author;
        console.log(body)

        fetch("/api/books",{
            method:"POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            body:body
        })
        .then((response)=>response.json())
        .then((book)=>{
            console.log(JSON.stringify(book))
            alert("New Book is added to library");
        })
        .catch((error)=>{
            console.log(JSON.stringify(error))
        })
    }

    render(){
        return(
            <div>
                <h1>Add Book</h1>
                <input type="text" name="title" onChange={this.onTitleChange}/>
                <input type="text" name="author" onChange={this.onAuthorChange}/>
                <button onClick={this.addBook}>Add Book</button>
            </div>
        )
    }
}

export default AddBook;