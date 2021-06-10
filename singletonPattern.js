const singletonPattern = (() => {
  let instance = null;
  const createInstance = () => {
    return {
      name: 'Vagish',
    };
  };
  return {
    getInstance() {
      if (instance === null) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const getIntanceeA = singletonPattern.getInstance();

const getIntanceeB = singletonPattern.getInstance();

console.log(getIntanceeA === getIntanceeB);
