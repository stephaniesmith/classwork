import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getError } from './reducers';
import { clearError } from './actions';
import PropTypes from 'prop-types';
import styles from './Error.css';
import { CSSTransition } from 'react-transition-group';

class Error extends PureComponent {

  static propTypes = {
    error: PropTypes.any,
    clearError: PropTypes.func.isRequired
  }

  componentDidUpdate() {
    if(!this.props.error) return;
    setTimeout(this.props.clearError, 5000);
  }

  render() {
    const { error } = this.props;
    // if(!error) return null;


    return (
      <div className={styles.error}>
        <CSSTransition
          in={!!error}
          key={0}
          classNames="message"
          timeout={1300}
          unmountOnExit
        >
          <section onClick={this.props.clearError}>
            {error && (error.message || error.error || error.toString())}
          </section>
        </CSSTransition>
      </div>
    );
  }
}

export default connect(
  state => ({
    error: getError(state)
  }),
  { clearError }
)(Error);