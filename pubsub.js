function pubSub() {
  const subscribers = {};

  function publish(eventName, data) {
    if (!Array.isArray(subscribers[eventName])) {
      return;
    }
    subscribers[eventName].forEach((callback) => {
      callback(data);
    });
  }

  function subscribe(eventName, callback) {
    if (!Array.isArray(subscribers[eventName])) {
      subscribers[eventName] = [];
    }
    subscribers[eventName].push(callback);
  }

  return {
    publish,
    subscribe,
  };
}

function showMeTheMoney(money) {
  alert(money);
}

const ps = pubSub();

function subscribe() {
  ps.subscribe('show-money', showMeTheMoney);
}

function fire() {
  ps.publish('show-money', 1000000);
}
