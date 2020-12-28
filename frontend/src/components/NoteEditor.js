import React, { Component } from 'react';

class NoteEditor extends Component {

  state = {
    title: this.props.selectedNote.title,
    body: this.props.selectedNote.body,
    id: this.props.selectedNote.id
  }

  editTitle = (e) => {
    this.setState({ title: e.target.value })
  }

  editBody = (e) => {
    this.setState({ body: e.target.value })
  }

  localEditSubmitHandler = (e) => {
    e.preventDefault()
    this.props.editSubmitHandler(this.state)
  }

  localClickhandler = (e) => {
    console.log("clicked", e)
    this.props.cancelClicked()
  }

  render() {
    return (
      <form className="note-editor" onSubmit={this.localEditSubmitHandler}>
        <input type="text" name="title" value={this.state.title} onChange={this.editTitle}/>
        <textarea name="body" value={this.state.body} onChange={this.editBody}/>
        <div className="button-row">
          <input className="button" type="submit" value="Save"/>
          <button type="button" onClick={this.localClickhandler}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
