import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {

  state = {
    editClicked: false,
    saveClicked: false
  }

  editClickHandler = () => {
    let newBoolean = !this.state.editClicked
    this.setState({ editClicked: newBoolean})
  }

  cancelClickHandler = () => {
    this.setState({ editClicked: false })
  }

  // exitEditHandler = () => {
  //   if(this.state.editClicked === true && this.props.beenClicked === true){
  //     this.setState({ editClicked: false })
  //   }
  // }

  renderContent = () => {
    if (this.state.editClicked === true) {
      return <NoteEditor editSubmitHandler={this.props.editSubmitHandler} selectedNote={this.props.selectedNote} cancelClicked={this.cancelClickHandler}/>;
    } else if (this.props.beenClicked === true) {
      return <NoteViewer editClickHandler={this.editClickHandler} selectedNote={this.props.selectedNote} />;
    } else {
      return <Instructions />
      ;
    }
  }

  render() {
    console.log(this.state.editClicked)
    console.log(this.props.beenClicked)
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;


