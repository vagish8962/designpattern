const modulePattern = (name) => {
  return () => name;
};

const myName = modulePattern('Vagish');
console.log(myName());
