import React, {Component} from 'react';
import Comments from './Comments';
import NewComment from './NewComment'

class App extends Component {
  state = {
    newComment: '',
    comments: [
    ]
  }
  sendComment = comment => {
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }
  render() {
    return(
      <>
      <NewComment sendComment={this.sendComment}/>
      <Comments comments={this.state.comments}/>
      </>
    )
  }
}

export default App;
