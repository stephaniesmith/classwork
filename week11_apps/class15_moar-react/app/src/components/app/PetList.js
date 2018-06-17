import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPetList } from './reducers';
import { loadPets } from './actions';
import PetItem from './PetItem';
import Search from './Search';

class Pets extends PureComponent {

  static propTypes = {
    loadPets: PropTypes.func.isRequired,
    pets: PropTypes.array
  };

  componentDidMount() {
    this.props.loadPets();
  }

  handleSearch = search => {
    // eslint-disable-next-line
    console.log('running search for', search, '...');
  }

  render() {
    const { pets } = this.props;

    return (
      <section>
        <Search onSearch={this.handleSearch}/>
        <Link to="/pets/new">Add a New Pet</Link>
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