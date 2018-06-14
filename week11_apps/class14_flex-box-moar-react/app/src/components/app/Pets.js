import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPets } from './reducers';
import { loadPets } from './actions';
import { Link } from 'react-router-dom';

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
          {pets.map(pet => {
            return (
              <li key={pet._id}>
                <Link to={`/pets/${pet._id}`}>{pet.name}</Link>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default connect(
  state => ({ pets: getPets(state) }),
  { loadPets }
)(Pets);