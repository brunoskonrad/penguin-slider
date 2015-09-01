import EventEmitter from 'events';
import assign from 'object-assign';

let tabs = [];
const TAB_CHANGE_EVENT = 'tab:change';
const SWIPE_EVENT = 'tab:swipe';

const PenguinStore = assign({}, EventEmitter.prototype, {
  getTabs() {
    return tabs;
  },

  emitTabChange(index) {
    this.emit(TAB_CHANGE_EVENT, index);
  },

  addTabChangeListener(callback) {
    this.on(TAB_CHANGE_EVENT, callback);
  },

  removeTabChangeListener(callback) {
    this.removeListener(TAB_CHANGE_EVENT, callback)
  },

  emitSwipe(index) {
    this.emit(SWIPE_EVENT, index);
  },

  addSwipeListener(callback) {
    this.on(SWIPE_EVENT, callback);
  },

  removeSwipeListener(callback) {
    this.removeListener(SWIPE_EVENT, callback)
  }
});

export default PenguinStore;
