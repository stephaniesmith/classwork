import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from './actions';
import { getCommentsByFruit } from './reducers';
import AddComment from './AddComment';

class Comments extends PureComponent {

  static propTypes = {
    fruitId: PropTypes.string.isRequired,
    comments: PropTypes.array,
    addComment: PropTypes.func.isRequired
  }

  handleAdd = text => {
    const { fruitId, addComment } = this.props;
    addComment(fruitId, { text });
  }

  render() {
    const { comments } = this.props;

    return (
      <div>
        <ul>
          {comments.map(comment => {
            return (
              <li key={comment.id}>
                {comment.text} 
                {comment.timestamp && <span> on {comment.timestamp.toLocaleString()} </span>}
              </li>
            );
          })}
        </ul>
        <AddComment onAdd={this.handleAdd}/>
      </div>
    );
  }
}

export default connect(
  (state, { fruitId }) => {
    return { 
      comments: getCommentsByFruit(fruitId, state)
    };
  },
  { addComment }
)(Comments);