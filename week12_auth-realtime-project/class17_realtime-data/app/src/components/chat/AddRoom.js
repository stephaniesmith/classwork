import React, { PureComponent } from 'react';
import FormControl from '../shared/FormControl';
import { addRoom } from './actions';

const initRoom = () => ({
  name: ''
});

class AddRoom extends PureComponent {

  state = initRoom();

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { name } = this.state;
    addRoom({ name }).then(() => {
      this.setState(initRoom());
    });
  }
  render() {
    const { name } = this.state;

    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <FormControl label="Name">
            <input name="name" value={name} onChange={this.handleChange}/>
          </FormControl>
          <button>Add</button>
        </form>
      </section>
    );
  }
}

export default AddRoom;