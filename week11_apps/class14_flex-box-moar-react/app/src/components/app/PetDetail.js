import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPet } from './reducers';
import { loadPet, clearPet } from './actions';

class PetDetail extends PureComponent {

  static propTypes = {
    loadPet: PropTypes.func.isRequired,
    clearPet: PropTypes.func.isRequired,
    pet: PropTypes.object,
    id: PropTypes.string.isRequired
  };

  componentDidMount() {
    const { loadPet, id } = this.props;
    loadPet(id);
  }

  componentWillUnmount() {
    this.props.clearPet();
  }

  render() {
    const { pet } = this.props;
    if(!pet) return null;

    return (
      <article>
        <h3>{pet.name} the {pet.type}</h3>
        <p>Favorite Toys are {pet.favoriteToys.join(', ')}</p>
      </article>
    );
  }
}

export default connect(
  (state /*, props*/) => ({ 
    pet: getPet(state),
    // petId: props.match.params.id
  }),
  { loadPet, clearPet },
  // (propsFromMapStateToProps, propsFromMapDispatchtoProps, ownPropsFromParent) => {
  // (state, dispatch, ownProps) => {
  //   return {
  //     ...state,
  //     ...dispatch,
  //     petId: ownProps.match.params.id
  //   }
  // }
)(PetDetail);