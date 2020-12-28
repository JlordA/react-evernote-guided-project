import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {

  state = {
    arrayOfNotes: [],
    selectedNote: {},
    beenClicked: false,
    searchValue: ""
  }


  componentDidMount() {
    fetch('http://localhost:3000/api/v1/notes')
      .then(r => r.json())
      .then(returnedNotes => {
        this.setState({ arrayOfNotes: returnedNotes })
      }
      )
  }

  clickHandler = (noteObj) => {
    this.setState({ selectedNote: noteObj, beenClicked: true })
  }

  createNoteHandler = (noteObj) => {
    console.log(noteObj)
    fetch('http://localhost:3000/api/v1/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(noteObj),
    })
      .then(response => response.json())
      .then(newNote => {
        this.setState({ arrayOfNotes: [...this.state.arrayOfNotes, newNote]});
      })
  }

  editSubmitHandler = (newNote) => {
    let noteObj = {
      title: newNote.title,
      body: newNote.body
    }
    console.log("from note container edit submit handler", noteObj)
    fetch(`http://localhost:3000/api/v1/notes/${newNote.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(noteObj),
    })
      .then(response => response.json())
      .then(this.setState({ arrayOfNotes: this.state.arrayOfNotes })
      )
  }

  searchHandler = (e) => {
    this.setState({ searchValue: e.target.value })
  }

  // filteredNotes = () => {
  //   return this.state.arrayOfNotes.filter(note => note.title.toLowerCase().includes(this.state.searchValue.toLowerCase()))
  // }

  // let notes = this.filteredNotes().map(noteObj => <)

  render() {
    // console.log(this.state.selectedNote)
    // console.log(this.state.beenClicked)
    console.log(this.state.searchValue)
    // console.log(this.filteredNotes())
    let filteredNotes = this.state.arrayOfNotes.filter(note => note.title.toLowerCase().includes(this.state.searchValue.toLowerCase()))
    return (
      <Fragment>
        <Search searchValue={this.state.searchValue} searchHandler={this.searchHandler} />
        <div className='container'>
          <Sidebar createNoteHandler={this.createNoteHandler} clickHandler={this.clickHandler} filteredNotes={filteredNotes} />
          <Content beenClicked={this.state.beenClicked} editSubmitHandler={this.editSubmitHandler} selectedNote={this.state.selectedNote} />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
