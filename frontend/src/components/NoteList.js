import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {

  const renderNotes = () => {
    // return props.arrayOfNotes.map(noteEl => <NoteItem key={noteEl.id} note={noteEl} clickHandler={props.clickHandler}/>)
    return props.filteredNotes.map(noteEl => <NoteItem key={noteEl.id} note={noteEl} clickHandler={props.clickHandler}/>)

  } 

  return (
    <ul>
      {renderNotes()}
      {/* <NoteItem /> */}
    </ul>
  );
}

export default NoteList;
