import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect, Link } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { getPetById } from './reducers';
import { loadPet } from './actions';

class PetDetail extends PureComponent {

  static propTypes = {
    loadPet: PropTypes.func.isRequired,
    pet: PropTypes.object,
    id: PropTypes.string.isRequired
  };

  componentDidMount() {
    const { loadPet, id } = this.props;
    loadPet(id);
  }

  render() {
    const { pet } = this.props;
    if(!pet) return null;

    return (
      <article>
        <h3>{pet.name} the {pet.type}</h3>
        <Link to={`/pets/${pet._id}/paragraph`}>paragraph view</Link>
        <Link to={`/pets/${pet._id}/list`}>list view</Link>

        <p>Favorite Toys are {pet.favoriteToys && pet.favoriteToys.join(', ')}</p>
      </article>
    );
  }
}

export default connect(
  (state, { id }) => ({ 
    pet: getPetById(state, id) 
  }),
  { loadPet }
)(PetDetail);