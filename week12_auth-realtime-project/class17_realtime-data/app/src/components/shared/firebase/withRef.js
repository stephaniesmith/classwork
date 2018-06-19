import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default ({ dbRef: dbRefStatic, propName }) => (Component) => {
  return class FirebaseRef extends PureComponent {

    static propTypes = {
      dbKey : PropTypes.string
    };

    state = { data: null };

    subscribe(dbKey) {
      if(dbKey === '') return;
      const { dbRef = dbRefStatic } = this.props;
      this.childRef = dbRef.child(dbKey);
      this.handler = this.childRef.on('value', data => {
        this.setState({ data: { ...data.val(), key: dbKey } });
      });
    }

    unsubscribe() {
      this.childRef.off('value', this.handler);
    }

    componentDidMount() {
      this.subscribe(this.props.dbKey);
    }

    //If DbKey is a different value, remove childRef listener and replace with new listener
    componentDidUpdate({ dbKey }) {
      if(dbKey === this.props.dbKey) return;
      this.unsubscribe();
      this.subscribe(dbKey);
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    render() {
      const { data } = this.state;
      if(!data) return <Component {...this.props}/>;
      const props = { 
        ...this.props,
        [propName]: data 
      };
      return <Component {...props}/>;
    }
  };
};