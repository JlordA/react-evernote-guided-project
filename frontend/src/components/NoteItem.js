import React from 'react';
import { render } from 'react-dom';

class NoteItem extends React.Component {


  localClickHandler = () => {
    this.props.clickHandler(this.props.note)
  }

  truncate(str) {
    return str.length > 10 ? str.substring(0, 15) + "..." : str
  }

  render() {
    return (
      <li onClick={this.localClickHandler}>
        <h2>{this.props.note.title}</h2>
        <p>{this.truncate(this.props.note.body)}</p>
      </li>

    )
  }
}


export default NoteItem;


