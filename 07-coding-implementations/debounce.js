// Execute only after calls stop for `delay` milliseconds.
function debounce(callback, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    const context = this;
    timer = setTimeout(() => callback.apply(context, args), delay);
  };
}

if (require.main === module) {
  const search = debounce(value => console.log("Search:", value), 200);
  search("rea");
  search("react");
}

module.exports = debounce;
