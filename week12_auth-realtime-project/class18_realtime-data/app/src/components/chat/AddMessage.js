import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { addMessage } from './actions';
import { chatsRef, imageStorageRef } from '../../services/firebaseRef';
import styles from './AddMessage.css';


const initMessage = () => ({
  text: '',
  image: ''
});

class AddMessage extends PureComponent {

  static propTypes = {
    dbKey: PropTypes.string.isRequired
  };

  state = initMessage();

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleKeyPress = event => {
    if(event.key !== 'Enter' || event.shiftKey) return;
    this.handleSubmit();
  };

  handleSubmit = event => {
    event && event.preventDefault();
    const { text } = this.state;
    const { dbKey } = this.props;

    this.uploadFile()
      .then(image => {
        const message = { 
          text,
          created: -new Date().getTime()
        };
        if(image) message.image = image;

        return addMessage(dbKey, message);
      })
      .then(() => {
        this.fileInput.value = null;
        this.setState(initMessage());
      });
  }

  uploadFile() {
    return new Promise((resolve, reject) => {
      const { files } = this.fileInput;
      if(!files || !files.length) resolve();

      const key = chatsRef.push().key;
      const uploadTask = imageStorageRef.child(key).put(files[0]);
      
      uploadTask.on('state_changed', (/*snapshot*/) => {
        // progress, pause and cancel events
      }, reject, () => {
        // success! now let's get the download url...
        uploadTask.snapshot.ref.getDownloadURL().then(resolve);
      });

    });
  }

  render() {
    const { text, image } = this.state;

    return (
      <section className={styles['add-message']}>
        <p>ImageUrl: { image }</p>
        <form onSubmit={this.handleSubmit}>
          <textarea name="text" value={text} 
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}/>
          <button>Send</button>
          <input type="file" ref={node => this.fileInput = node}/>
        </form>
      </section>
    );
  }
}

export default AddMessage;