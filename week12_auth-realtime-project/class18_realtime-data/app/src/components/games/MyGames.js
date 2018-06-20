import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withList from '../shared/firebase/withList';

class MyGames extends PureComponent {

  static propTypes = {
    games: PropTypes.array
  }

  render() {
    const { games } = this.props;
    if(!games) return null;

    return (
      <section>
        <h2>Active Games</h2>
        {/* <pre>{JSON.stringify(games, true, 2)}</pre> */}
        <ul>
          {games.map((key, i) => (
            <li key={key}>
              <Link to={`/games/${key}`}>Play Game {i + 1}</Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default withList({ 
  propName: 'games'
})(MyGames);