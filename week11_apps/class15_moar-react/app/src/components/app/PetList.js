import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPetList } from './reducers';
import { loadPets } from './actions';
import PetItem from './PetItem';

class Pets extends PureComponent {

  static propTypes = {
    loadPets: PropTypes.func.isRequired,
    pets: PropTypes.array
  };

  componentDidMount() {
    this.props.loadPets();
  }

  render() {
    const { pets } = this.props;

    return (
      <section>
        <ul>
          {pets.map(id => <PetItem key={id} id={id}/>)}
        </ul>
      </section>
    );
  }
}

export default connect(
  state => ({ pets: getPetList(state) }),
  { loadPets }
)(Pets);