function EventObserver() {
  this.events = [];
}

EventObserver.prototype = {
  subscribe(fn) {
    this.events.push(fn);
  },
  unsubscribe(fn) {
    this.events.filter((_fn) => fn !== fn);
  },
  fire(arg) {
    const scope = this;
    this.events.forEach((fn) => {
      fn.call(scope, arg);
    });
  },
};
const clickHandler = function (item) {
  alert('fired: ' + item);
};
const click = new EventObserver();
function subscribe() {
  click.subscribe(clickHandler);
}

function fire() {
  click.fire('Event 1');
}
