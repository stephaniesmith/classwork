import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ListWatcher from './ListWatcher';

export default ({ dbQuery, propName }) => Component => {
  return class FirebaseListRef extends PureComponent {

    static propTypes = {
      dbQuery : PropTypes.object
    };
    
    state = { list: null };
    watcher = null;

    subscribe(dbQuery) {
      if(!dbQuery) return;
      this.watcher = new ListWatcher(dbQuery, list => this.setState({ list }));
    }

    unsubscribe() {
      if(!this.watcher) return;
      this.watcher.destroy();
    }

    componentDidMount() {
      this.subscribe(this.props.dbQuery || dbQuery);
    }

    //If dbQuery is a different value, unsubscribe and start over
    componentDidUpdate(prevProps) {
      const { dbQuery } = this.props;
      if(prevProps.dbQuery === dbQuery) return;
      this.unsubscribe();
      this.subscribe(dbQuery);
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    render() {
      const { list } = this.state;

      const props = { 
        ...this.props,
        [propName]: list 
      };
      return <Component {...props}/>;
    }
  };
};