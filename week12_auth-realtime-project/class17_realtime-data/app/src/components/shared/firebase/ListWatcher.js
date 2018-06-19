export default class ListWatcher {
  constructor(query, subscriber) {
    let list = [];
    this.query = query;

    //to check if there is even a list
    query.once('value', (data) => {
      const items = data.val();
      if(!items) subscriber(list);
    });

    // added
    this.childAddedHandler = ({ key }, prevKey) => {

      if(!prevKey) list = [key, ...list];
      else {
        const index = list.findIndex(key => key === prevKey);
        list = [
          ...list.slice(0, index + 1),
          key,
          ...list.slice(index + 1)
        ];
      }

      subscriber(list);
    };
    query.on('child_added', this.childAddedHandler);

    // removed
    this.childRemovedHandler = ({ key }) => {
      list = list.filter(k => k !== key);
      subscriber(list);
    };
    query.on('child_removed', this.childRemovedHandler);

    // moved
    this.childMovedHandler = ({ key }, prevKey) => {
      const current = list.findIndex(k => k === key);

      const before = prevKey
        ? list.findIndex(k => k === prevKey)
        : -1;

      list = list.slice();
      const [removed] = list.splice(current, 1);
      list.splice(before + 1, 0, removed);

      subscriber(list);
    };
    query.on('child_moved', this.childMovedHandler);
  }

  destroy() {
    this.query.off('child_added', this.childAddedHandler);
    this.query.off('child_removed', this.childRemovedHandler);
    this.query.off('child_moved', this.childMovedHandler);
  }
}
