import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect, Link } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { getPetById } from './reducers';
import { loadPet } from './actions';

class PetDetail extends PureComponent {

  static propTypes = {
    loadPet: PropTypes.func.isRequired,
    match: PropTypes.object,
    pet: PropTypes.object,
  };

  componentDidMount() {
    const { loadPet, match } = this.props;
    loadPet(match.params.id);
  }

  render() {
    const { pet, match } = this.props;
    if(!pet || !pet.favoriteToys) return null;
    const { url } = match;
    
    return (
      <article>
        <h3>{pet.name} the {pet.type}</h3>
        {/* <div>
          <Link to={`${url}/paragraph`}>paragraph view</Link>
          &nbsp;
          <Link to={`${url}/list`}>list view</Link>
        </div> */}

        <Switch>
          <Route path={`${url}/paragraph`} render={() => {
            return <p>Favorite Toys are {pet.favoriteToys && pet.favoriteToys.join(', ')}</p>;
          }}/>
          <Route path={`${url}/list`} render={() => {
            return (
              <ul>
                {pet.favoriteToys.map((toy, i) => <li key={i}>{toy}</li>)}
              </ul>   
            );
          }}/>
          <Redirect to={`${url}/list`}/>
        </Switch>
          
      </article>
    );
  }
}

export default connect(
  (state, { match }) => ({ 
    pet: getPetById(state, match.params.id)
  }),
  { loadPet }
)(PetDetail);