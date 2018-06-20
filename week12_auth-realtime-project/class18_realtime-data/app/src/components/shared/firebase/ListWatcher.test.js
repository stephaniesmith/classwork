import EventEmitter from 'events';
import ListWatcher from './ListWatcher';

describe('withList', () => {

  const query = new EventEmitter();
  query.off = query.removeListener;

  const subscriber = jest.fn();
  const watcher = new ListWatcher(query, subscriber);

  const getList = index => subscriber.mock.calls[index][0];

  describe('adds', () => {

    it('adds a child', () => {
      query.emit('child_added', { key: 123 });
      expect(getList(0)).toEqual([123]);
    });

    it('adds a second child', () => {
      query.emit('child_added', { key: 456 }, 123);
      expect(getList(1)).toEqual([123, 456]);
    });
  
    it('adds child by key', () => {
      query.emit('child_added', { key: 789 }, 123);
      expect(getList(2)).toEqual([123, 789, 456]);
    });

  });

  describe('removes', () => {
    it('removes by key', () => {
      query.emit('child_removed', { key: 123 });
      expect(getList(3)).toEqual([789, 456]);
    });
  });

  describe('moves', () => {

    beforeAll(() => {
      query.emit('child_added', { key: 400 }, 456);
    });

    it('moves a child by key', () => {
      query.emit('child_moved', { key: 400 }, 789);
      expect(getList(5)).toEqual([789, 400, 456]);
    });

    it('moves a child to top of list', () => {
      query.emit('child_moved', { key: 456 }, null);
      expect(getList(6)).toEqual([456, 789, 400]);
    });
  });

  describe('destroy', () => {
    
    let limit;
    beforeAll(() => {
      limit = subscriber.mock.calls.length;
      watcher.destroy();
    });

    it('add does not fire when destroyed', () => {

      query.emit('child_added', { key: 100 }, 123);
      query.emit('child_removed', { key: 456 });
      query.emit('child_moved', { key: 400 }, null);

      expect(subscriber.mock.calls.length).toBe(limit);
    });
  });

});