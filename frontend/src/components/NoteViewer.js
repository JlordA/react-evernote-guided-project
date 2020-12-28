import React, { Fragment } from 'react';

const NoteViewer = (props) => {

  const localClickHandler = (e) => {
    props.editClickHandler(e)
  }

  return (
    <Fragment>
      <h2>{props.selectedNote.title}</h2>
      <p>{props.selectedNote.body}</p>
      <button onClick={localClickHandler}>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
