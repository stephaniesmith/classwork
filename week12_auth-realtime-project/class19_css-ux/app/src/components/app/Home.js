import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Home.css';
import FadeTransition from '../shared/FadeTransition';

class Home extends PureComponent {

  state = {
    show: false,
    score: 20,
    in: true
  };

  componentWillUnmount() {
    this.setState({ in: false });
  }

  render() {
    const { score } = this.state;

    return (
      <FadeTransition
        timeout={350}
        classNames="fade"
        shouldShow={this.state.in}
      >
        <section className={styles.home}>
          <button onClick={() => this.setState(({ show }) => ({ show: !show }))}>
            change
          </button>
          <CSSTransition
            in={this.state.show}
            mountOnEnter
            unmountOnExit
            classNames="fade"
            timeout={300}
          >
            <p className="content">This is the home page!</p>
          </CSSTransition>

          <p>
            <input type="range" min="20" max="100"
              value={score}
              onChange={({ target }) => this.setState({ score: target.value })}/>
          </p>
          <div className="score" style={{ width: score + 'px' }}></div>
        </section>
      </FadeTransition>
    );
  }
}

export default Home;