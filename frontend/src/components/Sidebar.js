import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {

  state = {
    title: "default",
    body: "placeholder"
  }

  localCreateNoteHandler = () => {
    this.props.createNoteHandler(this.state)
  }

  render() {
    return (
      <div className='master-detail-element sidebar'>
        <NoteList clickHandler= {this.props.clickHandler} filteredNotes={this.props.filteredNotes}/>
        <button onClick={this.localCreateNoteHandler}>New</button>
      </div>
    );
  }
}

export default Sidebar;
